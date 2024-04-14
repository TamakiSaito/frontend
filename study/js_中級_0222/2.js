






// const castedB = String(b);
// console.log(castedB); //0

// private type : 値参照タイプ(数字、文字列、Boolean)
const a = "";
const b = 0;
const c = null; // 空：トイレにとトイレットペーパーがあるが、芯だけあって紙がない
const d = undefined; // 未定義：トイレにトイレットペーパー自体がなかった

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