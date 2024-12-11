function groupBy(arr, key) {
    return arr.reduce((grouped, item) => {
        const groupKey = item[key];
        if (!grouped[groupKey]) {
            grouped[groupKey] = [];
        }
        grouped[groupKey].push(item);
        return grouped;
    }, {});
}

// Пример использования:
const items = [
    { category: "fruit", name: "apple" },
    { category: "fruit", name: "banana" },
    { category: "vegetable", name: "carrot" },
];

console.log(groupBy(items, "category"));
/*
{
    fruit: [
        { category: 'fruit', name: 'apple' }, 
        { category: 'fruit', name: 'banana' }
    ],
    vegetable: [{ category: 'vegetable', name: 'carrot' }]
}
*/
