import React from 'react'

async function getPost(id:number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}
export default async function page(prop:any) {
  const {params} = prop;
  const post = await getPost(params.id);
  return (
    <div>
        <p>{post.title}</p>
        <p>{post.body}</p>
    </div>
  )
}
