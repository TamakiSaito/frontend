import { notFound } from 'next/navigation';

type PostProps = {
  params: {
    id: string;
  };
};

// 静的生成するためのパスを指定する関数
export async function generateStaticParams() {
  return [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ];
}

// Postコンポーネント
const Post = ({ params }: PostProps) => {
  const { id } = params;

  // 有効なIDかチェック
  if (!['1', '2', '3'].includes(id)) {
    notFound(); // 無効なIDの場合は404ページを表示
  }

  return (
    <div>
      <h1>Post {id}</h1>
      <p>This is the content for post {id}.</p>
    </div>
  );
};

export default Post;
