// import { notFound } from 'next/navigation';

// // Postコンポーネントに必要なプロパティを定義する型
// type PostProps = {
//   params: {
//     id: string;
//   };
// }

// // サーバーサイドの静的ページ生成を行う関数
// export async function generateStaticParams() {
//   const paths = [
//     { params: { id: '1' } },
//     { params: { id: '2' } },
//     { params: { id: '3' } },
//   ];

//   return paths;  // Promiseを使用せずに直接返す
// }

// // Postコンポーネント
// const Post = ({ params }: PostProps) => {
//   const { id } = params;

//   if (!id) {
//     notFound();  // idが無い場合、404ページにリダイレクト
//   }

//   return (
//     <div>
//       <h1>Post {id}</h1>
//     </div>
//   );
// };

// // Postコンポーネントはデフォルトエクスポート
// export default Post;

const PostPage = () => {
  return null;
};

export default PostPage;