import React from "react"
import { useSelector } from "react-redux"
import RecipeDiv from "../Components/RecipeDiv"

const Checkout = () => {
  const checkout = useSelector((state) => state.checkout.value)

  const totalCookTime = checkout.reduce((prev, curr) => {
    return prev + curr.cookTimeMinutes
  }, 0)

  return (
    <div>
      {checkout.length > 0 ? (
        <>
          <p>Your total cook time is: {totalCookTime}min</p>
          {checkout.map((recipe) => (
            <RecipeDiv key={recipe.id} recipe={recipe} />
          ))}
        </>
      ) : (
        <p>Your Checkout Bag is empty.</p>
      )}
    </div>
  )
}

export default Checkout
