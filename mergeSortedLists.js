let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

/*
// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    alert(entry); // cucumber,500 (and so on)
}
*/

const mergeTwoLists = (m, n) => {
    let p1 = 0, p2 = 0,
        list = [];

    const sizeOfList = m.length + n.length;
    console.log(sizeOfList)

    while (list.length < sizeOfList) {
        console.log(list)

        // if pointers go out limit 

        if (p1 >= m.length && p2 < n.length) {
            list.push(n[p2++]);
            continue;
        } else if (p2 >= n.length && p1 < m.length) {
            list.push(m[p1++]);
            continue;
        }

        // if pointeres in limit 

        if (m[p1] >= n[p2]) {
            list.push(n[p2++]);
        } else {
            list.push(m[p1++]);
        }

    }

    return list;

};

const m = [1]
const n = [2]

console.log(mergeTwoLists(m, n))