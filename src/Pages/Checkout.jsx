import React from "react"
import { useSelector } from "react-redux"
import RecipeDiv from "../Components/RecipeDiv"

const Checkout = () => {
  const { data } = useSelector((state) => state.checkout)

  const totalCookTime = data.reduce((prev, curr) => {
    return prev + curr.cookTimeMinutes
  }, 0)

  console.log(totalCookTime)

  return (
    <div>
      {data.length > 0 ? (
        <>
          <p style={{ marginBottom: "1rem" }}>
            Your total Cook Time: {totalCookTime}
          </p>
          {data.map((item) => (
            <RecipeDiv key={item.id} recipe={item} />
          ))}
        </>
      ) : (
        <p>Your Checkout Bag is empty</p>
      )}
    </div>
  )
}

export default Checkout
