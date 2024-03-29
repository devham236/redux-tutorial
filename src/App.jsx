import React from "react"
import getRecipes from "./Utils/getRecipes"
const data = await getRecipes()

const App = () => {
  console.log(data)
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit, vero
      fugit quis numquam ullam fuga, tenetur neque voluptate tempora dolor
      placeat id provident cum natus perferendis nesciunt architecto est.
    </div>
  )
}

export default App
