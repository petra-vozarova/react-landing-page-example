import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";

import "./icons.styles.css";

const Icons = () => {
  return (
    <div className="icons-container">
      <div className="icon-circle-container">
        <FaFacebookF className="social-media-icons facebook" />
        <p className="icon-label">Lorem Ipsum</p>
      </div>
      <div className="icon-circle-container">
        <FaTwitter className="social-media-icons twitter" />
        <p className="icon-label">Lorem Ipsum</p>
      </div>
      <div className="icon-circle-container">
        <LuShare2 className="social-media-icons share" />
        <p className="icon-label">Lorem Ipsum</p>
      </div>
    </div>
  );
};

export default Icons;
