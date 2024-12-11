function sumAmounts(arr) {
    let sum = 0;
    arr.forEach((num) => {
        sum += num.amount;
    });
    return sum;
}
const purchases = [{ amount: 50 }, { amount: 75 }, { amount: 100 }];
console.log(sumAmounts(purchases));
