import React, { useState } from "react";

function WhatsappBtn() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-0 right-0 p-4 transition-all duration-300 transform hover:scale-110">
    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
      <img src="/images/social/whatsapp1.png" alt="WhatsApp Icon" className="w-12 h-12" />
    </a>
  </div>
  );
}

export default WhatsappBtn;
