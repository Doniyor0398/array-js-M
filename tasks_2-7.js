function filterEvenNumbers(arr) {
    return arr.filter((nums) => nums % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
