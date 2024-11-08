// 難易度：低め

// 問題1: 配列の最初の要素を返す
// 解答：
// function firstElement(arr) {
//   return arr[0];
// }
// 必要な式：
// 配列の最初の要素はインデックス 0 を使ってアクセスします。arr[0]。


// 問題2: 配列の最後の要素を返す
// 解答：
// function lastElement(arr) {
//   return arr[arr.length - 1];
// }
// 必要な式：
// 配列の最後の要素は、arr.length - 1 でインデックスを指定してアクセスします。


// 問題3: 配列内のすべての要素を足し合わせる
// 解答：
// function sumArray(arr) {
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }
// 必要な式：
// reduce() メソッドを使用して、配列内の要素を累積的に加算します。acc（累積値）に curr（現在の値）を加算し、最終的な合計を返します。


// 問題4: 配列内の最大値を返す
// 解答：
// function findMax(arr) {
//   return Math.max(...arr);
// }
// 必要な式：

// Math.max() を使って、配列内の最大値を取得します。...arr はスプレッド構文で、配列の要素を個別の引数として渡します。


// 問題5: 配列内の最小値を返す
// 解答：
// function findMin(arr) {
//   return Math.min(...arr);
// }
// 必要な式：

// Math.min() を使って、配列内の最小値を取得します。...arr はスプレッド構文で、配列の要素を個別の引数として渡します。


// 問題6: 配列内の要素を2倍にする
// 解答：
// function doubleArray(arr) {
//   return arr.map(num => num * 2);
// }
// 必要な式：

// map() メソッドを使用して、配列の各要素に対して2倍の計算を行い、新しい配列を返します。


// 問題7: 配列の長さを返す
// 解答：
// function arrayLength(arr) {
//   return arr.length;
// }
// 必要な式：

// 配列の長さは、arr.length を使って取得できます。


// 問題8: 配列内に特定の数が含まれているかをチェック
// 解答：
// function containsNumber(arr, num) {
//   return arr.includes(num);
// }
// 必要な式：

// includes() メソッドを使用して、配列内に特定の値 num が含まれているかどうかを判定します。含まれていれば true、含まれていなければ false を返します。