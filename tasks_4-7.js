function sortByName(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
}
const people = [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }];
console.log(sortByName(people));
