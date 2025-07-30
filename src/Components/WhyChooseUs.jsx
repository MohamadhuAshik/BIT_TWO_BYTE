import WhyChooseUsImg from "../assets/why_choose_us.jpg";
import groubimg from "../assets/groupimg.png";
import moneybagimg from "../assets/moneybag.png";
import bulbimg from "../assets/bulbimg.png";
import cursorimg from "../assets/cursorimg.png";
import aos from "aos";
import { useEffect } from "react";
const WhyChooseUs = () => {
  useEffect(() => {
    aos.init({ duration: 1000, once: false });
  }, []);
  const whychooseusData = [
    {
      img: groubimg,
      title: "Proven Expertise",
      content:
        "With over 5 years of experience and 30+ successful projects, our team has deep industry knowledge in delivering AI-driven, data-first solutions that drive measurable results.",
    },

    {
      img: bulbimg,
      title: "Tailored Solutions",
      content:
        "We don’t believe in one-size-fits-all. Every strategy and solution we offer is customized to meet your specific business challenges and growth objectives.",
    },

    {
      img: moneybagimg,
      title: "Cost Optimization",
      content:
        "Our data analytics and automation approaches are designed to reduce inefficiencies, lower operational costs, and maximize return on investment.",
    },

    {
      img: cursorimg,
      title: "Scalability & Flexibility",
      content:
        "Our services adapt as your business grows—whether you're scaling operations, expanding markets, or adopting new technologies, we evolve with you.",
    },
  ];

  return (
    <div className="flex flex-col bg-white lg:rounded-t-[150px] rounded-t-[100px] p-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-3 p-16 ">
        <div className="flex flex-col justify-start gap-4">
          <h1 className="font-semibold text-4xl text-[#012354]">
            Why Choose Us?
          </h1>
          <p className="text-base text-[#ADB3B4]">
            At BitTwoByte, we specialize in transforming raw data into
            actionable insights through AI-driven solutions, predictive
            analytics, and comprehensive data services. Our expertise spans data
            engineering, governance, and cloud computing, enabling businesses to
            make smarter decisions and drive growth. 30+ completed projects and
            50+ satisfied clients, we deliver scalable and innovative strategies
            tailored to your business needs.
          </p>
          <p className="text-[#ADB3B4]">
            Our client-centric approach ensures that every solution is aligned
            with your goals, fostering long-term success across industries like
            banking, healthcare, retail, media & entertainment, and
            manufacturing.
          </p>
        </div>
        <img
          src={WhyChooseUsImg}
          alt="pic"
          loading="lazy"
          className="object-cover w-10/12 rounded-md"
        />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-16">
        {whychooseusData.map((data, index) => {
         
        // let  aosType= index % 2 === 0 ? "fade-right" : "fade-left"
          return (
            <div
              key={index}
              // data-aos={aosType}
              className=" ring-2 ring-[#DEE2E6]  p-6 rounded-3xl space-y-6"
            >
              <img src={data.img} loading="lazy" alt="dataimg" />
              <p className="text-[#212529] text-xl">{data.title}</p>
              <p className="text-[#9595B0]">{data.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
