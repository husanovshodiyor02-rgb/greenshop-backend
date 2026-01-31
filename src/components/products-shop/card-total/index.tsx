import { Form } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Prices from "./prices";
import { useRef } from "react";
import { useGetCoupon } from "../../../hooks/useQuery/useQueryAction";




const CardTotal = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate, isPending } = useGetCoupon();

  const getCoupon = () => {
    const coupon: string = inputRef.current?.value || "";
    mutate({coupon_code: coupon});
  };

  return (
    <div>
      <h3 className="pb-5 text-[#3D3D3D] border-b border-nav font-bold text-[18px]">
        Card Total
      </h3>

      <Form onFinish={getCoupon} className="flex h-10 mt-8.75">
        <input
          ref={inputRef}
          name="coupon"
          placeholder="Enter coupon code here..."
          className="border w-4/5 border-nav pl-3.75 placeholder:font-light rounded-l-lg rounded-r-none outline-none text-sm"
        />
        <button className="bg-nav flex rounded-r-lg items-center justify-center gap-1 text-base text-white w-1/5 rounded-l-none font-bold cursor-pointer">
          {isPending ? <LoadingOutlined /> : <span>Apply</span>}
        </button>
      </Form>

      <Prices />

      <button
        onClick={() => navigate("/proced-checkout")}
        className="bg-nav flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-10 mt-7.5 font-bold cursor-pointer"
      >
        Proceed To Checkout
      </button>

      <Link to={"/"} className="flex justify-center">
        <button className="mt-3.5 text-nav cursor-pointer text-sm font-bold bg-transparent border-none">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default CardTotal;