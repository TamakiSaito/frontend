// if, for

const a = 1;
// 基礎if文


if (a){
  console.log("aが存在します");
}
if (a && b){
  console.log("aとbが存在します");
}

// 実務で使用するif文
// true && true -> boolean < 値 < 関数
// false && true -> false
a && console.log("aが存在します");
(a && b) && console.log("aとbが存在します");
