// カスタマイズしたループ/ ループ処理のみが目的 → for
// 処理を実行するだけ / ループ処理のみが目的 → forEach
// 新しい配列を作る / 新しい配列を作りたい → map
// 条件に合うものだけ取得 / 新しい配列を作りたい → filter

// for
// 使う場面: 柔軟に配列を操作したいときや、単純な繰り返しが必要なとき
// 特徴: カスタマイズ性が高いが、やや冗長
// 例: 合計を計算する
const numbers1 = [1, 2, 3];
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum1 += numbers[i];
}
console.log(sum1); // 6

// forEach
// 使う場面: 配列の各要素を使って何らかの処理を実行したいとき（新しい配列は作らない）
// 特徴: 戻り値はなく、元の配列を直接操作することが多い
// 例: コンソールに各要素を出力
const numbers2 = [1, 2, 3];
numbers.forEach(num => console.log(num));
// 出力: 1, 2, 3

// map
// 使う場面: 配列の各要素を変換して新しい配列を作りたいとき
// 特徴: 元の配列と同じ長さの新しい配列を返す
// 例: 各要素を2倍する
const numbers3 = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]

// filter
// 使う場面: 条件に一致する要素だけを抽出して新しい配列を作りたいとき
// 特徴: 条件を満たす要素だけが返される
// 例: 偶数だけを抽出する
const numbers4 = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]


// 一つの配列で全パターンを試す
const numbers = [1, 2, 3, 4];
// for
let sum2 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum2 += numbers[i];
}
console.log(sum2); // 10
// forEach
numbers.forEach(n => console.log(n)); // 出力: 1, 2, 3, 4
// map
const doubled2 = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]
// filter
const evens2 = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]


// テンプレート
// forテンプレート
for (let i = 0; i < array.length; i++) {
  // 処理を書く
};
// forEachテンプレート
array.forEach(item => {
  // 処理を書く
});
// mapテンプレート
const result3 = array.map(item => {
  // 変換処理を書く
});
// filterテンプレート
const result33 = array.filter(item => {
  return 条件;
});

