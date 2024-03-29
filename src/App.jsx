import React from "react"
import { useSelector } from "react-redux"

const App = () => {
  const recipes = useSelector((state) => state.recipes.value)

  console.log(recipes)
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit, vero
      fugit quis numquam ullam fuga, tenetur neque voluptate tempora dolor
      placeat id provident cum natus perferendis nesciunt architecto est.
    </div>
  )
}

export default App
