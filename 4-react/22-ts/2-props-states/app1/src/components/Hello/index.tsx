interface HelloProps {
  name?: string
  onClick: () => void
  // 右クリック: 戻り値はstring
  getUserClass?: (name: string, userClass: string) => string
  userClassify?: string
}

// const Hello: React.FC<HelloProps> = ({ name, onClick, getUserClass, userClassify }) => {} でも記述できる 
function Hello({ name, onClick, getUserClass, userClassify }: HelloProps) {
  const userName: string = name || 'Stranger!?'

  const userClass: string = userClassify || 'User'

  const onContextMenu = () => {
    if (getUserClass) {
      const userClassText = getUserClass && getUserClass(userName, userClass)
      alert(userClassText)
    } else return
  }

  return (
    <div onClick={() => onClick()} onContextMenu={() => onContextMenu()}>Hello!? {userName}</div>
  )
}

export default Hello