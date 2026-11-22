import { Link, Outlet, useLocation } from "react-router-dom";
import { products } from "./ProductsData";

const Products = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Products</h1>
      <p>Перейшли з {location.state?.from}</p>
      <nav>
        <Link to="phones">Телефони</Link>
        <Link to="laptops">Ноутбуки</Link>
        <Link to="/products/5" state={{ from: "Products page" }}>
          Відкрити товар №5
        </Link>
      </nav>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <h2>{product.name}</h2>
              </Link>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};
export default Products;
