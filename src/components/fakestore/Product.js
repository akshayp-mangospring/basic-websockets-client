function Product({ product: { id, title, description, image, price, category } }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={category} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">${price}</h6>
        <p className="card-text">{description.substring(0, 100)}...</p>
      </div>
      <div className="card-footer bg-transparent text-center">
        <a href="#" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  );
}

export default Product;
