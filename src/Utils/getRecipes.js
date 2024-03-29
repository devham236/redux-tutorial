const getRecipes = async () => {
  try {
    const res = await fetch("http://localhost:5173/data.json")
    const data = await res.json()
    return data
  } catch (error) {
    return error
  }
}

export default getRecipes
