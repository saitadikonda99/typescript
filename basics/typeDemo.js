var userDetails = function (user) {
    return {
        _id: user._id,
        username: user.username,
        password: user.password,
        email: user.email
    };
};
var response = userDetails({
    _id: 1,
    username: 'Tadikonda Sai Manikanta',
    password: '1234',
    email: 'saitadikonda.cse@gmail.com'
});
console.log(response);
