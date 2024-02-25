import React from "react";

    const clientReviews = [
      {
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum mattis ante, vitae luctus quam dignissim nec.",
        clientName: "John Doe",
        clientImage: "/images/user.png",
      },
      {
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum mattis ante, vitae luctus quam dignissim nec.",
        clientName: "Jane Smith",
        clientImage: "/images/user.png",
      },
      {
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum mattis ante, vitae luctus quam dignissim nec.",
        clientName: "Alice Johnson",
        clientImage: "/images/user.png",
      },
    ];

function ThirdRow() {

    return (
      <div className="bg-white py-16">
      <h1 className=" text-2xl text-gray-600 text-center font-bold py-4">Putting you first in your study abroad journey</h1>
        <p className=" text-gray-600 text-center pb-4">We are thrilled to have been a part of 60,000+ successful student stories. Hear a few of their experiences</p>
      <div className="flex flex-wrap pb-5">
      {clientReviews.map((review, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="bg-[#ffffff] text-gray-600 p-6 rounded-lg shadow-lg text-center">
          <img src="/images/quote.png" alt="Quotation Icon" className="h-6 w-6 text-gray-600 mb-4 mx-auto" />
            <p className=" text-gray-600 text-lg mb-4">{review.review}</p>
            <div className="flex items-center justify-center mb-4">
              <img src={review.clientImage} alt={review.clientName} className="h-12 w-12 rounded-full mr-2" />
              <p className=" text-gray-600">{review.clientName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
    )
  }
  
  export default ThirdRow