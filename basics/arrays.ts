
const arr: number[] = [1, 2, 3, 4]

const arr1: Array<number> = [1, 2, 3, 4]

const arr2: string[] = ['a', 'b', 'c', 'd']

const arr3: Array<string> = ['a', 'b', 'c', 'd']


type user = {  
    name :string,
    age :number
}

const arr4: Array<user> = [
    {
        name : "Tadikonda Sai Manikanta",
        age : 20
    }
]

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)

export {}