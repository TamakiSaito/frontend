// JSはweakly typed language
let a = 1;
a = 2; //文字列を代入してもエラーにならない
console.log(a);

// TSはstrongly typed language
let b: number = 1;
b = 1; //同じ型であれば代入できる
console.log(b);
//TSは型が異なる場合にエラーを出してくれるので、バグを防ぐことが出来る

// TypeScriptのObject型を定義する方法
type userType = {
  name: string;
  age: number;
  email: string;
  address?: string;
  registeredAt?: Date;
};

const user1: userType = {
  name: "saito",
  age: 20,
  email: "112345@1.com",
};

const user2: userType = {
  name: "Micheal",
  age: 30,
  email: "11234522@1.com",
};

// TypeScriptのArray型を定義する方法
const users: userType[] = [user1, user2];
const strings: string[] = ["s","i","t"];
const number: number[] = [1,2,3];
const booleans: boolean[] = [true, false, true];

const msgs: string[] = ["hello", "world"];
// msgs.push("1234"); //配列の中にstringをPush

const done: boolean = true;
const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "world"];
const mightBeUndefined: string | undefined = undefined; //string or undefined
const nullableNumber: number | null = null;

// Union Type
let color1: "red" | "orange" | "yellow" = "orange";
type colorType = "red" | "orange" | "yellow";
let color2: colorType = "orange";
