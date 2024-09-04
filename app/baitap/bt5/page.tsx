import React from 'react'

// Tạo function lấy data từ api
async function getData() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/nonexistent-url");
  // const data = res.json();
  // return data;
  try {
    const res = await fetch("https://11111jsonplaceholder.typicode.com/nonexistent-url");
    const data = res.json();
    return data;
  } catch (error:any) {
    console.log("lỗi", error);
    return "error";
  }
}
export default async function page() {
  const data = await getData();
  return (
    <div>Xử lí lỗi với SSR:{data}</div>
  )
}
