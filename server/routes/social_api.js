"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const USER_DATA_PATH = './server/user_data.json';


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

const User = require('../models/user');
const func = require('./function_module');

router.post('/social/write_to_db', (req, res) => {
    fs.readFile(USER_DATA_PATH, (err, usersFromFile) => {
        if (err) {
            console.log("File ", USER_DATA_PATH, " doesn't exist!");
            throw err;
        }
        else {
            JSON.parse(usersFromFile).forEach((u) => {
                let user = new User({
                    id: u.id,
                    name: {
                        first: u.firstName,
                        last: u.surname == '' ? '' : u.surname
                    },
                    age: u.age == null ? -1 : u.age,
                    gender: u.gender,
                    friends: u.friends,
                    friendsObj: []
                });
                user.save();
            }, this);

        }

    });
});

router.post("/social/test", (req, res) => {
    User.find({}, (err, all) => {
        all.forEach((user) => {
            User.find({ id: { $in: user.friends } }, (err_friends, friends) => {
                friends.forEach((f) => {
                    User.findOneAndUpdate({ _id: user._id },
                        { $push: { friendsObj: f._id } },
                        { safe: true, upsert: true }, (err_f, u) => {
                            if (err_f) {
                                console.log("err");
                            }
                            else {
                                console.log("successfull");
                            }
                        });
                });
            });
        });
    });
})

// moji prijatelji
router.get('/social/user_friends/:userId', (req, res) => {
    User.findById(req.params.userId).populate('friendsObj').exec((err, user) => {
        if (err) {
            res.json({ myFriends: [] });
        }
        else {
            res.json({ myFriends: user.friendsObj });
        }
    });
});

// prijatelji mojih prijatelja, a da ih ja nemam za prijatelja
router.get('/social/friends_of_my_friends/:userId', (req, res) => {
    User.findById(req.params.userId).populate('friendsObj').exec((err, user) => {
        if (err) {
            res.json({ myFriends: [] });
        }
        else {
            let myFriends = user.friendsObj; // svi moji prijatelji
            let friendsOfMyFriends = [];
            let ii = 0;
            user.friendsObj.forEach((friend, i) => { // moji prijatelji

                User.findById(friend._id).populate('friendsObj').exec((err_f, friends) => { // njihovi prijatelji
                    if (err_f) {

                    }
                    else {
                        let jj = 0;
                        friends.friendsObj.forEach((friendOfMyFriend, j) => {
                            jj++;
                            if (friendOfMyFriend._id.toString() != user._id.toString()) {
                                let find = myFriends.find(x => x._id.toString() == friendOfMyFriend._id.toString());
                                if (find == undefined) { // ako nihov prijatelj nije medju mojim prijateljima
                                    if (friendsOfMyFriends.find((f) => f._id.toString() == friendOfMyFriend._id.toString()) == undefined) {
                                        friendsOfMyFriends.push(friendOfMyFriend);
                                    }
                                }
                            }
                            if (j == friends.friendsObj.length - 1) {
                                ii++;
                            }

                            if (user.friendsObj.length - 1 == ii - 1 && friends.friendsObj.length - 1 == jj - 1) {
                                res.json({ frendsOfMyFriendsWhoAreNotMyFriends: friendsOfMyFriends });
                            }

                        }, this);
                    }
                });

            }, this);
        }
    });
});

// predlozeni prijatelji-> ljudi koji znaju 2 ili vise mojih prijatelja a nisu moji prijatelji
router.post('/social/suggested/:userId', (req, res) => {
    User.findById(req.params.userId).populate('friendsObj').exec((err, user) => {
        if (err) {
            res.json({ friendsOfMyFriendsWhoAreNotMyFriends: [], mutual: [] });
        }
        else {
            let myFriends = user.friendsObj; // svi moji prijatelji
            let suggestedFriends = [];
            let ii = 0;
            let length = myFriends.length;
            let mutualFriends = [];
            user.friendsObj.forEach((friend, i) => { // moji prijatelji
                let friendsOfMyFriend = friend.friendsObj;

                func.suggestedFriends(user, friend, suggestedFriends, mutualFriends, myFriends, () => {
                    ii++;
                    if (ii == length) {
                        res.json({ friendsOfMyFriendsWhoAreNotMyFriends: suggestedFriends, mutual: mutualFriends });
                    }
                });

            }, this);
        }
    });
});


router.get('/social/make_graph', (req, res) => {
    let nodes = []; //[{ id: String, group: Number }];
    let links = []; //[{ source: String, target: String, value: Number }]
    let names = []; //[{id:String, fullname:String}]
    User.find({}).populate('friendsObj').exec((err, users) => {
        if (err) {
            res.json({ data: { nodes: nodes, links: links }, names: names });
        }
        else {
            let i = 0;
            users.forEach((user, group) => {
                names.push({ id: user._id, fullname: user.id + ". " + user.name.first + " " + user.name.last });
                nodes.push({ id: user._id, group: group });
                let j = 0;
                user.friendsObj.forEach((friend, value) => {
                    j++;
                    links.push({ source: user._id, target: friend._id, value: value });
                    if (j == user.friendsObj.length) {
                        i++;
                    }
                }, this);
                if (i == users.length) {
                    let obj = {
                        data: { nodes: nodes, links: links },
                        names: names
                    }
                    res.json(obj);
                }
            }, this);
        }
    });

});

router.post('/social/profile/:userId', (req, res) => {
    User.findById(req.params.userId).populate('friendsObj').exec((err, user) => {
        if (err) {

        }
        else {
            res.json(user);
        }
    })
})

module.exports = router;