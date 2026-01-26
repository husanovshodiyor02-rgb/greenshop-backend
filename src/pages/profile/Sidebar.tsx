
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";



interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: "account", label: "Account Details", icon: "ri-user-line" },
    { id: "my-products", label: "My Products", icon: "ri-shopping-bag-3-line" },
    { id: "address", label: "Address", icon: "ri-map-pin-line" },
    { id: "wishlist", label: "Wishlist", icon: "ri-heart-line" },
    { id: "track-order", label: "Track Order", icon: "ri-truck-line" },
  ];

  const handleLogout = () => {
    const confirm = window.confirm("Chiqmoqchimisiz?");
    if (confirm) {
      localStorage.removeItem("token");
      navigate(""); 
    }
  };

  return (
    <div className="bg-[#FBFBFB] rounded-md shadow-sm h-fit">
      <h2 className="text-[18px] font-bold p-4 pl-5 text-[#3D3D3D] border-b border-[#46A358]/20">
        My Account
      </h2>

      <div className="flex flex-col py-2">
        {menuItems.map((item) => (
          <div
            key={item.id}
           
            onClick={() => setActiveTab(item.id)}
            className={`cursor-pointer flex items-center gap-3 px-5 py-3 text-[15px] transition-all duration-300 border-l-[5px] ${
              activeTab === item.id
                ? "border-[#46A358] text-[#46A358] bg-white font-bold shadow-sm" 
                : "border-transparent text-[#727272] hover:text-[#46A358] hover:bg-white" 
            }`}
          >
            <i className={`${item.icon} text-lg`}></i>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-[#46A358]/20 mt-2">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-5 py-4 text-[15px] text-[#727272] hover:text-[#FF0000] hover:bg-white border-l-[5px] border-transparent transition-all font-medium"
        >
          <LogoutOutlined className="text-lg" />
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
