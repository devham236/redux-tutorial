export const getRecipes = async () => {
  try {
    const res = await fetch("/data.json")
    const data = await res.json()
    return data.recipes
  } catch (error) {
    return error
  }
}
