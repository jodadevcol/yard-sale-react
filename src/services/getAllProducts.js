const URL_API = `https://api.escuelajs.co/api/v1/products?limit=25&offset=0`

const dataStructure = (dataAPI) => {
  if (Array.isArray(dataAPI)) {
    const products = dataAPI.map((product) => {
      const { id, title, price } = product
      const image = product.images[0]

      return { id, title, price, image }
    })

    return products
  }
  return []
}

export function getAllProducts() {
  return fetch(URL_API)
    .then((response) => response.json())
    .then(dataStructure)
}
