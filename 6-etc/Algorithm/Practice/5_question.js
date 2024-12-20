// 難易度：下

// 問題1: 配列の合計
// 問題：整数の配列 arr が与えられたとき、その合計を返す関数 sumArray を作成してください。

// 入力 sumArray([1, 2, 3, 4, 5]);
// 出力 15
sumArray([1, 2, 3, 4, 5]);

console.log()

// 問題2: フィボナッチ数列
// 問題：n 番目のフィボナッチ数を返す関数 fibonacci を作成してください。フィボナッチ数列は、0、1、1、2、3、5、8、13、... という順に並びます。

// 例
// 入力 fibonacci(5);
// 出力
// 5


// 難易度：中

// 問題3: 配列の重複を除去
// 問題：整数の配列 arr が与えられたとき、その配列から重複を除いた新しい配列を返す関数 removeDuplicates を作成してください。

// 例
// 入力 removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// 出力
// [1, 2, 3, 4, 5]

// 問題4: アナグラム判定
// 問題：2つの文字列 str1 と str2 がアナグラム（同じ文字を使っているが並び順が異なる文字列）であるかを判定する関数 isAnagram を作成してください。

// 例
// 入力 isAnagram("listen", "silent");
// 出力
// true

// isAnagram("hello", "world");
// 出力
// false


// 難易度：上

// 問題5: 配列の2つの数の和
// 問題：整数配列 arr と目標値 target が与えられたとき、配列内の2つの要素の和が目標値になるようなインデックスのペア [index1, index2] を返す関数 twoSum を作成してください。解が1つだけ存在すると仮定してよいです。

// 例
// 入力 twoSum([2, 7, 11, 15], 9);
// 出力
// [0, 1] // 2 + 7 = 9

// 問題6: 最長共通接頭辞（Prefix）
// 問題：文字列の配列 strs が与えられたとき、その配列内のすべての文字列の間で最長の共通接頭辞を見つける関数 longestCommonPrefix を作成してください。共通接頭辞が存在しない場合は、空の文字列 "" を返してください。

// 例
// 入力 longestCommonPrefix(["flower", "flow", "flight"]);
// 出力
// "fl"

// longestCommonPrefix(["dog", "racecar", "car"]);
// 出力
// ""