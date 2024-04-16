// Generics 実際に利用されるまで型が確定しないクラス・関数・インターフェイスを実現する為に使用 
function wrap1(param: any): any {
  return { param };
}
const wrapped1 = wrap1(10);
console.log(wrapped1);

function wrap2<T>(param: T): { param: T } {
  return { param };
}
const wrapped2 = wrap2(20);
console.log(wrapped2);

const wrapped2_2 = wrap2("hello");
console.log(wrapped2_2);
