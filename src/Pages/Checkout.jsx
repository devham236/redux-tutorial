import React from "react"
import { useSelector } from "react-redux"
import RecipeDiv from "../Components/RecipeDiv"

const Checkout = () => {
  const checkout = useSelector((state) => state.checkout.value)
  console.log(checkout)

  const totalPrepTime = checkout.reduce((prev, curr) => {
    return prev + curr.cookTimeMinutes
  }, 0)

  return (
    <div>
      {checkout.length > 0 ? (
        checkout.map((recipe) => <RecipeDiv key={recipe.id} recipe={recipe} />)
      ) : (
        <p>Your Checkout is empty...</p>
      )}
      <p>Total Cook Time for all Recipes: {totalPrepTime}min</p>
    </div>
  )
}

export default Checkout
