//DEEP：Primitive Tyope / 値参照タイプ(数字・文字列・Boolean)
let a = 1;
let b = a;
a = 2;
console.log(b); // 1

// Shallow Copy : Referencial Type / 住所参照タイプ(配列・オブジェクト・関数)
const c = [1, 2, 3];
const d = c; // cの住所を代入する
c[0] = 999;
console.log(d); // [999, 2, 3];

// cが変わってもdが変わらないようにコピーしたいならどうすればいい？
// Deep Copy
const cc = [1, 2, 3];
// JSONは内蔵クラス
// JSON.stringify = 文字列にする
// parse = パッシング(PCがわかるようにする) "[1, 2, 3]"を[1, 2, 3]へと変換する
// const dd = JSON.parse(JSON.stringify(cc)); // "[1, 2, 3]"の値を持つ新しい住所を代入する

// Object.assign([], cc)がよりいい
const dd = Object.assign([], cc);
cc[0] = 999; // ddとは関係ない
console.log(dd); // [1, 2, 3]



// Shallow Copy
// const a = { id: "a123", pw: "asdfghjkl" };
// const b = a;
// a.id = "a999";
// console.log(b.id); // a999

// Deep Copy
const aa = { id: "a123", pw: "asdfghjkl" };
const bb = Object.assign({}, aa); // const bb = JSON.parse(JSON.stringify(aa));
aa.id = "a999";
console.log(bb.id); // a123



const arr1 = [1, 2, 3];
const obj1 = { id: "a123", pw: "asdfghjkl" };
// Shallow Copy
// const arr2 = arr1
// const obj2 = obj1
// arr1[0] = 999;
// obj1.id = "a999";
// console.log("Shallow Copy");
// console.log(arr2); // [999, 2, 3]
// console.log(obj2); // { id: "a999", pw: "asdfghjkl"}


// ...を使用する方がベスト
// Deep Copy : Spreading文法
const arr3 = [...arr1];
const obj3 = { ...obj1 };
arr1[0] = 999;
obj1.id = "a999";
console.log("Deep Copy");
console.log(arr3); // [1, 2, 3]
console.log(obj3); // { id: "a123", pw: "asdfghjkl"}
