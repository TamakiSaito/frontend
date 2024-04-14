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

const kuku1 = [2, 3, 4, 5, 6, 7, 8, 9]
const kuku2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < kuku1.length; i++) {
  if (kuku1[i] % 2 === 0)
    for (let j = 0; j < kuku2.length; j++) {
      console.log(kuku1[i], "x", kuku2[j],"=", kuku1[i] * kuku2[j])
  }
}