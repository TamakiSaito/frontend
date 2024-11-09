// 問題(難易度1/3):arrのすべての値の総合を求める反復文を作ってみよう。
const arr = [1, 2, 3];
let sum = 0;

// for
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// forEach
arr.forEach(num => {
  sum += num;
});
console.log(sum);

// reduce
// const sum = arr.reduce((acc, num) => acc + num, 0);
// *** array.reduce((accumulator, currentValue) => { コールバック関数の戻り値 }, initialValue); ***


// 問題 (難易度 1/3):0から10未満の足すコードを作れ。
// let sum2 = 0;
// for (let i = 0; i < 10; i++) {
//   sum2 += i;
// }
// console.log(sum2);

// 問題 (難易度 1/3):1から10までかけるコードを作れ。
// let sum3 = 0;
// for ()


// 問題(難易度2/3):arrのすべての値を立方(**3:3条)した値をそれぞれ出力する。


// 問題(難易度2/3):arrのすべての値がそれぞれ立方(**3)になった配列を出力する。


// 問題(難易度2/3):arrの各値の2乗の総和を求める反復文を作ってみよう。
