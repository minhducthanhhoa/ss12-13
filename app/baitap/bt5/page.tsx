import { use } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Page() {
  try {
    const posts: Post[] = use(fetchPosts());
    return (
      <div>
        <h1>Xử lý Lỗi với SSR</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return (
        <div>
          <h1>Xử lý Lỗi với SSR</h1>
          <p>Đã xảy ra lỗi: {error.message}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Xử lý Lỗi với SSR</h1>
          <p>Đã xảy ra lỗi không xác định</p>
        </div>
      );
    }
  }
}

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/nonexistent-url');
  if (!response.ok) {
    throw new Error('Không thể lấy dữ liệu từ API');
  }
  return await response.json();
}