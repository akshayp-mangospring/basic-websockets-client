import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function LoggedInTopNav() {
  // `cart` in useSelector is picked up from `basic-websockets-client/src/store/index.js`
  const cart = useSelector(({ cart }) => cart);
  const productsInCart = cart.length;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">To dos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fakestore">FakeStore</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/fakestore/cart">
                Cart
                <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                  {productsInCart}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LoggedInTopNav;
