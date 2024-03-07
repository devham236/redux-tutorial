import React from "react"
import { useSelector } from "react-redux"

const Profile = () => {
  const user = useSelector((state) => state.user.value)
  const theme = useSelector((state) => state.theme.value)

  return (
    <div className={``} style={{ color: theme }}>
      <h1 className="">Profile Page</h1>
      <p className="">Name: {user.name}</p>
      <p className="">Age: {user.age}</p>
      <p className="">E-Mail: {user.email}</p>
    </div>
  )
}

export default Profile
