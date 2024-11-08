// 難易度：下
// 問題1: 配列の合計
// ヒント： 配列のすべての要素を合計するには、reduce メソッドを使うと便利です。このメソッドは、配列内の要素を累積して合計を計算できます。

// 例
// arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// accumulator は累積された合計で、currentValue は配列の現在の要素です。初期値は 0 に設定します。

// 問題2: フィボナッチ数列
// ヒント： フィボナッチ数列は、次のように定義されます。

// 0 番目の数は 0
// 1 番目の数は 1
// それ以降の数は、前の 2 つの数の和です。
// 再帰的に解く方法や、ループを使って解く方法があります。再帰のほうが簡単に見えますが、ループの方が効率的です。

// 例: ループを使った実装
// let a = 0, b = 1;
// for (let i = 2; i <= n; i++) {
//   let temp = a + b;
//   a = b;
//   b = temp;
// }
// return b;
// 再帰を使う場合は、fibonacci(n-1) + fibonacci(n-2) のように定義できます。


// 難易度：中

// 問題3: 配列の重複を除去
// ヒント： 配列の重複を取り除くためには、Set を使うと簡単に実装できます。Set は重複を許さない特性を持っているので、配列を Set に変換してから再び配列に戻すだけです。

// let uniqueArr = [...new Set(arr)];

// 問題4: アナグラム判定
// ヒント： アナグラムを判定するには、2つの文字列をソートして、それが同じかどうかを比較します。もしソート後の文字列が同じであれば、アナグラムです。

// let sortedStr1 = str1.split('').sort().join('');
// let sortedStr2 = str2.split('').sort().join('');
// return sortedStr1 === sortedStr2;


// 難易度：上

// 問題5: 配列の2つの数の和
// ヒント： この問題は、2つの数を探すためにハッシュテーブルを使用するのが効率的です。目標の値から現在の要素を引いた値がすでにハッシュテーブルに存在する場合、その2つの要素が目標の和になるということです。

// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//   let complement = target - arr[i];
//   if (map.has(complement)) {
//     return [map.get(complement), i];
//   }
//   map.set(arr[i], i);
// }


// 問題6: 最長共通接頭辞（Prefix）
// ヒント： 最長共通接頭辞を見つける方法として、すべての文字列を一つずつ比較していき、共通する部分がなくなった時点で終了します。1つ目の文字列を基準にして、すべての他の文字列と比較する方法が考えられます。

// let prefix = strs[0];
// for (let i = 1; i < strs.length; i++) {
//   while (strs[i].indexOf(prefix) !== 0) {
//     prefix = prefix.slice(0, prefix.length - 1);
//     if (prefix === "") return "";
//   }
// }
// return prefix;