// import bg_vedio from "../assets/Video/banner_bg_vedio.mp4";

// const Banner = () => {
//   return (
//     <div className="relative">
//       <video
//         src={bg_vedio}
//         autoPlay
//         playsInline
//         loop
//         muted
//         preload="auto"
//         className="w-full   object-cover z-0"
//       />
//       <div className="absolute top-0 z-10 p-12 flex flex-col    justify-center  h-full gap-5">
//         <h1 className="text-white  w-full max-w-5xl font-semibold text-3xl md:text-4xl  ">
//           Unleashing the Power of <span className="text-[#2A8939]">AI & Data Science</span> – Transforming
//           Insights into Innovation
//         </h1>
//         <p className="text-[#DBDBDB]">
//           Make smart, revenue-driving decisions with our data analytics AI
//           platform
//         </p>
//         <div className="gap-3 flex">
//           <button className="rounded-full text-white px-6 py-1 bg-[#212B2F]">
//             Get Started
//           </button>
//           <button className="rounded-full text-white px-6 py-1 bg-[#298939]">
//             Case Studies
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import bg_vedio from "../assets/Video/banner_bg_vedio.mp4";

const Banner = () => {
  return (
    <div className="relative  h-[80vh]  ">
      <video
        src={bg_vedio}
        autoPlay
        playsInline
        loop
        muted
        preload="auto"
        className="absolute top-0  w-full h-full object-cover z-0"
      />
      <div className="relative z-10 w-full h-full  flex flex-col  items-start justify-center px-4  md:px-12 gap-8">
        <h1 className="text-white max-w-5xl font-semibold text-3xl md:text-4xl  leading-tight md:tracking-normal tracking-wide">
          Unleashing the Power of{" "}
          <span className="text-[#2A8939]">AI & Data Science</span> –
          Transforming Insights into Innovation
        </h1>
        <p className="text-[#DBDBDB] text-base font-medium tracking-wide md:text-lg">
          Make smart, revenue-driving decisions with our data analytics AI
          platform
        </p>
        <div className="flex gap-3">
          <button className="rounded-full text-white px-6 py-2 bg-[#212B2F] hover:bg-[#1a1f22] transition">
            Get Started
          </button>
          <button className="rounded-full text-white px-6 py-2 bg-[#298939] hover:bg-[#20722f] transition">
            Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
