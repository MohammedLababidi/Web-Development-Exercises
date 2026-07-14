import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { convert } from "../utilities/CurrencyConverter";


function ProductDetails({ currency }) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <>
      <div>
        <h2 className="mt-4 ms-4" style={{ color: "orangered" }}>
          Product Details
        </h2>
        <div className="d-flex mt-4">
          <img
            className=" details-img ms-4 p-4 rounded-5"
            src={product.image}
            alt=""
          />
          <div className="flex-column ms-3">
            <h4 className="product-details w-75">{product.title}</h4>
            <p className="price fs-5 fw-bold mt-3">{convert(product.price, currency)}</p>
            <p className="product-details w-75 fs-5 mt-3" style={{ textAlign: "justify" }}>
              {product.description}
            </p>
            <Button
              className="details-btn rounded-5 fs-5 mt-2"
              onClick={() => navigate("/products")}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
