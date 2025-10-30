import React from "react";
import { FiLinkedin,FiFacebook,FiTwitter,FiYoutube } from "react-icons/fi";
import { TbBrandGoogle } from "react-icons/tb";

const SocialMediaIcon = ({ provider, size = 45, onClick }) => {
  const icons = {
    linkedin: <FiLinkedin  size={size * 1.1} color="#000" />,
    facebook:<FiFacebook size={size * 1.1} color="#000" />,
    twitter:<FiTwitter size={size * 1.1} color="#000" />,
    youtube:<FiYoutube size={size * 1.1} color="#000"/>,
    google:<TbBrandGoogle size={size * 1.1} color="#000" />
  };

  const iconStyles = {
    width: size,
    height: size,
    borderRadius: "50%",
    border: "1px solid #000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    cursor: "pointer",
  };

  return (
    <button style={iconStyles} onClick={onClick}>
      {icons[provider?.toLowerCase()] || "?"}
    </button>
  );
};

export default SocialMediaIcon;
