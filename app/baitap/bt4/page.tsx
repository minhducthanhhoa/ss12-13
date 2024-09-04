"use client"
import { use } from 'react';
import { useState } from 'react';
async function fetchPostData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json();
}

export default function SsrCsrPage() {
  const posts = use(fetchPostData());

  const [refreshedPosts, setRefreshedPosts] = useState(posts);

  const handleRefresh = async () => {
    const newPosts = await fetchPostData();
    setRefreshedPosts(newPosts);
  };

  return (
    <div>
      <h1>Danh sách Bài viết với Refresh</h1>
      <ul>
        {refreshedPosts.map((post:any) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
}