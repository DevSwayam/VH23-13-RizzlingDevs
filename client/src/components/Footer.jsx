import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="md:p-8 md:px-48 w-full p-7 bg-darkGray text-white  ">
      {/* For Desktops */}

      <div className="hidden my-20 md:flex gap-24">
        <div className=" w-[30%] flex flex-col gap-5">
          <p className=" text-xl font-semibold">Jobhunt</p>
          <p className=" text-lighttextGray">
            It is a long established fact that a reader will be of a page reader
            will be of at its layout.
          </p>{" "}
          <SocialIcons />
        </div>

        <div className=" flex flex-col gap-5">
          <p>Company</p>
          <ul className=" text-lighttextGray  text-sm flex flex-col gap-3  ">
          
           <Link to='/user_dashboard'> <li>Courses </li> </Link> 
           <Link to='/certificate/create'> <li>MintCertificate </li> </Link> 
           <Link to='/certificates'> <li>ViewCertificate </li> </Link> 
           <Link to='/image_hasher'><li>ImageHasher </li></Link> 
           
          </ul>
        </div>

        <div className=" flex flex-col gap-5">
          <p>For Jobs</p>
          <ul className=" text-lighttextGray text-sm flex flex-col gap-3  ">
            <li>Browser Jobs</li>
            <li>Browser Categories </li>
            <Link  to='/login'>
              <li>Admin Login</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* For Mobiles */}
      <div className="md:hidden bg-darkGray">
        <div className="flex flex-col justify-center gap-4">
          <div>
            <p className="text-lightCard text-xl">Jobshunt</p>
            <p className="text-footerSubtitle font-extralight text-sm">
              Gateway to web3 jobs.
            </p>
          </div>
          <SocialIcons />
          <div className=" flex gap-10 mt-7">
            <div className=" flex flex-col gap-5">
              <p>Company</p>
              <ul className=" text-lighttextGray text-sm flex flex-col gap-3  ">
            <Link to='/user_dashboard'> <li>Courses </li> </Link> 
            <Link to='/offlineCertificate'> <li>Check Your Certificate </li> </Link> 
            <Link to='/certificate/view/:id'> <li>ViewCertificate </li> </Link> 
            <Link to='/image_hasher'><li>ImageHasher </li></Link> 
              </ul>
            </div>

            <div className=" flex flex-col gap-5">
              <p>For Jobs</p>
              <ul className=" text-lighttextGray text-sm flex flex-col gap-3  ">
                <li>Browser Jobs</li>
                <li>Browser Categories </li>
                <li>Admin Login</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="mt-9 text-[12px] flex items-center justify-between gap-4 text-lightCard">
          <div>
            <p>Copyright © 2023 Jobshunt.</p> <p>All rights reserved.</p>
          </div>
          <div className="flex gap-2">
            <a href="https://twitter.com/web3jobshunt">
              <FaXTwitter alt="twitter" className="w-5" />
            </a>
            <a href="https://web3jobshunt.medium.com/">
              <BiLogoMedium alt="medium" className="w-5" />
            </a>
            <a href="https://www.linkedin.com/company/web3jobhunt/">
              <BiLogoLinkedin alt="linkedin_icon" className="w-5" />
            </a>{" "}
            <a href="https://t.me/Web3jobshunt">
              <BiLogoTelegram alt="telegram" className="w-5" />
            </a>{" "}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;