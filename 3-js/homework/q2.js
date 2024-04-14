// forEach, map, filterのいずれかを使って、以下の問題を解いてください。

// 問題:1~20までの配列の中から奇数のみ出力せよ。
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     console.log(arr[i]);
//   }
// }

// forEach
// arr.forEach(item => {
//   if (item % 2 === 1) {
//     console.log(item);
//   }
// })

// filter
const b = arr.filter(item => item % 2 === 1)
console.log(b)
// = console.log(arr.filter(item => item % 2 === 1))