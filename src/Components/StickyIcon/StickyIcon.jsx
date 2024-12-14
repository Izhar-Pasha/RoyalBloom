import React from "react";
import "./StickyIcon.scss";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const StickyIcon = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="sticky">
      <a
        href="https://wa.me/919620797359?text"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i>
          <FaWhatsapp />
        </i>
      </a>
    </div>
  );
};

export default StickyIcon;
