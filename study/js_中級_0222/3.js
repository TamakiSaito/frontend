const a = 0;
const b = 2;

// && Ampersand : And // true && true // true && false = false
if (a && b && c){
  console.log("aとbがcが存在します"); // fale
}
if (a === 0 && b === 2){
  console.log("aは0で、bは2です"); // true
}

// || Vartical bar : Or // true || true = true // true || false = true
if (a || b || c || d || e){
  console.log("a~eいずれかが存在します"); // true
}

const ex1 = a || b;
console.log(ex1); // 2
const ex2 = loginUserName || "guest";
console.log(ex2); // guest

