// Textコンポーネントは親から'content'というデータを受け取る
const Text = (props: {content: string}) => {
  // propsからcontentと言う値を取り出す
  const { content } = props
  // propsで渡されたデータを表示する
  return <p className="text">{content}</p>
}

const Message = (props: {}) => {
  {/* contentキーでコンポーネントにデータを渡す */}
  const content1 = 'Parent component'
  const content2 = 'Message uses Text component'

  return (
    <div>
      <Text content={content1} />
      <Text content={content2} />
    </div>
  )
}

export default Message