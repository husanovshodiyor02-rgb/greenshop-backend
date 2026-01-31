
import Img3 from "../../assets/img/img3.png";
import Img4 from "../../assets/img/img4.png";
import Img5 from "../../assets/img/img5.png";
const Garden = () => {
  return (
    <div className="container1">
      <div className="flex items-center justify-between flex-wrap my-15">
        <div>
          <img src={Img3} alt="" />
          <h2 className="font-bold text-[17px] leading-[94%] text-[#3d3d3d] py-2">
            Garden Care
          </h2>
          <p className="font-normal text-sm leading-[157%] text-[#727272]">
            We are an online plant shop <br /> offering a wide range of cheap{" "}
            <br /> and trendy plants.
          </p>
        </div>
        <div>
          <img src={Img4} alt="" />
          <h2 className="font-bold text-[17px] leading-[94%] text-[#3d3d3d] py-2">
            Plant Renovation
          </h2>
          <p className="font-normal text-sm leading-[157%] text-[#727272]">
            We are an online plant shop <br /> offering a wide range of cheap{" "}
            <br /> and trendy plants.
          </p>
        </div>
        <div>
          <img src={Img5} alt="" />
          <h2 className="font-bold text-[17px] leading-[94%] text-[#3d3d3d] py-2">
            Watering Graden
          </h2>
          <p className="font-normal text-sm leading-[157%] text-[#727272]">
            We are an online plant shop <br /> offering a wide range of cheap{" "}
            <br /> and trendy plants.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-[17px] leading-[94%] text-[#3d3d3d] py-2">
            Would you like to join newsletters?
          </h2>
          <div className="sm:w-88.5 w-50 h-10 rounded-md shadow-[0_0_20px_0_rgba(0,0,0,0.06)] bg-white flex items-center justify-between my-3">
            <input
              type="text"
              placeholder="enter your email address..."
              className="pl-3 border-none outline-none"
            />
            <button className="sm:w-21.25 w-18 h-10 rounded-[0_6px_6px_0] bg-[#46a358] font-bold sm:text-lg text-sm leading-[89%] text-white px-1.5">
              Join
            </button>
          </div>
          <p className="font-normal text-sm leading-[157%] text-[#727272]">
            We usually post offers and challenges in newsletter. We’re <br />{" "}
            your online houseplant destination. We offer a wide range <br /> of
            houseplants and accessories shipped directly from our <br />{" "}
            (green)house to yours!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Garden