function number(arr) {
    let sum = 0;
    arr.forEach((nums) => {
        sum += nums;
    });
    return sum;
}
console.log(number([1, 2, 3, 4, 5]));
