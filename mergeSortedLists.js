
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