type user = {
    readonly _id: number,
    username: string,
    password: string,
    email: string,
}

const userDetails = (user: user):{_id: number, username: string, password: string, email: string} => {
    return {
        _id: user._id,
        username: user.username,
        password: user.password,
        email: user.email
    }
}

const myUser: user= {
    _id: 1,
    username: 'Manikanta',
    password: '1234',
    email: ''
}

const result = userDetails(myUser); 

//myUser._id = 2;

console.log(result)

export {}