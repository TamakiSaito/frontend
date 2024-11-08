// 問題1: 数字が正の数か負の数か
// 解答： 数字が正の数か負の数かを判定するには、num > 0 で正の数かどうかを判定します。
// function isPositive(num) {
//   return num > 0;
// }
// // テスト
// console.log(isPositive(5));  // 出力: true
// console.log(isPositive(-3)); // 出力: false


// 問題2: 数字が10以上かどうか
// 解答： 数字が10以上かどうかを判定するには、num >= 10 を使います。
// function isAtLeastTen(num) {
//   return num >= 10;
// }
// // テスト
// console.log(isAtLeastTen(10)); // 出力: true
// console.log(isAtLeastTen(7));  // 出力: false


// 問題3: 数字を2倍にする
// 解答： 与えられた数字を2倍にするには、単純に num * 2 を返します。
// function doubleNumber(num) {
//   return num * 2;
// }
// // テスト
// console.log(doubleNumber(4)); // 出力: 8


// 問題4: 配列に含まれる特定の数字の数を数える
// 解答： 配列内で特定の数字の数を数えるには、filter を使って条件に合う要素だけを取り出し、その長さを返します。
// function countOccurrences(arr, num) {
//   return arr.filter(x => x === num).length;
// }
// // テスト
// console.log(countOccurrences([1, 2, 2, 3, 4, 2], 2)); // 出力: 3


// 問題5: 文字列が5文字以上かどうかを判定
// 解答： 文字列が5文字以上かどうかは、文字列の長さを確認します。str.length >= 5 で判定できます。
// function isLongString(str) {
//   return str.length >= 5;
// }
// // テスト
// console.log(isLongString("hello")); // 出力: true
// console.log(isLongString("hi"));    // 出力: false