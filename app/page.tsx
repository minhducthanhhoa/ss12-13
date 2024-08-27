import React from 'react'

export default function page() {
  return (
    <div>page
      {/*
        NextJs vừa render dữ liệu ở phía client và phía server
        khi tạo component ở trong nextjs thì mặc định component đấy là server component 
        còn client component thì phải dùng "use client": khi cần tương tác dữ liệu (useState, useEffect, các sự kiện(onClick, onChange))
        
        Cách render dữ liệu bằng 2 cách:
        I. render dữ lệu ở phía server
       */}
    </div>
  )
}
