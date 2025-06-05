import CTAButton from "../components/CTAButton";

const LandingScreen = () => {

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[375px] min-h-screen bg-white flex flex-col justify-end px-6 py-10">
        <h1 className="text-[28px] font-bold text-gray-900">Welcome to PopX</h1>
        <p className=" text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <CTAButton children={"Create Account"} linkto={"/signup"} active={true}/>
        <CTAButton children={"Already Registered? Login"} linkto={"/login"} active={false}/>
      </div>
    </div>
  );
};

export default LandingScreen;