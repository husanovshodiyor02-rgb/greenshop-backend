import { useEffect, useState } from "react";

interface OrderType {
  _id: string;
  created_at: string; 
  total_price: number;
  status?: string;
}

const TrackOrder = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {

        const mockData: OrderType[] = [
          {
            _id: "67de7e52c8f9f004aed2ff39",
            created_at: "2025-03-22",
            total_price: 27.9,
          },
          {
            _id: "67de84570273469bc09ee4ae",
            created_at: "2025-03-22",
            total_price: 27.9,
          },
          {
            _id: "67de84580273469bc09ee4b2",
            created_at: "2025-03-22",
            total_price: 27.9,
          },
          {
            _id: "67de84580273469bc09ee4b6",
            created_at: "2025-03-22",
            total_price: 27.9,
          },
          {
            _id: "67de84850273469bc09ee4b9",
            created_at: "2025-03-22",
            total_price: 27.9,
          },
          {
            _id: "67de848f0273469bc09ee4bc",
            created_at: "2025-03-22",
            total_price: 27.9,
          },
        ];

       
        setTimeout(() => {
          setOrders(mockData);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Xatolik:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div>Yuklanmoqda...</div>;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[18px] font-bold text-[#3D3D3D]">
          Track your Orders
        </h2>
      </div>

     
      <div className="grid grid-cols-4 gap-4 border-b border-[#E5E5E5] pb-3 text-[#3D3D3D] font-medium text-[15px]">
        <div className="col-span-1">Order Number</div>
        <div className="col-span-1">Date</div>
        <div className="col-span-1">Total</div>
        <div className="col-span-1 text-right md:text-left">More</div>
      </div>

 
      <div className="flex flex-col gap-3 mt-3">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order._id}
              className="grid grid-cols-4 gap-4 bg-[#FBFBFB] py-3 px-2 items-center text-[14px] text-[#727272] rounded-[3px]"
            >
              
              <div className="col-span-1 truncate pr-2 font-normal text-[#3D3D3D]">
                {order._id}
              </div>

              
              <div className="col-span-1 font-normal text-[#3D3D3D]">
                {order.created_at.split("T")[0]}{" "}
                
              </div>

              
              <div className="col-span-1 font-medium text-nav">
                $ {order.total_price.toFixed(2)}
              </div>

              
              <div className="col-span-1 text-right md:text-left">
                <button
                  onClick={() =>
                    alert(`Order ID: ${order._id} haqida batafsil...`)
                  }
                  className="text-nav hover:underline cursor-pointer"
                >
                  More info
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center py-5 text-gray-500">
            Sizda hali buyurtmalar yo'q.
          </p>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;

