function sortName(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
}
console.log(sortName([{ name: "Zara" }, { name: "Mia" }, { name: "Anna" }]));
