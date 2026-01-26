import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Prices from "./prices";



const CardTotal = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3 className="pb-5 text-[#3D3D3D] border-b border-[#46A358] font-bold text-[18px]">
        Card Total
      </h3>

      <Form className="flex h-[40px] mt-[35px]">
        <input
          name="coupon"
          placeholder="Enter coupon code here..."
          className="border w-4/5 border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg rounded-r-none outline-none text-sm"
        />
        <button className="bg-[#46A358] flex rounded-r-lg items-center justify-center gap-1 text-base text-white w-1/5 rounded-l-none font-bold cursor-pointer">
          <span>Apply</span>
        </button>
      </Form>


      <Prices />

      <button
        onClick={() => navigate("/proced-checkout")}
        className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px] mt-[30px] font-bold cursor-pointer"
      >
        Proceed To Checkout
      </button>

      <Link to={"/"} className="flex justify-center">
        <button className="mt-[14px] text-[#46A358] cursor-pointer text-sm font-bold bg-transparent border-none">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default CardTotal;
