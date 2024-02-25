import React from "react";
import CardCarousel from "./CardCarousel";

function SecondRow() {

    return (
      <>
        <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-[#59B4C3] p-8 py-16">
            <div className="max-w-xl mx-auto px-4 py-8 text-center relative">
            <h2 className=" text-2xl text-white font-bold mb-4">With you at every step of your study abroad journey</h2>
            <p className=" text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum temporibus, 
                quidem eius nisi eveniet soluta aperiam magnam officiis, 
                ipsa eos magni consequuntur perspiciatis error accusamus nulla fugiat tempore aliquam.</p>
            <button className="mt-6 px-4 py-2 text-[#ffffff] bg-[#74E291] border-2 border-[#ffffff] 
            rounded hover:bg-transparent hover:text-[white] focus:outline-[#ffffff] focus:bg-[#ffffff]">Book a Consultation</button>
            </div>
        </div>
        <div className="md:w-1/2 bg-[#74E291] p-8 py-16">
            <CardCarousel />
        </div>
        </div>
      </>
    )
}

export default SecondRow;