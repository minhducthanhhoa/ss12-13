import React from 'react'

async function getPost(id:string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

export default async function page(props:any) {
    const {params} = props;
    const post = await getPost(params.id);
  return (
    <div>
        <p>Chi tiết bài viết có id: {params.id}</p> 
        {post.map((item:any)=>{
            return (
              <ul>
                <li>{item.title}</li>
                <li>{item.body}</li>
              </ul>
            ) 
        })}
    </div>
  )
}
