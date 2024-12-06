function sqrtArray(arr) {
    return arr.map((num) => {
        if (num < 0) {
            return null;
        } else {
            return Math.sqrt(num);
        }
    });
}

console.log(sqrtArray([4, 9, -1, 16]));
