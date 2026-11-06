Math.random();

let adective;
let ShopName;
let antherWord;

//adective;
if (Math.random() < 0.33) {
    adective = "Crazy";
} else if (Math.random() < 0.66) {
    adective = "Amazing";
}
else {
    adective = "Fire";
}
//ShopName;
if (Math.random() < 0.33) {
    ShopName = "Engine";
}
else if (Math.random() < 0.66)
    ShopName = "Foods";
}
else {
    ShopName = "Garments";
}
//antherWord;
if (Math.random() < 0.33) {
    antherWord = "Bros";
}
else if (Math.random() < 0.66) {
    antherWord = "Limited";
}
else {
    antherWord = "Hub";
}
// Final business name
console.log(`${adective} ${ShopName} ${antherWord}`);
