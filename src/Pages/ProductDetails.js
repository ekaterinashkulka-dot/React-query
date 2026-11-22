import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { products } from "./ProductsData";

const ProductDetailes = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleNext = () => {
    navigate(1);
  };

  console.log(location);
  const selectedProduct = products.find((product) => {
    return product.id === Number(id);
  });
  if (!selectedProduct) {
    return <h2>Товар не знайдено</h2>;
  }
  return (
    <div>
      <h2>Деталі товару</h2>
      <p>{selectedProduct.name}</p>
      <p>{selectedProduct.price}</p>
      <p>{selectedProduct.category}</p>

      <p>Product: {id}</p>
      <p>Перейшли з: {location.state?.from}</p>
      <button onClick={handleBack}>Назад</button>
      <button onClick={handleNext}>Вперед</button>
    </div>
  );
};
export default ProductDetailes;
