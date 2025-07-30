import React, { useEffect } from "react";
import service1 from "../assets/ourServices/service1.png";
import service2 from "../assets/ourServices/service2.png";
import service3 from "../assets/ourServices/service3.png";
import service4 from "../assets/ourServices/service4.png";
import service5 from "../assets/ourServices/service5.jpg";
import service6 from "../assets/ourServices/service6.png";
import { ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
const OurServices = () => {
  const ourServicesData = [
    {
      title: "Data Analytics",
      content:
        "Unleash the potential of your business with BitTwoByte Technologies Pvt. Ltd.’s innovative data engineering solutions.",
      img: service1,
    },
    {
      title: "Data Governance",
      content:
        "Unleash the potential of your business with BitTwoByte Technologies Pvt. Ltd.’s innovative data engineering solutions.",
      img: service2,
    },
    {
      title: "Data Science",
      content:
        "Our comprehensive suite of cloud services enables seamless scalability, enhanced collaboration, and improved efficiency.",
      img: service3,
    },
    {
      title: "Data Engineering",
      content:
        "Our data analytics consulting company helps you devise the right governance strategies, frameworks, and policies for improving data privacy and increasing regulatory compliance.",
      img: service4,
    },
    {
      title: "Cloud Solutions",
      content:
        "Designing scalable big data solutions while ensuring clean and accurate data across enterprise systems is our specialty as one of the leading data and analytics consulting firms.",
      img: service5,
    },
    {
      title: "SCM",
      content:
        "Data science for optimizing logistics, inventory management, and demand forecasting helps to improve supply chain management and ensure logistics are firing on all cylinders.",
      img: service6,
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className=" p-12">
      <div className="p-3">
        <h1 className="text-2xl text-[#012354]">Our Innovative Services</h1>
        <h1 className="text-2xl text-[#212529]">
          We provide many types of{" "}
          <span className="text-[#298939]">agile businesses.</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-5  gap-6 ">
        {ourServicesData.map((data, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div
              className="bg-white rounded-xl transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between p-3 ">
                <h1 className="text-black font-semibold text-2xl">
                  {data?.title}
                </h1>
                <button className="rounded-full  bg-[#ccc] p-3 hover:bg-[#298939] text-[#298939] hover:text-white ">
                  <ArrowUpRight className="" />
                </button>
              </div>
              <p className="tracking-wide p-2 text-[#959595]">
                {" "}
                {data.content}
              </p>
              <div>
                <img
                  src={data?.img}
                  className="w-full object-cover p-3 rounded-lg h-52"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
