// a と言う配列を作ります　constで　中身　1234 8910 for文を使って console.log

const a = [1, 2, 3, 4, 8, 9, 10]
for (let i = 0; i < a.length; i++) {
  if(a[i] % 2 === 1)
  console.log(a[i]);
}

// const a = [1, 2, 4, 5, 8, 10]
// for (let i = 0; i < a.length; i++){
//   if (a[i] % 2 !== 0)
//   console.log(a[i]);
