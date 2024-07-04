import React from "react";
import logo1 from "../../assets/logo1.jpg";
import logo3 from "../../assets/logo3.jpg";
import logo6 from "../../assets/logo6.jpg";
const Value = () => {
  return (
    <div>
      <div className="className='mb-[4rem] mt-[6rem]">
        <h1 className="text-text-Color text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px block">
          The value that holds us true and to account
        </h1>
        <div className="grid gap-[10rem] grid-cols-3 items-center">
          <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={logo1} alt="" className="w-[70%]" />
              </div>
              <span className="font-semibold text-textColor text-[18px]">
                Simplicity
              </span>
            </div>
            <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
              Things benif made beautiful simple are at heart of everything we
              do.
            </p>
          </div>
          <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center">
                <img src={logo3} alt="" className="w-[70%]" />
              </div>
              <span className="font-semibold text-textColor text-[18px]">
                Simplicity
              </span>
            </div>
            <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
              Things benif made beautiful simple are at heart of everything we
              do.
            </p>
          </div>
          <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center">
                <img src={logo6} alt="" className="w-[70%]" />
              </div>
              <span className="font-semibold text-textColor text-[18px]">
                Simplicity
              </span>
            </div>
            <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
              we wotk on the basis of creating trust which can be nurtured
              through authenticity and transparency
            </p>
          </div>
        </div>
      </div>
      <di className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded [10px]">
        <div>
          <h1 className="text-blueColor text-[30px] font-bold">
            Ready to switch a career
          </h1>
          <h2 className="text-textColor text-[25px] font-bold">
            Let's get started!
          </h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">
          Get Started
        </button>
      </di>
    </div>
  );
};

export default Value;
