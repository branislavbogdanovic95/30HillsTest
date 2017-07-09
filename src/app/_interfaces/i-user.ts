export enum Gender {
    "male",
    "female"
}

export interface IUser {
    _id: String;
    id: Number;
    name: {
        first: String;
        last: String;
    },
    age: Number;
    gender: Gender;
    friends: [Number];
    friendsObj: [String | IUser];
}
