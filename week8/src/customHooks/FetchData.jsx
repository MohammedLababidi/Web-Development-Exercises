import axios from 'axios'

function FetchData() {
  return (
    axios.get("https://fakestoreapi.com/products")
  )
}

export default FetchData