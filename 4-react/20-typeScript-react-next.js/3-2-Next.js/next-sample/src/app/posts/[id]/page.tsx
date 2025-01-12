import { notFound } from 'next/navigation';

type PostProps = {
  params: Promise<{ id: string }>;
};

const Post = async ({ params }: PostProps) => {
  const { id } = await params;

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
