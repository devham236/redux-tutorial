const getRecipes = async () => {
  try {
    const res = await fetch("/data.json")
    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}

export default getRecipes
