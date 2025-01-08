// 問題:1~20までの配列の中から奇数のみ出力せよ。
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 === 1) {
    console.log(arr1[i]);
  }
}

// 問題:1~20までの配列の中から偶数のみ出力せよ。
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    console.log(arr2[i]);
  }
}


// 問題:xを5と宣言せよ。
let x = 5;
// 問題:変数xが10より大きく、20より小さいときに変数xを出力する条件式を完成させる。
if (10 < x && x < 20) {
  console.log(x);
} else {
  console.log('条件に満たされていません')
}


// 問題:変数yが10より大きいか、20より小さいときに変数yを出力する条件式を完成させなさい。
let y = 15;
if (10 < y || y < 20) {
  console.log(y)
} else {
  console.log('条件に満たされていない')
}


// 問題:変数x2に3をかけた値が10より大きい場合、変数x2を出力する条件式を完成させる。
let x2 = 5;
if (x2 * 3 > 10) {
  console.log(x2)
} else {
  console.log('条件に満たされてないよ')
}


// 問題:y1を1と宣言せよ。
let y1 = 1;
let y2 = 2;
let x3 = 3;
// 問題:変数y2に5をかけた値がx3より大きい場合、変数x3を出力する条件式を完成させる。
if (y2 * 5 > x3) {
  console.log(x3)
} else {
  console.log('条件に合ってないよ')
}


// 問題(難易度1/3):arrのすべての値の総合を求める反復文を作ってみよう。
const arr3 = [1, 3, 4, 7];
let sum = 0;
// for (let i = 0; i < arr3.length; i++) {
//   sum += arr3[i];
// }
// console.log(sum);

arr3.forEach((value) => {
  sum += value;
})
console.log(`arr3の総合値は${sum}`);

// 問題(難易度 1/3):0から10未満の足すコードを作れ。
let sum2 = 0;
for (let i = 0; i < 10; i++) {
  sum2 += i;
}
console.log(sum2);


// 問題(難易度 1/3):1から10までかけるコードを作れ。
let num = 1;
for (let i = 1; i <= 10; i++) {
  num *= i;
}
console.log(num);


// 問題(難易度2/3):arrのすべての値を立方(**3)した値をそれぞれ出力する。
const arr4 = [2, 2, 3, 3];
for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i] ** 3);
}


// map 配列で出力



// 問題(難易度2/3):arrのすべての値がそれぞれ立方(**3)になった配列を出力する。
const arrValue = arr4.map((value) => value ** 3);
console.log(arrValue);

// 問題(難易度2/3):arrの各値の2乗の総和を求める反復文を作ってみよう
const arr5 = [5, 10, 1, 9];
let num2 = 0;
for (let i = 0; i < arr5.length; i++) {
  num2 += arr5[i] ** 2;
}
console.log(num2);


// 問題 (難易度 2/3) (if文必要) : arr5 から 3 の倍数のもののみ (arr[i] % 3 = 0) 出力してください。
arr5.forEach((value) => {
  if (value % 3 === 0) {
    console.log(value);
  }
})


// 問題(難易度2/3) (if文と&&必要):1から20未満の整数のうち、2かつ3の倍数の合計を求めなさい。
let sum3 = 0;
for (let i = 1; i < 20; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    sum3 += i;
  }
}
console.log(sum3)


// 問題(難易度3/3)(if文必須):[52, 273, 103, 32, 57, 103, 31, 2]のような数字配列が与えられる時、配列内部で最大値と最小値を探すコードを作れ。
const arr6 = [52, 273, 103, 32, 57, 103, 31, 2];
let min = arr6[0];
let max = arr6[0];

for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] < min) {
    min = arr6[i];
  }
  if (arr6[i] > max) {
    max = arr6[i]
  }
}
console.log("min:", min);
console.log("max:", max);


// 問題(難易度3/3)(2重for文):2つのサイコロを投げたとき、目の合計が6になるすべての場合の数を出力してください。
const dice1 = [1, 2, 3, 4, 5, 6];
const dice2 = [1, 2, 3, 4, 5, 6];
for (let dice1 = 1; dice1 <= 6; dice1++) {
  for (let dice2 = 1; dice2 <= 6; dice2++) {
    if (dice1 + dice2 === 6) {
      console.log(`サイコロ1: ${dice1},サイコロ2: ${dice2}`)
    }
  }
}


// [ 1, 5 ]
// [ 2, 4 ]
// [ 3, 3 ]
// [ 4, 2 ]
// [ 5, 1 ]
