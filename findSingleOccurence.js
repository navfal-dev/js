const singleNumber = (nums) => {
    let map = new Map();
    for (const i of nums) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    for (const i of nums) {
        if (map.get(i) === 1) return i;
    }
    return null;
};

const arr = [1, 2, 2, 4, 4, 5, 1, 3, 5, 3, 6]
console.log(singleNumber(arr))

// n,n
var singleNumber = function (nums) {
    let mySet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (mySet.has(nums[i])) {
            mySet.delete(nums[i]);
        } else {
            mySet.add(nums[i]);
        }
    }
    return Array.from(mySet)[0];
};

// n,n
var singleNumber = function (nums) {
    var data = {};

    for (var a = 0; a < nums.length; a++) {
        if (data[nums[a]] == undefined) {
            data[nums[a]] = 1;
        } else {
            data[nums[a]]++;
        }
    }
    for (k in data) {
        if (data[k] == 1) {
            return k;
        }
    }
};

// nlogn
var singleNumber = function (nums) {
    nums.sort();
    for (let i = 1; i <= nums.length; i += 2) {
        if (i == nums.length) {
            return nums[i - 1];
        }
        if (nums[i - 1] != nums[i]) {
            return nums[i - 1];
        }
    }
};