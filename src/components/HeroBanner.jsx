import HeroBannerImg from "../assets/banner4.jpg";

const HeroBanner = () => {
  return (
    <div className=" lg:mt-[180px] sm:mt-[70px] mt-[50px] sm:ml-[50px] ml-[30px]">
      <h3 className="font-bold  text-primary text-[24px]">Fitness Club</h3>
      <p className=" lg:text-[44px] sm:text-[38px] font-[700]">
        Sweat, Smile <br /> and Repeat
      </p>
      <p className=" text-[22px] leading-[65px] mb-5">
        Check out the most effective exercises!
      </p>
      <button
        className=" text-[#fff] transition-all px-6 py-4 rounded-[10px] 
      text-[18px] hover:bg-[#8f0303] bg-primary"
      >
        <a href="#exercises">Explore Exercises</a>
      </button>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
      <h4 className="lg:block hidden  font-[600] md:text-[200px] text-[#FF2625] opacity-10">
        Exercises
      </h4>
    </div>
  );
};

export default HeroBanner;
