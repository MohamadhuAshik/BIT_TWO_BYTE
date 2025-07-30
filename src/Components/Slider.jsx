
import dataBricks from "../assets/collaborators_databricks.png";
import microsoft from "../assets/collaborators_microsoft.png";
import snowflake from "../assets/collaborators_snowflake.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComp = () => {
  const baseImages = [dataBricks, microsoft, snowflake];
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-gray-300 hover:bg-[#328D42] rounded-full p-2 shadow-md"
    >
      <ArrowLeft className="w-5 h-5 text-white" />
    </button>
  );
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-gray-300 hover:bg-[#328D42] rounded-full p-2 shadow-md"
    >
      <ArrowRight className="w-5 h-5 text-white" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8 bg-[#F3F2F6]">
      <h1 className="text-center text-2xl font-semibold mb-6">
        <span className="text-[#328D42]">Our trusted Collaborators</span> in
        progress & success
      </h1>
      <Slider {...settings}>
        {baseImages.map((src, index) => (
          <div key={index} className="flex items-center justify-center px-4">
            <div className="bg-white flex justify-center items-center rounded-xl shadow-sm">
              <img src={src} alt="partner" className="h-20 w-44 object-cover" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;
