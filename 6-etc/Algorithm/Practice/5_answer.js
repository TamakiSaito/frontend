// 難易度：下

// 問題1: 配列の合計
// 解答： 配列の合計を計算するには、reduce メソッドを使って要素をすべて加算するのが便利です。

// javascript
// コードをコピーする
// function sumArray(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }

// テスト
// console.log(sumArray([1, 2, 3, 4, 5])); // 出力: 15
// 解説：reduce メソッドは配列内の全ての値を1つにまとめるのに適しており、この場合は合計値を計算しています。

// 問題2: フィボナッチ数列
// 解答： フィボナッチ数を求めるには、ループまたは再帰を使いますが、基本的なループで実装します。

// javascript
// コードをコピーする
// function fibonacci(n) {
//   if (n <= 1) return n;
//   let a = 0, b = 1, sum;
//   for (let i = 2; i <= n; i++) {
//     sum = a + b;
//     a = b;
//     b = sum;
//   }
//   return b;
// }

// テスト
// console.log(fibonacci(5)); // 出力: 5
// 解説：初めの2つの数（0と1）を設定し、それ以降は前の2つの値の和を繰り返し計算して求めています。

// 難易度：中
// 問題3: 配列の重複を除去
// 解答： 配列の重複を除去するには、Set を使うと簡単です。

// javascript
// コードをコピーする
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// テスト
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // 出力: [1, 2, 3, 4, 5]
// 解説：Set は重複を許さない集合を作るため、配列を Set に変換し、再度配列に戻すことで重複を除いた新しい配列が得られます。

// 問題4: アナグラム判定
// 解答： アナグラムを判定するためには、両方の文字列をソートして同じかを比較します。

// javascript
// コードをコピーする
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

// テスト
// console.log(isAnagram("listen", "silent")); // 出力: true
// console.log(isAnagram("hello", "world"));   // 出力: false
// 解説：split で文字列を配列に分割し、sort でソートしてから再度 join で結合し、ソートされた結果が一致するかを比較しています。

// 難易度：上
// 問題5: 配列の2つの数の和
// 解答： この問題は「two-sum problem」と呼ばれ、Map を使うことで効率的に解けます。

// javascript
// コードをコピーする
// function twoSum(arr, target) {
//   const map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     const complement = target - arr[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(arr[i], i);
//   }
//   return null;
// }

// // テスト
// console.log(twoSum([2, 7, 11, 15], 9)); // 出力: [0, 1]
// 解説：Map で、各数値のインデックスを保存しながらループします。ターゲットから現在の数を引いた値がMap に存在すれば、その2つのインデックスが答えになります。

// 問題6: 最長共通接頭辞（Prefix）
// 解答： 最長共通接頭辞を求めるには、最初の文字列と他の文字列を順番に比較して共通部分を絞っていく方法が有効です。

// javascript
// コードをコピーする
// function longestCommonPrefix(strs) {
//   if (strs.length === 0) return "";
//   let prefix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, -1);
//       if (prefix === "") return "";
//     }
//   }
//   return prefix;
// }

// テスト
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // 出力: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));     // 出力: ""
// 解説：最初の文字列を基準として、それを他の文字列と比較しながら共通する部分を短くしていきます。もし途中で共通部分がなくなったら、空文字を返します。
