// 問題:1~20までの配列の中から奇数のみ出力せよ。
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     console.log(arr[i]);
//   }
// }

// 問題:1~20までの配列の中から偶数のみ出力せよ。
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }

// 問題:xを5と宣言せよ。
const x = 5;
// 問題:変数x1が10より大きく、20より小さいときに変数x1を出力する条件式を完成させる。
if (1 < x < 20) {
  console.log(x);
}

// 問題:変数yが10より大きいか、20より小さいときに変数yを出力する条件式を完成させなさい。
const y = 5;
if (10 < y || y < 20) {
  console.log(y);
}

// 問題:変数x2に3をかけた値が10より大きい場合、変数x2を出力する条件式を完成させる。
const x2 = 10;
if (10 < x2 * 3) {
  console.log(x2);
}

// 問題:y1を1と宣言せよ。
const y1 = 1;
const y2 = 2;
const x3 = 3;
// 問題:変数y2に5をかけた値がx3より大きい場合、変数x3を出力する条件式を完成させる。
if (x3 < y2 * 5) {
  console.log(x3);
}

// 問題(難易度1/3):arrのすべての値の総合を求める反復文を作ってみよう。
const arr2 = [2, 4, 6, 8, 10];
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
  sum += arr2[i];
}
console.log(sum);

// 問題(難易度 1/3):0から10未満の足すコードを作れ。
const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum2 = 0;
for (let i = 0; i < 10; i++) {
  sum2 += arr3[i];
}
console.log(sum2)

// 問題(難易度 1/3):1から10までかけるコードを作れ。
let num = 1;
for (let i = 1; i < 10; i++) {
  num *= arr3[i];
}
console.log(num);

// 問題(難易度2/3):arr2のすべての値を立方(**3)した値をそれぞれ出力する。
// 上に式ある：const arr2 = [2, 4, 6, 8, 10];
arr2.forEach((item) => {
  console.log(item ** 3)
})

// 問題(難易度2/3):arr4のすべての値がそれぞれ立方(**3)になった配列を出力する。
const arr4 = [1, 3, 5, 7, 9];
const result = arr4.map(num => num ** 3);
console.log(result); 

// 問題(難易度2/3):arr5の各値の2乗の総和を求める反復文を作ってみよう
const arr5 = [2, 5, 10, 12];
let num2 = 0;

arr5.forEach(value => {
  num2 += value ** 2
})
console.log(num2)


// 問題 (難易度 2/3) (if文必要) : arr5 から 3 の倍数のもののみ (arr[i] % 3 = 0) 出力してください。
arr5.forEach(value2 => { 
  if (value2 % 3 === 0) {
    console.log(value2);
  }
});

// 問題(難易度2/3) (if文と&&必要):1から20未満の整数のうち、2または3の倍数の合計を求めなさい。
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sum3 = 0;

for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] % 2 === 0 && arr6[i] % 3 === 0) {
    sum3 += arr6[i];
  }
}
console.log(sum3);


// 問題(難易度3/3)(if文必須):[52、273、103、32、57、103、31、2]のような数字配列が与えられる時、配列内部で最大値と最小値を探すコードを作れ。
const arr7 = [52, 273, 103, 32, 57, 103, 31, 2];
let max = arr7[0];
let min = arr7[0];

for (let i = 1; i < arr7.length; i++) {
  if (arr7[i] > max) {
    max = arr7[i];
  }
  if (arr7[i] < min) {
    min = arr7[i];
  }
}
console.log("最大値: ",max);
console.log("最小値: ",min);

// 問題(難易度3/3)(2重for文):2つのサイコロを投げたとき、目の合計が6になるすべての場合の数を出力してください。
const dice1 = [1, 2, 3, 4, 5, 6]
const dice2 = [1, 2, 3, 4, 5, 6]
dice1.forEach((item1) => dice2.forEach((item2) => {
  if (item1 + item2 === 6) 
  console.log("[" + item1 + "," + " " + item2 + "]")
  }
))                                                                                                                                                                                

for (let dice3 = 1; dice3 <= 6; dice3++) {
  for (let dice4 = 1; dice4 <= 6; dice4++) {
    if (dice3 + dice4 === 6) {
      console.log(`サイコロ1: ${dice3}, サイコロ2: ${dice4}`);
    }
  }
}
// [ 1, 5 ]
// [ 2, 4 ]
// [ 3, 3 ]
// [ 4, 2 ]
// [ 5, 1 ]
