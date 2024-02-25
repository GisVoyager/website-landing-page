import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  "/images/partners/apple-pay.png",
  "/images/partners/dhl.png",
  "/images/partners/ebay.png",
  "/images/partners/imdb.png",
  "/images/partners/apple-pay.png",
  "/images/partners/dhl.png",
  "/images/partners/ebay.png",
];

const ReactMarquee = () => (
  <div>
    <h2 className="text-2xl text-gray-500 text-center font-bold py-4">Our industry partnerships</h2>
    <p className="text-gray-600 text-center pb-4">Our affiliations with industry leaders, accreditations, and partnerships speak volumes about our credibility and standing.</p>
    <hr />
    <Marquee pauseOnClick={true}>
      {logos.map((logo, index) => (
        <img key={index} src={logo} alt={`Logo ${index + 1}`} className="h-32 w-auto py-2 px-8" />
      ))}
    </Marquee>
    <hr />
  </div>
);

export default ReactMarquee;
