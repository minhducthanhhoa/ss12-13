import React from 'react'

async function getPost() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}

export default async function page() {
    const post = await getPost();
  return (
    <div>
        {post.map((item:any)=>{
            return <ul>
                <li>{item.title}</li>
            </ul>
        })}
    </div>
  )
}
