import Button from "./Button";

const FreeCard = () => {
  return (
    <div className=" mt-3 mb-4 lg:p-10 p-4 ">
      <div className="grid lg:grid-cols-2 place-items-center lg:p-16 p-3 space-y-6   bg-white rounded-3xl  border-b-4 border-[#2A8939]">
        <div className="space-y-4">
          <h1 className="text-[#2A8939] text-3xl">
            Get Daily Inspirations for FREE
          </h1>
          <p className="text-[#4B3B54] text-xl">
            Subscribe and Get Exclusive Tips for Positive Changes Straight to
            your inbox for free
          </p>
        </div>
        <div className="relative max-w-lg w-full">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full lg:px-4 px-2 lg:py-4 py-2 pr-36 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C0A0A0] bg-gray-100"
          />
          <Button
            cls="absolute top-1/2 -translate-y-1/2 right-0 bg-[#2A8939] text-white lg:py-4 py-2 lg:px-6 px-1 rounded-r-lg"
            content=" Subscribe Now"
          />
        </div>
      </div>
    </div>
  );
};

export default FreeCard;
