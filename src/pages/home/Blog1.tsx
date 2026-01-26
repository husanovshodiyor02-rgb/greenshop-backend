import Bl1 from "../../assets/img/bl1.png";
import Bl2 from "../../assets/img/bl2.png";
import Bl3 from "../../assets/img/bl3.png";
import Bl4 from "../../assets/img/bl4.png";
import Img3 from "../../assets/img/img3.png";
import Img4 from "../../assets/img/img4.png";
import Img5 from "../../assets/img/img5.png";

const Blog1 = () => {
  const blogs = [
    {
      img: Bl1,
      date: "September 12",
      time: "Read in 6 minutes",
      title: "Cactus & Succulent Care Tips",
      text: "Cacti are succulents are easy care plants for any home or patio.",
    },
    {
      img: Bl2,
      date: "September 13",
      time: "Read in 2 minutes",
      title: "Top 10 Succulents for Your Home",
      text: "Best in hanging baskets. Prefers medium to high light.",
    },
    {
      img: Bl3,
      date: "September 15",
      time: "Read in 3 minutes",
      title: "Cacti & Succulent Care Tips",
      text: "Cacti and succulents thrive in containers and because most are..",
    },
    {
      img: Bl4,
      date: "September 15",
      time: "Read in 2 minutes",
      title: "Best Houseplants Room By Room",
      text: "The benefits of houseplants are endless. In addition to..",
    },
  ];

  return (
    <section className="container1">
      <h2 className="text-center text-3xl font-semibold text-[#3d3d3d] pt-16">
        Our Blog Posts
      </h2>
      <p className="font-normal text-sm leading-[171%] text-center text-[#727272] mt-2">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm hover:shadow-md transition rounded-md overflow-hidden"
          >
            <img
              src={item.img}
              alt="blog-img"
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <p className="text-[#46a358] text-sm font-medium">
                {item.date} <span className="text-gray-400">| {item.time}</span>
              </p>

              <h3 className="text-lg font-semibold text-[#3d3d3d] mt-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">{item.text}</p>

              <button className="mt-3 text-[#46a358] font-medium flex items-center gap-1">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

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
          <div className="sm:w-88.5 w-65 h-10 rounded-md shadow-[0_0_20px_0_rgba(0,0,0,0.06)] bg-white flex items-center justify-between my-3">
            <input
              type="text"
              placeholder="enter your email address..."
              className="pl-3"
            />
            <button className="w-21.25 h-10 rounded-[0_6px_6px_0] bg-[#46a358] font-bold text-lg leading-[89%] text-white px-1.5">
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
    </section>
  );
};

export default Blog1;
