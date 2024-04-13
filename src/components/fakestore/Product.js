import { useDispatch } from "react-redux";
import { add } from "@store/cartSlice";

function Product({ product }) {
  const { id, title, description, image, price, category } = product;
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={category} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">${price}</h6>
        <p className="card-text">{description.substring(0, 100)}...</p>
      </div>
      <div className="card-footer bg-transparent text-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => addToCart(product)}
        >Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
