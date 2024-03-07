import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { changeColor } from "../features/theme"

const ChangeColor = () => {
  const [color, setColor] = useState("")
  const dispatch = useDispatch()
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setColor(e.target.value)}
        className="border-2 border-black"
      />
      <button onClick={() => dispatch(changeColor(color))}>Change Color</button>
    </div>
  )
}

export default ChangeColor
