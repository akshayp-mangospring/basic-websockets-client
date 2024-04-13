import { useDispatch } from "react-redux";
import { add, remove } from "@store/cartSlice";

function Product({ product, isFromCart }) {
  const { title, description, image, price, category } = product;
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const removeFromCart = ({ id }) => {
    dispatch(remove(id));
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
        {
          isFromCart ? (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeFromCart(product)}
            >Remove</button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >Add to Cart</button>
          )
        }
      </div>
    </div>
  );
}

export default Product;
