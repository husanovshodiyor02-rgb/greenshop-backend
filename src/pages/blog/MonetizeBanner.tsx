import { FC, useEffect, useState } from "react";
import { useReduxDispatch } from "../../hooks/useRedux";
import { setAuthorizationModalVisiblity } from "../../redux/modal-store";
import BannerImg from "../../assets/img/blog.png";

const MonetizeBanner: FC = () => {
  const dispatch = useReduxDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {

    const checkAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };


    window.addEventListener("auth-change", checkAuth);

  
    return () => window.removeEventListener("auth-change", checkAuth);
  }, []);


  if (isLoggedIn) return null;

  return (
    <div className="bg-[#FBFBFB] rounded-xl px-6 py-10 text-center mb-10 mx-auto max-w-[1440px]">
      <img src={BannerImg} className="mx-auto mb-6 max-w-[800px]" />

      <h1 className="text-[24px] md:text-[40px] font-black mb-4">
        Monetize with <span className="text-[#46A358]">GreenShop</span>
      </h1>

      <button
        onClick={() => dispatch(setAuthorizationModalVisiblity())}
        className="bg-[#46A358] text-white font-bold px-10 py-3 rounded-lg hover:bg-[#357a40]"
      >
        Join GreenShop
      </button>
    </div>
  );
};

export default MonetizeBanner;
