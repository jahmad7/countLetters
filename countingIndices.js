function countingIndices(word) {
    var letterInventory = {};

    word = word.split(" ").join("").toLowerCase();

    var count = -1;

    for (var char of word) {
        count++
        if (letterInventory[char] === undefined){
            letterInventory[char] = [count] ;
        }
        else {
            var currentValue = letterInventory[char];
            currentValue.push(count);
            letterInventory[char] = currentValue;
        }
    }
    return letterInventory;
}

console.log(countingIndices("hello world"));