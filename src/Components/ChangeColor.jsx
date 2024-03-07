import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeColor } from "../features/theme"

const ChangeColor = () => {
  const [color, setColor] = useState("")
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  console.log(theme)
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
