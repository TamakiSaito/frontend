'use client';

import Link from 'next/link';

const PostsPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        <li>
          <Link href="/posts/1">Go to Post 1</Link>
        </li>
        <li>
          <Link href="/posts/2">Go to Post 2</Link>
        </li>
        <li>
          <Link href="/posts/3">Go to Post 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default PostsPage;
