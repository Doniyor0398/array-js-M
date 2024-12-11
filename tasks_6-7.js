function sqrtArray(arr) {
    return arr.map((nums) => {
        if (nums < 0) {
            return null;
        } else {
            return Math.sqrt(nums);
        }
    });
}
console.log(sqrtArray([4, 9, -1, 16]));
