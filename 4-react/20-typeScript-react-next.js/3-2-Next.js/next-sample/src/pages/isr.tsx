import { GetStaticPaths, NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

type ISRProps = {
  message: string
}

// ISRPropsを受け付けるNextPage（ページ）の型
const ISR: NextPage<ISRProps> = (props: { message: any }) => {
  const { message } = props

  const router = useRouter ()

  if (router. isFallback) {
    // フォールバック用のページを返す
    return <div>Loading...</div>
  }

  return ( 
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはISRによってビルド時に生成されたページです。</p>
        <p> {message} </p>
        {/* /ssrへ遷移するためのリンクを作成 */}
        <Link href="/ssr">
        <a>GO TO SSR PAGE</a>
        </Link>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date(). toLocaleString ()
  const message =`${timestamp}にこのページのgetstaticpropsが実行されました`

  return {
    props: {
      message,
    },
    // 11ページの有効期間を秒単位で指定
    revalidate: 60,
  }
}
export default ISR