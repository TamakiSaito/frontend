// 難易度：下

// 問題1: 配列の各要素に2を掛ける
// 解答：

// function doubleArray(arr) {
//   return arr.map(num => num * 2);
// }
// 必要な式：

// map() メソッドを使って、配列の各要素に対して処理（ここでは掛け算）を行います。

// 問題2: 配列内の偶数だけを抽出
// 解答：

// function filterEvenNumbers(arr) {
//   return arr.filter(num => num % 2 === 0);
// }
// 必要な式：

// filter() メソッドを使って、配列から偶数だけを抽出します。
// num % 2 === 0: これは整数が偶数かどうかを判定する条件式です。


// 難易度：中

// 問題3: 配列内の合計を計算
// 解答：

// function sumArray(arr) {
//   return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }
// 必要な式：

// reduce() メソッドを使用して、配列内のすべての値を累積的に加算します。
// 初期値 0 を指定して、合計を計算します。

// 問題4: 配列内の文字列を大文字に変換
// 解答：

// function toUpperCaseArray(arr) {
//   return arr.map(str => str.toUpperCase());
// }
// 必要な式：

// map() メソッドを使用して、配列の各文字列を大文字に変換します。
// toUpperCase() メソッドは、文字列を大文字に変換します。


// 難易度：上

// 問題5: 配列内の重複を削除
// 解答：

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// 必要な式：

// Set を使うことで、配列の重複を自動的に削除できます。
// new Set(arr) で重複が除去されたセットを作成し、それをスプレッド構文 ... で配列に戻します。

// 問題6: 配列の各要素を平方して合計を求める
// 解答：

// function sumOfSquares(arr) {
//   return arr.map(num => num ** 2).reduce((acc, curr) => acc + curr, 0);
// }
// 必要な式：

// map() メソッドを使用して、各要素を平方します（num ** 2）。
// reduce() メソッドを使用して、平方された値の合計を求めます。


// 難易度：上

// 問題7: 配列内の最大値と最小値を求める

// function findMinMax(arr) {
//   return arr.reduce((acc, num) => {
//     if (num < acc.min) acc.min = num;
//     if (num > acc.max) acc.max = num;
//     return acc;
//   }, { min: Infinity, max: -Infinity });
// }
// 必要な式：

// reduce() メソッドを使用して、配列内の最大値と最小値を計算します。
// 初期値として { min: Infinity, max: -Infinity } を指定して、適切な初期値を設定します。

// 問題8: 配列内で特定の数の出現回数を数える

// function countOccurrences(arr, num) {
//   return arr.filter(item => item === num).length;
// }
// 必要な式：

// filter() メソッドを使用して、配列内で特定の数が出現する要素を抽出します。
// 最後に .length でその出現回数を数えます