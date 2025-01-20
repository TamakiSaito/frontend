import './App.css'
import Hello from './components/Hello'
import Counter from './components/Counter'
import Login from './components/Login'

// 下にexport default Appがあれば
// const App: React.FC = () => {} でfunction App()の代わりに記述もできる
// React.FC -> propsをもらえるコンポーネントという意味
function App() {
  const onClick = (): void => {
    alert('Hey!!')
  }
  const onSubmit = (): void => {
    alert('alert')
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
      <Login onSubmit={onSubmit} />
    </>
  )
}

export default App
