import React from "react";
import { BiLogoMedium, BiLogoLinkedin, BiLogoTelegram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
const SocialIcons = () => {
  return (
    <div className="flex gap-3">
      <a href="https://twitter.com/DevSwayam">
        <div className=" rounded-full border p-2 hover:bg-purpleColor hover:text-lightBlue">
          <FaXTwitter alt="twitter" className=" cursor-pointer text-sm " />
        </div>
      </a>
      
      <a href="https://www.linkedin.com/in/swayam-karle/">
        <div className=" rounded-full border p-2 hover:bg-purpleColor hover:text-lightBlue">
          <BiLogoLinkedin
            alt="linkedin_icon"
            className=" cursor-pointer text-sm"
          />
        </div>
      </a>{" "}
    </div>
  );
};

export default SocialIcons;