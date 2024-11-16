// 問題(難易度1/3):arrのすべての値の総合を求める反復文を作ってみよう。
const arr = [1, 2, 3, 4, 5]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum)

// 問題 (難易度 1/3):0から10未満の足すコードを作れ。
let sum2 = 0;
for (let i = 0; i <= 10; i++) {
  sum2 += i;
}
console.log(sum2);

// 問題 (難易度 1/3):1から10までかけるコードを作れ。
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num = 1;
for (let i = 1; i < arr2.length; i++) {
  num *= arr2[i];
}
console.log(num);


// 問題(難易度2/3):arrのすべての値を立方(**3:3条)した値をそれぞれ出力する。
const arr3 = [2, 5, 8];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i] ** 3);
}

// arr3.forEach(value => {
//   console.log(value ** 3);
// })

// const cubedArr = arr3.map(value => console.log(value ** 3));
// console.log(cubedArr);

// 問題(難易度2/3):arrのすべての値がそれぞれ立方(**3)になった配列を出力する。
const arr4 = [1, 3, 6];
let cubedArr2 = [];
for (let i = 0; i < arr4.length; i++) {
  cubedArr2.push(arr4[i] ** 3);
}
console.log(cubedArr2);

// arr4.forEach(num => {
//   cubedArr2.push(num ** 3);
// })
// console.log(cubedArr2);

// const cubedArr2 = arr4.map(num => num ** 3);
// console.log(cubedArr2);

// 問題(難易度2/3):arrの各値の2乗の総和を求める反復文を作ってみよう。
const arr5 = [1, 2, 3, 4, 5, 6];
let sum3 = 0;
for (let i = 0; i < arr5.length; i++) {
  sum += arr5[i] ** 2;
}
console.log(sum3);

// arr5.forEach(num => {
//   sum += num ** 2;
// })
// console.log(sum);
