import { useReduxSelector } from "../../../../hooks/useRedux";

const Prices = () => {
  const cupon_title_style = "text-[#3D3D3D] text-[15px] font-normal";
  const { data } = useReduxSelector((state) => state.shopSlice);

  const totalPrice = data.reduce((total, value) => (total+= value.userPrice), 0)
  const { coupon } = useReduxSelector((state) => state.shopSlice);

  return (
    <div>
      <div className="mt-5">
      
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Subtotal</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$ {totalPrice?.toFixed(2)}</h2>
        </div>

        
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Coupon Discount</h3>
          <h2 className="text-[#3D3D3D] text-[15px] font-normal">{coupon}%</h2>
        </div>

     
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Shiping</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$16.00</h2>
        </div>
      </div>

     
      <div className="flex justify-between items-center mt-5">
        <h2 className="text-[#3D3D3D] text-[16px] font-bold">Total:</h2>
        <div>
          <h1 className="text-nav text-[18px] font-bold">
            ${coupon ? (totalPrice - (totalPrice * coupon) / 100 +16).toFixed(2):(totalPrice + 16).toFixed(2)}</h1>

            {Boolean(coupon) && (
              <h1 className={'text-red-500 text-[15px] font-bold'}>
                $-{((totalPrice * coupon) / 100).toFixed(2)}
              </h1>
            )}

        </div>
      </div>
    </div>
  );
};

export default Prices;