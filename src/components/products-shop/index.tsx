import Header from "../header/Header";
import CardTotal from "./card-total";
import Shopping from "./shopping";


const ProductsShop = () => {
  return (
    <div className="">
      <Header/>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-5 mt-5">
        
        <Shopping />
        <CardTotal />
      </div>
    </div>
  );
}

export default ProductsShop