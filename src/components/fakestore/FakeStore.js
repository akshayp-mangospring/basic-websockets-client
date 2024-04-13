import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { getProducts } from "@store/productSlice";

function FakeStore() {
  const dispatch = useDispatch();
  const { data: products } = useSelector(({ products }) => products);

  useEffect(() => {
    try {
      if (!products.length) {
        dispatch(getProducts());
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <h1 className="text-center my-5">Product Dashboard</h1>
      <div className="container">
        <ul className="list-unstyled row d-flex flex-wrap g-3">
          {products.map((product) => (
            <li key={product.id} className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <Product product={product} isFromCart={false} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FakeStore;
