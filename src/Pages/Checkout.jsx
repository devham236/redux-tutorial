import React from "react"
import { useSelector } from "react-redux"
import RecipeDiv from "../Components/RecipeDiv"

const Checkout = () => {
  const checkout = useSelector((state) => state.checkout.value)

  const totalPrepTime = checkout.reduce((prev, curr) => {
    return prev + curr.prepTimeMinutes
  }, 0)

  return (
    <div>
      {checkout.map((item) => (
        <RecipeDiv key={item.id} recipe={item} />
      ))}
      <p>Your total prep time: {totalPrepTime}</p>
    </div>
  )
}

export default Checkout
