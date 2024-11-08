// 問題1: 配列の最大値を見つける
// 解答： 配列の最大値を求めるには、Math.max を使います。スプレッド構文を使って配列を引数として渡します。
// function findMax(arr) {
//   return Math.max(...arr);
// }
// // テスト
// console.log(findMax([1, 5, 3, 9, 2])); // 出力: 9


// 問題2: 文字列の逆順
// 解答： 文字列を逆順にするためには、文字列を配列に変換して、reverse メソッドを使って反転し、再度文字列に戻します。
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// // テスト
// console.log(reverseString("hello")); // 出力: "olleh"


// 問題3: 配列の平均
// 解答： 配列の平均を求めるには、reduce を使って合計を求め、配列の長さで割ります。
// function average(arr) {
//   return arr.reduce((sum, num) => sum + num, 0) / arr.length;
// }
// // テスト
// console.log(average([1, 2, 3, 4, 5])); // 出力: 3


// 問題4: 文字列の母音数をカウントする
// 解答： 文字列を split で分割し、filter で母音だけを抽出してカウントします。
// function countVowels(str) {
//   return str.split('').filter(char => 'aeiouAEIOU'.includes(char)).length;
// }
// // テスト
// console.log(countVowels("hello")); // 出力: 2


// 問題5: 指定した文字の出現回数をカウントする
// 解答： 文字列を split で分割し、filter で指定文字と一致するものをカウントします。
// function countChar(str, char) {
//   return str.split('').filter(c => c === char).length;
// }
// // テスト
// console.log(countChar("hello", "l")); // 出力: 2

// 問題6: 数字が回文かどうか判定する
// 解答： 数字を文字列に変換し、split と reverse を使って逆順にしたものと元の値を比較します。
// function isPalindrome(num) {
//   const str = String(num);
//   return str === str.split('').reverse().join('');
// }
// // テスト
// console.log(isPalindrome(121)); // 出力: true
// console.log(isPalindrome(123)); // 出力: false


// 問題7: 偶数か奇数かを判定する
// 解答： 数値が偶数か奇数かを判定するには、num % 2 === 0 を使います。
// function isEven(num) {
//   return num % 2 === 0;
// }
// // テスト
// console.log(isEven(4)); // 出力: true
// console.log(isEven(5)); // 出力: false