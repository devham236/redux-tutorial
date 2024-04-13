import React from "react"
import { useSelector } from "react-redux"
import RecipeDiv from "../Components/RecipeDiv"

const Checkout = () => {
  const checkout = useSelector((state) => state.checkout.value)

  return (
    <div>
      {checkout.map((item) => (
        <RecipeDiv key={item.id} recipe={item} />
      ))}
    </div>
  )
}

export default Checkout
