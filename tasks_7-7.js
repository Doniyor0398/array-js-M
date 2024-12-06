function sumAmounts(arr) {
    let sumObj = 0;
    arr.forEach((numObj) => {
        sumObj += numObj.amount;
    });
    return sumObj;
}

// Пример использования:
const purchases = [{ amount: 50 }, { amount: 75 }, { amount: 100 }];
console.log(sumAmounts(purchases)); // 225
