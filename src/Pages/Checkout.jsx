import React from "react"
import { useSelector } from "react-redux"

const Checkout = () => {
  const checkout = useSelector((state) => state.checkout.value)

  return <div></div>
}

export default Checkout
