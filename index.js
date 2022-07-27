
users = [
    {
        name: "junior",
        id: 1,
        numApples: 0 
    },
    {
        name: "matheus",
        id: 2,
        numApples: 3
    },
    {
        name: "oliver",
        id: 3,
        numApples: 5
    },

];

let numApples = users.map(user => user.numApples);
let max = Math.max( ... numApples);

let foundUser = users.find((user) => user.numApples == max);
console.log(foundUser);
