import { useSelector } from "react-redux";
import Product from "./Product";

function Cart() {
  const products = useSelector(({ cart }) => cart);

  if (products.length === 0) {
    return (
      <div className="container my-5">
        <h1 className="text-center">Nothing in Cart</h1>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <ul className="list-unstyled row d-flex flex-wrap g-3">
        {products.map((product) => (
          <li key={product.id} className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <Product product={product} isFromCart />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart;
