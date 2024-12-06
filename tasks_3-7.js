function uniqueElements(arr) {
    return arr.filter((el, i) => arr.indexOf(el) === i);
}
console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]));
