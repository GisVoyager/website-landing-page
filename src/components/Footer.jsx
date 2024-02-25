import React from "react";

function Footer() {
  // Social media icons data
  const socialMediaIcons = [
    { name: "Facebook", src: "/images/social/facebook.png" },
    { name: "WhatsApp", src: "/images/social/whatsapp.png" },
    { name: "Twitter", src: "/images/social/twitter.png" },
    { name: "Instagram", src: "/images/social/instagram.png" },
    { name: "YouTube", src: "/images/social/youtube.png" },
  ];

  // Navigation links data
  const navigationLinks = [
    { text: "Home", url: "#" },
    { text: "About", url: "#" },
    { text: "Services", url: "#" },
    { text: "Contact", url: "#" },
  ];

  // Services links data
  const servicesLinks = [
    { text: "Visa Application", url: "#" },
    { text: "Scholarship Guidance", url: "#" },
    { text: "University Admissions", url: "#" },
    { text: "Educational Counselling", url: "#" },
  ];

  return (
    <footer className="bg-[#59B4C3] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          {/* First column */}
          <div>
            <div className="flex flex-col items-center mb-4">
              <img src="/images/partners/imdb.png" alt="Company Logo" className="h-16 w-auto mr-2" />
              <h2 className="text-3xl font-bold">Company Name</h2>
            </div>
            <div className="flex items-center justify-center">
              {socialMediaIcons.map((icon, index) => (
                <a key={index} href="#" className="mx-2">
                  <img src={icon.src} alt={icon.name} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Second column */}
          <div>
            <h2 className="inline text-xl font-semibold mb-4 border-b-2 border-[#74E291]">Navigation</h2>
            <ul className="pt-4">
              {navigationLinks.map((link, index) => (
                <li key={index} className="pb-4"><a href={link.url} className="text-gray-100 hover:text-gray-200">{link.text}</a></li>
              ))}
            </ul>
          </div>
          
          {/* Third column */}
          <div>
            <h2 className="inline text-xl font-semibold mb-4 border-b-2 border-[#74E291]">Services</h2>
            <ul className="pt-4">
              {servicesLinks.map((link, index) => (
                <li key={index} className="pb-4"><a href={link.url} className="hover:text-gray-200">{link.text}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <div className="container text-center mx-auto pt-8">
          <p className="text-sm">
            Copyright © 2024 My Website.
            <span className="inline-block mx-2">|</span>
            <a href="#" className="text-gray-100 hover:text-gray-200">Useful Links</a>
            <span className="inline-block mx-2">|</span>
            <a href="#" className="text-gray-100 hover:text-gray-200">Glossary</a>
            <span className="inline-block mx-2">|</span>
            <a href="#" className="text-gray-100 hover:text-gray-200">Terms of Use</a>
            <span className="inline-block mx-2">|</span>
            <a href="#" className="text-gray-100 hover:text-gray-200">Privacy Policy</a>
          </p>
        </div>
        <div className="text-center mt-4">
          Design with <span className="text-red-600">❤️</span> by <a href="#" className="">Hussaini Ahmed</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
