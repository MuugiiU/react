import AliceCarousel from "react-alice-carousel";
import Products from "../../data/Products";
import ProductList from "./ProductList";
const Product = () => {
  return (
    <div className="product">
      <h3> Popular Product</h3>
      <ProductList />
    </div>
  );
};
export default Product;
