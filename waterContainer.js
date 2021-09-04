const max = (m, n) => (m > n ? m : n);
const min = (m, n) => (m < n ? m : n);

const findMaxStorage = (i, j, arr) => {
	top = min(arr[i], arr[j]);
	store = 0;
	for (let p = i; p < j; p++) {
		store += top;
	}
	return store;
};

/**
 * @param {number[]} height
 * @return {number}
 */
// const maxArea = (arr) => {
//     const len = arr.length;
//     let maxi = -1;
//     for(let i = 0 ; i < len-1 ; i++) {
//         for(let j = len-1 ; j > i ; j--) {
//             maxi = max(findMaxStorage(i, j, arr), maxi);
//         }
//     }
//     return maxi;
// };

const maxArea = (arr) => {
	const len = arr.length;

	// find left max array
	// find right max array

	leftArr = [];
	rightArr = [];

	leftArr[0] = arr[0];
	for (let i = 1; i < len; i++) {
		leftArr[i] = max(arr[i], arr[i - 1]);
	}

	rightArr[len - 1] = arr[len - 1];
	for (let i = len - 2; i >= 0; i--) {
		rightArr[i] = max(arr[i], arr[i + 1]);
	}

	let maxi = -1;
	// left pointer and right pointer till they meet
	let p = 0,
		q = len - 1;
	let ans = -1;
	while (p < q) {
		let diff = q - p;
		let res = diff * min(arr[p], arr[q]);
		ans = max(ans, res);
		p++;
		q--;
	}

	return ans;
};

console.log(maxArea([1, 8, 9, 2, 5, 2, 8, 7, 7]));

/*
https://leetcode.com/problems/container-with-most-water/
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/
