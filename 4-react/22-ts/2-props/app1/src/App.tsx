import './App.css'
import Counter from './components/Counter'
import Hello from './components/Hello'

// 下にexport default Appがあれば
// const App: React.FC = () => {} でfunction App()の代わりに記述もできる
// React.FC -> propsをもらえるコンポーネントという意味
function App() {
  const onClick = (): void => {
    alert('Hey!!')
  }

  const getUserClass = (name: string, userClass: string): string => {
    return `${name} : ${userClass}`
  }
 
  return (
    <>
      {/* 変数の'値'とアクションをHelloから送る */}
      <Hello name='Lee' onClick={onClick}/>
      <Hello name='Mark' onClick={onClick} getUserClass={getUserClass} />
      <Hello name='Micheal' onClick={onClick} getUserClass={getUserClass} userClassify={'Dancer'} />
      <Hello name='Smith' onClick={onClick} getUserClass={getUserClass} userClassify={'Singer'} />
      <Counter />
    </>
  )
}

export default App
