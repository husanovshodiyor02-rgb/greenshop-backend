const Prices = () => {
  const cupon_title_style = "text-[#3D3D3D] text-[15px] font-normal";

  return (
    <div>
      <div className="mt-[20px]">
      
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Subtotal</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$ 0</h2>
        </div>

        
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Coupon Discount</h3>
          <h2 className="text-[#3D3D3D] text-[15px] font-normal">(-) 0 $</h2>
        </div>

     
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Shiping</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$16.00</h2>
        </div>
      </div>

     
      <div className="flex justify-between items-center mt-[20px]">
        <h2 className="text-[#3D3D3D] text-[16px] font-bold">Total:</h2>
        <div>
          <h1 className="text-[#46A358] text-[18px] font-bold">$ 0</h1>

        </div>
      </div>
    </div>
  );
};

export default Prices;
