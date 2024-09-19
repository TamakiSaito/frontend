// 不変性の法則
// Reactは不変性を守らないといけない

// SIDU

const arr = [1, 2, 3, 4, 5];
// arr1.push(6) // X 使用不可

// Insert
const addArr = [...arr, 6];
console.log(addArr); // [1, 2, 3, 4, 5, 6]

// Delete
// indexの配列の一番最後を削除(arr.length -1)
const delArr = arr.filter((item, index, arr) => {
  return index !== arr.length -1;
});
console.log(delArr);

// Update
// modify : 修正
// indexの配列の一番最後を999にして他はそのまま
const modArr = arr.map((item, index, arr) => {
  return index === arr.length - 1 ? 999 : item;
});
console.log(modArr);