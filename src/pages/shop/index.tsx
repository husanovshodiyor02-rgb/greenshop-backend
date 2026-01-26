import { Header } from "antd/es/layout/layout"
import ProducstShop from "../../components/products-shop"


const Shop = () => {
  return (
    <section>
        <Header/>
        <div className="w-[90%] m-auto">
            <ProducstShop/>
        </div>
    </section>
  )
}

export default Shop