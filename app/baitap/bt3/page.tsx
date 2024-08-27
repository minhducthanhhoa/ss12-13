"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        const getData = async ()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUser(data);
        }
        getData();
    },[])
  return (
    <div> Danh sách người dùng
        {user.map((item:any)=>{
            return <li>{item.username}</li>
        })}
    </div>
  )
}
