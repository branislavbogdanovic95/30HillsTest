let User = require('../models/user');

let self = module.exports = {

    aggregation: (user, friendOfMyFriend, suggestedFriends, myFriends, callback) => {
        User.aggregate([
            { $match: { _id: { $in: [user._id, friendOfMyFriend._id] } } },
            { $group: { _id: 0, user: { $first: "$friends" }, friendOfFriend: { $last: "$friends" } } },
            { $project: { commonFriends: { $setIntersection: ["$user", "$friendOfFriend"] }, _id: 0 } }
        ], (err, data) => {
            data = data[0];
            if (data.commonFriends != undefined && data.commonFriends.length >= 2) {
                let find = suggestedFriends.find(x => x._id.toString() == friendOfMyFriend._id.toString());
                if (find == undefined) {
                    suggestedFriends.push(friendOfMyFriend);
                }
            }
            callback();
        });
    },

    suggestedFriends: (user, friend, suggestedFriends, mutualFriends, myFriends, callback) => {
        let length = 0;
        let jj = 0;
        self.mutalFriends(user._id, friend._id, (number) => {
            mutualFriends.push({ friend: friend._id, number: number });

            User.findById(friend._id).populate('friendsObj').exec((err_f, friends) => { // njihovi prijatelji
                if (err_f) { }
                else {
                    length = friends.friendsObj.length;
                    friends.friendsObj.forEach((friendOfMyFriend, j) => {
                        let find2 = myFriends.find(x => x._id.toString() == friendOfMyFriend._id.toString());
                        if (find2 == undefined && friendOfMyFriend._id.toString() != user._id.toString()) {
                            self.aggregation(user, friendOfMyFriend, suggestedFriends, myFriends, () => {
                                jj++;
                                if (length == jj) {
                                    callback();
                                }
                            });
                        }
                        else {
                            length--;
                        }

                        if (length == jj) {
                            callback();
                        }
                    });

                }
            });
        });
    },

    mutalFriends: (userId, friendId, callback) => {
        User.aggregate([
            { $match: { _id: { $in: [userId, friendId] } } },
            { $group: { _id: 0, user: { $first: "$friends" }, friendOfFriend: { $last: "$friends" } } },
            { $project: { commonFriends: { $setIntersection: ["$user", "$friendOfFriend"] }, _id: 0 } }
        ], (err, data) => {
            data = data[0];
            callback(data.commonFriends != undefined ? data.commonFriends.length : 0);
        });
    }

}