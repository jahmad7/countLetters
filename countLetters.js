function countLetters(word) {
    var letterInventory = {};

    word = word.split(" ").join("").toLowerCase();

    for (var char of word) {
        if (letterInventory[char] === undefined){
            letterInventory[char] = 1 ;
        }
        else {
            var currentValue = letterInventory[char];
            currentValue++
            letterInventory[char] = currentValue;
        }
    }
    return letterInventory;
}

console.log(countLetters("hello world"));