'use client'

// 型のために導入
import { GetStaticProps, NextPage, NextPageContext } from 'next'
import Head from 'next/head'

// // ページコンポーネントのpropsの型定義（ここでは空）
type SSGProps = {}

// // SSG向けのページを実装
// // NextPageはNext.jsのPages向けの型
// // NextPage<props>でpropsが入るPageであることを明示
const SSG: NextPage<SSGProps> = () => {
  return (
    <div>
      {/* Headコンポーネントで包むと、その要素は<head>タグに配置される */}
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルド時に生成されたページです
        </p>
      </main>
    </div>
  )
}

// propsの型定義
// type SSGProps = {
//   message: string
// }

// SSGはgetStaticPropsが返したpropsを受け取る事ができる
// NextPage<SSGProps>はmessage: stringのみを受け取って生成されるページの型
// const SSG: NextPage<SSGProps> = (props) => {
//   const { message } = props

//   return (
//     <div>
//       <Head>
//         <title>Static Site Generation</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main>
//         <p>
//           このページは静的サイト生成によってビルド時に生成されたページです2
//         </p>
//         <p>{message}</p>
//       </main>
//     </div>
//   )
// }

// export const GetStaticProps: GetStaticProps<SSGProps> = async (context) => {
//   const timestamp = new Date().toLocaleString()
//   const message = `${timestamp} にgetStaticPropsが実行されました`
//   console.log(message)
//   return {
//     // ここで返したpropsをもとにページコンポーネント描画する
//     props: {
//       message,
//     },
//   }
// }

// export async function getStaticProps() {
//   return {
//     props: {}
//   }
// }

export default SSG