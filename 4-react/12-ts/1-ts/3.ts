// Interface Object型を定義する場合に使う
// リテラルのunion型には対応していないので、やや対応範囲が広いイメージ : PascalCase
interface Person {
  name: string;
  age: number;
  email: string;
  address?: string;
  registeredAt?: Date;
}

// Type alias タイプ別称
// オブジェクト、クラス、リテラルのunion型、intersection typeに別名をつけることができる機能 : PascalCase
// type Person = {
//   name: string;
//   age: number;
//   email: string;
//   address?: string;
//   registeredAt?: Date;
// };　X

// Intersection Type 複数の型を結合して新しい型を作成するための方法
type Developer = Person & {
  skills: string[];
};

// Union Type
type AllowedColors = "red" | "orande" | "yellow";

// Variable 変数 : camelCase
const person1: Person = {
  name: "saito",
  age: 20,
  email: "",
};
const person2: Developer = {
  name: "negi",
  age: 30,
  email: "",
  skills: ["JavaScript", "TypeScript", "React"],
};

// const Users: Developer[] = [person1, person2]; // NG stringが必須だからerror
const Users: Person[] = [person1, person2]; // OK
