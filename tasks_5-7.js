function groupByAge(arr, age) {
    return arr.reduce((grouped, items) => {
        const groupAge = items[age];
        if (!grouped[groupAge]) {
            grouped[groupAge] = [];
        }
        grouped[groupAge].push(items);
        console.log(grouped[groupAge], " grouped[groupAge]");
        console.log(grouped, " grouped");
        return grouped;
    }, {});
}

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 },
    { name: "Eve", age: 35 },
];
console.log(groupByAge(people, "age"));
