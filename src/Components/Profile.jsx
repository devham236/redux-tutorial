import React from "react"
import { useSelector } from "react-redux"

const Profile = () => {
  const user = useSelector((state) => state.user.value)
  const darkMode = useSelector((state) => state.darkMode.value)

  console.log(darkMode)
  return (
    <div className={`${darkMode ? "bg-slate-400" : "bg-slate-900"}`}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>E-Mail: {user.email}</p>
    </div>
  )
}

export default Profile
