function sumArray(arr) {
    sum = 0;
    arr.forEach((nums) => {
        sum += nums;
    });
    return sum;
}
console.log(sumArray([1, 2, 3, 4]));
