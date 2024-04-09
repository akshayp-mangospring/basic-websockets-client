import { useEffect, useState } from "react";
import Product from "./Product";

function FakeStore() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => {
          setProducts(res);
        });
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
            <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <Product key={product.id} product={product} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FakeStore;
