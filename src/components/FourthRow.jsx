import React from "react"
import Form from "./Form"

function FourthRow() {

    return (
      <>
      <div className="flex flex-col md:flex-row justify-center pt-12">
        <div className="md:w-1/2 py-4 px-6 flex items-center">
            <div className="max-w-xl">
            <h1 className=" text-2xl text-gray-600 font-bold pb-4">Better futures,<br />begin with US</h1>
            <p className=" text-gray-600 pb-2">We're here to support you on your study abroad journey and help you create an extraordinary future for yourself. Whether you're dreaming of pursuing higher education, gaining new experiences, or expanding your horizons, our dedicated team is committed to guiding you every step of the way.</p>
            <p className=" text-gray-600 pb-2">At our institution, we believe in the transformative power of education and the endless possibilities it brings. With our expertise and resources, we aim to empower you to reach your full potential and achieve your academic and career goals.</p>
            <p className=" text-gray-600 pb-2">Fill the form below to schedule a free consultation session. Our experienced counselors are dedicated to providing personalized guidance tailored to your aspirations and needs. Whether you have questions about study programs, application processes, or life abroad, we're here to assist you.</p>
            <p className=" text-gray-600">Take the first step towards a brighter future. Let us help you turn your dreams into reality.</p>
            </div>
        </div>
        <div className="md:w-1/2 bg-white p-4">
          <h2 className=" text-xl text-center text-gray-600 font-bold">Book your FREE consultation with Certified Counsellors</h2>
            <Form />
        </div>
        </div>

      </>
    )
  }
  
  export default FourthRow