"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userDetails = function (user) {
    return {
        _id: user._id,
        username: user.username,
        password: user.password,
        email: user.email
    };
};
var myUser = {
    _id: 1,
    username: 'Manikanta',
    password: '1234',
    email: ''
};
var result = userDetails(myUser);
//myUser._id = 2;
console.log(result);
