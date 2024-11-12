// Bubble Sort

// 手順
// 1. arr[]のitemを左と右で大小を比べる 
// 1. 小さい値を左へ、大きい値を右に位置する
// 1. 比べ終わるまで反復す
// 1. 結果をresultへ返す


const arr = [64, 34, 25, 12, 22, 11, 90];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

function bubbleSort2(arr) {
  arr.forEach((_, i) => {
    arr.slice(0, arr.length - i - 1).forEach((_, j) => {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    })
  })
  return arr
}

console.log(bubbleSort2(arr))

// 답2: 고차함수를 사용한 버블 정렬
// function bubbleSort2(arr) {
//   arr.forEach((_, i) => {
//     arr.slice(0, arr.length - i - 1).forEach((_, j) => {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     })
//   })
//   return arr
// }
// console.log(bubbleSort2(arr)) // [2, 4, 7, 9, 11, 11, 13, 13, 13]