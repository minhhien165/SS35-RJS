import React, { useState } from 'react'

export default function Ex01() {
    const [name,setName]= useState<string>("Nguyễn Minh Hiển");
  return (
    <h3>Bt1
        Họ và tên: {name};
    </h3>
  )
}
