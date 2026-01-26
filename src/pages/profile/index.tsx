


import { useState } from "react";
import Sidebar from "../../pages/profile/Sidebar";

import Account from "./acount";
import Address from "./addres";
import MyProducts from "./my-product";
import Wishlist from "./wishlist";
import TrackOrder from "./track-order";
import Header from "../../components/header/Header";


const Profile = () => {
  
  const [activeTab, setActiveTab] = useState("account");


  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return <Account />;
      case "address":
        return <Address />;
      case "my-products":
        return <MyProducts />;
      case "wishlist":
        return <Wishlist />;
      case "track-order":
        return <TrackOrder />;
      default:
        return <Account />;
    }
  };

  return (
    <div>
      <Header />
      <div className="w-[90%] m-auto px-5 py-10 flex flex-col md:flex-row gap-8">
   
        <div className="w-full md:w-[310px]">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="w-full md:flex-1 bg-white p-5 rounded-md shadow-sm">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;