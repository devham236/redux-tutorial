import React from "react"
import { useSelector } from "react-redux"
import RecipeDiv from "./Components/RecipeDiv"
import { Link, Route, Routes } from "react-router-dom"
import Favorites from "./Pages/Favorites"

const App = () => {
  const recipes = useSelector((state) => state.recipes.value)
  console.log(recipes)
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Link to={"/"} style={{ marginRight: "1rem" }}>
          <h1>Recipes</h1>
        </Link>
        <Link to={"/favorites"}>
          <h1>Favorites</h1>
        </Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {recipes.slice(0, 5).map((recipe) => (
                <RecipeDiv key={recipe.id} recipe={recipe} />
              ))}
            </div>
          }
        ></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </div>
  )
}

export default App
