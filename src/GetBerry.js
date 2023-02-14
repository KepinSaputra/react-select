import axios from "axios"

const BASE_URL = "https://pokeapi.co/api/v2/berry/"

export async function getBerry() {
  const berry = await axios.get(BASE_URL)
  const result = berry.data.results.map((data) => {
    return {
      label: data.name,
      name: data.name,
    }
  })
  return result
}
