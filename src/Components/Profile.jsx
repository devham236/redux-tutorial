import React from "react"
import { useSelector } from "react-redux"

const Profile = () => {
  const user = useSelector((state) => state.user.value)
  const darkMode = useSelector((state) => state.darkMode.value)

  console.log(darkMode)
  return (
    <div className={`${darkMode ? "bg-slate-900" : "bg-slate-400"}`}>
      <h1 className={`${darkMode && "text-white"}`}>Profile Page</h1>
      <p className={`${darkMode && "text-white"}`}>Name: {user.name}</p>
      <p className={`${darkMode && "text-white"}`}>Age: {user.age}</p>
      <p className={`${darkMode && "text-white"}`}>E-Mail: {user.email}</p>
    </div>
  )
}

export default Profile
