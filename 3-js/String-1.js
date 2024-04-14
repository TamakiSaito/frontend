// const castedB = String(b);
// console.log(castedB); //0

// private type : 値参照タイプ(数字、文字列、Boolean)
// const a = "";
// const b = 0;
// const c = null; // 空：トイレにとトイレットペーパーがあるが、芯だけあって紙がない
// const d = undefined; // 未定義：トイレにトイレットペーパー自体がなかった

// referential type : 住所参照タイプ(配列、オブジェクト、関数)
const e = {};
const f = [];

// boolean : truthy, falsy
// const booleanA = Boolean(a);
// console.log(booleanA); // true

// const booleanB = Boolean(b);
// console.log(booleanB); // false

if (a){
  console.log("a is true");
}

if (b){
  console.log("e is true");
}

if (f){
  console.log("f is true");
}


// a と言う配列を作ります　constで　中身　1234 8910 for文を使って console.log
const a = [1, 2, 3, 4, 8, 9, 10];
for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 1) console.log(a[i]);
}

// const a = [1, 2, 4, 5, 8, 10]
// for (let i = 0; i < a.length; i++){
//   if (a[i] % 2 !== 0)
//   console.log(a[i]);

// 値が5以上
// const a = [1, 2, 3, 4, 8, 9, 10];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > 4) {
//     console.log(a[i]);
//   }
// }

// 全部出す　値 5以上のやつ　何もしなくてconsole 5未満 ×2 する
// const a = [1, 2, 3, 4, 8, 9, 10];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > 7) {
//     console.log(a[i]);
//   } else if (a[i] < 4) {
//     console.log(a[i] * 2);
//   }
// }

// let a = 3
// let b = a % 2 === 1
// console.log(b)
// 奇数のみ
// const a = [1, 2, 3, 4, 8, 9, 10];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 1) {
//     console.log(a[i]);
//   }
// }

// 九九の表を作ってください。
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// …
// 2 x 9 = 18
// 9 x 9 = 81

// Dice 1-6 二つを投げました。投げて出る値を全部表示してください。[ 1 , 1 ] ~ [ 6 , 6 ]
// const dice1 = [1, 2, 3, 4, 5, 6] // 6
// const dice2 = [1, 2, 3, 4, 5, 6] // 6

// for (let i = 0; i < dice1.length; i++) {
//   for (let j = 0; j < dice2.length; j++) {
//     console.log("[", dice1[i], ",", dice2[j], "]")
//   }
// }

// const kuku1 = [2, 3, 4, 5, 6, 7, 8, 9];
// const kuku2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < kuku1.length; i++) {
//   for (let j = 0; j < kuku2.length; j++) {
//     console.log(kuku1[i], "x", kuku2[j], "=", kuku1[i] * kuku2[j]);
//   }
// }

//偶数

// 九九の表を作ってください。
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// …
// 2 x 9 = 18
// 9 x 9 = 81

// Dice 1-6 二つを投げました。投げて出る値を全部表示してください。[ 1 , 1 ] ~ [ 6 , 6 ]
// const dice1 = [1, 2, 3, 4, 5, 6] // 6
// const dice2 = [1, 2, 3, 4, 5, 6] // 6

// for (let i = 0; i < dice1.length; i++) {
//   for (let j = 0; j < dice2.length; j++) {
//     console.log("[", dice1[i], ",", dice2[j], "]")
//   }
// }

// const kuku1 = [2, 3, 4, 5, 6, 7, 8, 9];
// const kuku2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < kuku1.length; i++) {
//   if (kuku1[i] % 2 === 0)
//     for (let j = 0; j < kuku2.length; j++) {
//       console.log(kuku1[i], "x", kuku2[j], "=", kuku1[i] * kuku2[j]);
//     }
// }

// 奇数
const kuku1 = [2, 3, 4, 5, 6, 7, 8, 9];
const kuku2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < kuku1.length; i++) {
  if (kuku1[i] % 2 === 1)
    for (let j = 0; j < kuku2.length; j++) {
      console.log(kuku1[i], "x", kuku2[j], "=", kuku1[i] * kuku2[j]);
    }
}
