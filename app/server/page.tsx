import React from 'react'

// hàm đi lấy dữ liệu 
async function getUser() {
    const res:any = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
}
 export default async function page() {
    const user = await getUser(); 
  return (
    <div>server
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        {user.map((item:any)=>{
            return <li>{item.name}</li>
        })}
    </div>
  )
}
