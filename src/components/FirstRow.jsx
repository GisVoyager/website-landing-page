import React from "react";
import { TypeAnimation } from 'react-type-animation';

function FirstRow() {

    return (
      <>
        <div 
          className="max-w-screen bg-cover bg-center relative py-24"
          style={{
            backgroundImage: 'url("/images/university-colleagues-talking-library.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div> {/* Add semi-transparent black overlay with backdrop blur */}
          <div className="max-w-2xl mx-auto px-4 py-16 text-center relative">
            <h1 className="text-5xl font-bold text-white">Your study abroad journey,</h1> 
            <TypeAnimation sequence=
            {[
              // Same substring at the start will only be typed out once, initially
              'Simplified',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Made easy',
              1000,
            ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', 
              display: 'inline-block', // Assuming 'font-oswald' corresponds to the 'Oswald' font family
              fontSize: '3rem', // Equivalent to 'text-5xl'
              fontWeight: 'bold',
              fontFamily:"oswald", // Equivalent to 'font-bold'
              color: '#74E291', }}
              repeat={Infinity}
            />
            
            
            
            <p className="mt-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, justo a efficitur ultrices, metus velit ullamcorper turpis, auctor posuere lacus arcu id lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam at semper risus. Aliquam tincidunt justo in eros vehicula, sed sollicitudin quam tristique.</p>
            <button className="my-6  px-4 py-2 bg-transparent text-white rounded 
            hover:bg-[#74E291] border-2 border-[#74E291] 
            hover:border-[#74E291] focus:outline-[#74E291] focus:bg-[#74E291]">Register for FREE</button>
          </div>    
        </div>

      </>
    )
}

export default FirstRow;
