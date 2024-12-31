// ファイルの先頭に記述することで、そのコンポーネントが Client Component として動作するよう指示します。
// これにより、onClick などのクライアントサイドのイベントが使用可能になる
'use client';

const Hello = () => {
  const onClick = () => {
    alert('hello')
  }
  const text = 'Hello, React'

  return (
    <div onClick={onClick}>
      {text}
    </div>
  )
}

export default Hello