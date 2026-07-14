import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { convert } from "../utilities/CurrencyConverter";

function Card({ products, currency }) {
  const navigate = useNavigate();
  const handleNavigate = useCallback((id) => {
    navigate(`/products/details/${id}`)
  }, [navigate])

  return (
    <div className="container">
      
      <div className="row py-4 justify-content-around">
        {products.map((product) => (
          <div
            key={product.id}
            className="card rounded-5"
            style={{ width: "18rem" }}
          >
            <div className="img-container">
              <img className="card-img-top p-2" src={product.image} alt="" />
            </div>
            <h4 className="product-title p-2">{product.title}</h4>
            <p className='price p-2 fw-bold fs-5'>{convert(products[0].price, currency)}</p>
            <div className="p-4 mt-auto ms-auto">
            <Button
              className="product-btn rounded-5 fs-5 mx-auto"
              onClick={() => handleNavigate(product.id)}
            >
              See More
            </Button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
