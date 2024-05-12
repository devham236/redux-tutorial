import React from "react"
import { useSelector } from "react-redux"
import RecipeDiv from "../Components/RecipeDiv"

const Checkout = () => {
  const { value } = useSelector((state) => state.checkout)

  const totalCookTime = value.reduce((prev, curr) => {
    return prev + curr.cookTimeMinutes
  }, 0)

  return (
    <div>
      {value.length > 0 ? (
        <>
          <p style={{ marginBottom: "1rem" }}>
            Your total cook time is: {totalCookTime}min
          </p>
          {value.map((recipe) => (
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
