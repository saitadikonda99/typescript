type User = {
    readonly _id: number,
    username: string,
    password: string,
    email: string,
}


const userDetails = ( user: User ): {
_id: number, 
username: string,
password: string,
email: string
} => {
                                        
return {
    _id: user._id,
    username: user.username,
    password: user.password,
    email: user.email
    }
            }

const response = userDetails({
    _id: 1, 
    username: 'Tadikonda Sai Manikanta',
    password: '1234',
    email: 'saitadikonda.cse@gmail.com'
})

console.log(response)

export {}