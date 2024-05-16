import React, { useState } from 'react'
import "./ex03.css"
export default function Bt3() {
    
    const [change, setChange] = useState<boolean>(true)
    const handleClick = () => {
        setChange(false)
    }
  return (
      <div>
        Bt3:
        <br />
          <p className={change?'black':"red"}>tiêu đề văn bản</p>
          <button onClick={handleClick}>thay đổi màu</button>
      </div>
  )
}