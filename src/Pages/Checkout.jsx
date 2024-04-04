import React from "react"
import { useSelector } from "react-redux"
import RecipeDiv from "../Components/RecipeDiv"

const Checkout = () => {
  const checkout = useSelector((state) => state.checkout.value)
  console.log(checkout)
  return (
    <div>
      {checkout.length > 0 ? (
        checkout.map((recipe) => <RecipeDiv key={recipe.id} recipe={recipe} />)
      ) : (
        <p>Your Checkout is empty...</p>
      )}
    </div>
  )
}

export default Checkout
