import Card from "../components/Card";
import Button from "../components/Button";
import { useState,useMemo, useEffect } from "react";
import FetchData from "../customHooks/FetchData";


function Products() {
  const [category, setCategory] = useState('all')
  const [products, setProducts] = useState([]);
  const filteredProducts = useMemo(() => {
    return category === 'all' ? products : products.filter(product => product.category === category)
  }, [products, category])


  // ! i guess you fetched all the data once? , very wrong to fetch all the data once , we dont even have a tab called (All)
  // ! its better to fetch only the triggered data , but its ok for now , good one to use usememo for big data like this
  useEffect(() => {
    FetchData()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
    <div className="container">
      <h2 className="products-text ms-4 mt-5 fw-bold">Products:</h2>
      <div className="filter-container d-flex justify-content-center gap-5 p-2">
      <Button className={`filter-btn rounded-5 fw-bold ${category === 'all' ? 'active-2' : ''}`} onClick={() => setCategory("all")}>All</Button>
      <Button className={`filter-btn rounded-5 fw-bold ${category === "men's clothing" ? 'active-2' : ''}`} onClick={() => setCategory("men's clothing")}>Men</Button>
      <Button className={`filter-btn rounded-5 fw-bold ${category === "women's clothing" ? 'active-2' : ''}`} onClick={() => setCategory("women's clothing")}>Women</Button>
      <Button className={`filter-btn rounded-5 fw-bold ${category === "electronics" ? 'active-2' : ''}`} onClick={() => setCategory("electronics")}>Electronics</Button>
    </div>
    <Card products={filteredProducts} />
    </div>
   
    </>
  );
}

export default Products;
