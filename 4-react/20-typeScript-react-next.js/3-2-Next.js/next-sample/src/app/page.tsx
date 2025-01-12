'use client'

// import type { NextPage } from 'next'
// import styles from './page.module.css'
// import styled from 'styled-components'

// const H1 = styled.h1`
//   color: red;
// `

// const Home: NextPage = () => {
//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         <H1>
//           Welcome to <a href='https://nextjs.org'>Next.js!</a>
//         </H1>
//       </main>
//     </div>
//   )
// }

// export default Home



// import { NextPage } from 'next' 
// import styled from 'styled-components'

// type ButtonProps = {
// color: string 
// backgroundColor: string
// }

// // 文字色と背景がpropsから変更可能なボタンコンポーネント
// // 型引数にpropsの型を渡す
// const Button = styled.button<ButtonProps>`
//   /* coLor, background, border-colorはpropsから渡す */
//   color: ${(props) => props.color};
//   background: ${(props) => props.backgroundColor}; 
//   border: 2px solid ${(props) => props.color};

//   font-size: 2em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 8px;
//   cursor: pointer;
// `

// const Page: NextPage = () => {
//   return ( 
//     <div>
//       {/* 赤色の文字で透明な背景のボタンを表示 */}
//       <Button backgroundColor="transparent" color="#FF0000">
//         Hello
//       </Button>
//       {/* 自色の文字で青色の背景のボタンを表示 */}
//       <Button backgroundColor="#1E90FF" color="white">
//         World
//       </Button>
//     </div>
//   )
// }
// export default Page


// mixin
// import { NextPage } from 'next'
// import styled, { css } from 'styled-components'

// //赤色のボーダーを表示するスタイル
// const redBox = css`
//   padding: 0.25em lem;
//   border: 3px
//   solid #ff0000;
//   border-radius: 10px;
// `

//   // 青色文字を表示するスタイル
// const font = css`
//   color: #1e90ff;
//   font-size: 2em;
// `

//   //赤色ボーダーと青色文字のスタイルをそれぞれ適用し、背景が透明なボタンコンポーネント
// const Button = styled. button`
//   background: transparent;
//   margin: lem;
//   cursor: pointer;
//   ${redBox}
//   ${font}
// `

//   // 青色文字のスタイルを継承し、ポールドでテキストを表示するコンポーネント
//   const Text = styled.p`
//   font-weight: bold;
//   ${font}
// `

// const Page: NextPage = () => {
//   return ( 
//     < div>
//       {/* 青色文字で赤色ボーダーのボタンを表示 */}
//       <Button>Hello</Button>
//       {/* 青色文字のテキストを表示 */}
//       <Text>World</Text>
//     </div>
//   )
// }
  
// export default Page;



// <Link> 
import { NextPage } from 'next' 
import Link, { LinkProps } from 'next/link' 
import styled from 'styled-components'

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string
  children: React.ReactNode
}
// Next.jsのリンクにスタイルを適用するためのヘルパーコンポーネント
// このコンボーネントをstyled-componentsで使用すると、定義したスタイルに対応するclassNameがpropsとして渡される
// このclassNameをa要素に渡す
const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props
  return (
    <Link {... rest}>
      <a className= {className}> {children} </a>
    </Link>
  )
}

const StyledLink = styled(BaseLink)`
  color: #le90ff;
  font-size: 2em;
`

const Page: NextPage = () => {
  return ( 
    <div>
      {/* 青色のリンクを表示する */}
      <StyledLink href="/">Go to Index</StyledLink>
    </div>
  )
}
export default Page;