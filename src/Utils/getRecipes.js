const getRecipes = async () => {
  try {
    const res = await fetch("/data.json")
    const { recipes } = await res.json()
    return recipes
  } catch (error) {
    return error
  }
}

export default getRecipes
