// 全部出す　値 5以上のやつ　何もしなくてconsole 5未満 ×2 する

const a = [1, 2, 3, 4, 8, 9, 10]

for (let i = 0; i < a.length; i++) {
  if (a[i] > 7) {
    console.log(a[i]);
  }
  else if (a[i] < 4) {
    console.log(a[i] * 2);
  }
}