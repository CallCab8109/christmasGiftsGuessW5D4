let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"},
    {name: "Monopoly", size: "big", clatters: "yes", weight: "light"}
];

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"},
    {size: "big", clatters: "yes", weight: "light"}
];

function guessGifts (wishlist, presents) {
    let present = []
    for(let i = 0; i < wishlist.length; i++) {
        for(let j = 0; j < presents.length; j++) {
        if(presents[j].size === wishlist[i].size && presents[j].clatters === wishlist[i].clatters && presents[j].weight === wishlist[i].weight) {
            present.push(wishlist[i].name) 
        }
        }
    }
    return present
}
console.log(guessGifts(wishlist, presents))


//BENS SOLUTION

// function guessGifts(wishlist, presents) {
//     let myGifts = []

//     presents.forEach(pres => {
//         wishlist.forEach(wish => {
//             if(pres.size === wish.size && pres.clatters === wish.clatters && pres.weight === wish.weight) {
//                 myGifts.push(wish.name)
//             }
//         })
//     })
//     console.log(myGifts)
//     return myGifts
// }

// guessGifts(wishlist, presents)
