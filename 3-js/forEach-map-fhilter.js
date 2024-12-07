//forEach, map, filter

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// 奇数
// forEach
// arr.forEach(item => {
//   if (item % 2 === 1){
//     console.log(item);
//   }
// })

// filter
// const b = arr.filter(item => item % 2 === 1)
// console.log(b)


// 偶数
// forEach
// arr.forEach(item => {
//   if (item % 2 === 0){
//     console.log(item);
//   }
// })

// filter
// const b = arr.filter(item => item % 2 === 0)
// console.log(b)


// 0から10未満の足すコード
const c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = 0
// c.forEach(item =>{
//   sum = sum + item
// })
// console.log(sum)


// 1から10までかけるコード
// let sum = 0
// c.forEach(item =>{
//   sum = sum * item
// })
// console.log(sum)


// arr2の全ての値を立方(**3)した値をそれぞれ出力
const arr2 = [1, 2, 3, 4, 5];

// forEach
// arr2.forEach(item => { console.log(item ** 3) })

// map
// const result2 = arr2.map(item => item ** 3)
// console.log(result2)


// arr3 立方(**2)
const arr3 = [2, 5, 10, 100];

// forEach
// arr3.forEach(item => { console.log(item ** 2) })

// map
// const result3 = arr3.map(item => item ** 2)
// console.log(result3)


// arr4 (+10)
const arr4 = [3, 5, 7, 20];

// forEach
arr4.forEach(item => { console.log(item + 10) })



// LAST (二重for文):ククの表
// forEach
const kuku1 = [2, 3, 4, 5, 6, 7, 8, 9];
const kuku2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

kuku1.forEach((item) => kuku2.forEach((item2) => { console.log(item + "x" + item2 + "=" + item * item2) }));



// LAST (二重for文)2つのサイコロを投げた時、目の合計が6になる全ての場合の数
// map

// const dice1 = [1, 2, 3, 4, 5, 6] 
// const dice2 = [1, 2, 3, 4, 5, 6] 

// dice1.forEach((item1) => dice2.forEach((item2) => {
//   if (item1 + item2 === 6) {
//     console.log("[" + item1 + ", " + item2 + "]")
//   }
// }));

// [1, 5]

const yuriko = [1, 2, 3, 9]
const yang = [2, 3, 7, 9]

yuriko.forEach((item1) => yang.forEach((item2) =>{
  if (item1 + item2 === 10) {
    console.log("(" + item1 + ", " + item2 + ")")
  }
}));