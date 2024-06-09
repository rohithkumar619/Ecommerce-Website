import React from "react";
import css from "../Footer/Footer.module.css";
import Logo from "../../assets/logo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineInbox } from "react-icons/hi";
import { VscSignIn } from "react-icons/vsc";
import { BsPeople } from "react-icons/bs";
import { BsTags } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={css.foot}>
      <div className={css.footer}>
        <div className={css.footername}>
          <img className={css.logo} src={Logo} alt="" />
          <span>Rohith Ecom</span>
        </div>
        <div className={css.elements}>
          <span>Contact Us</span>

          <div className={css.inelement}>
            <HiOutlineLocationMarker className={css.icon} />
            <span>kanha icon/Tower-D/302/Vadodara</span>
          </div>

          <div className={css.inelement}>
            <MdOutlineLocalPhone className={css.icon} />
            <span>+91 9398202266</span>
          </div>
          <div className={css.inelement}>
            <HiOutlineInbox className={css.icon} />
            <span>brohith619@gmail.com</span>
          </div>
        </div>
        <div className={css.elements}>
          <span>Account</span>
          <div className={css.inelement}>
            <VscSignIn className={css.icon} />
            <span>Sign in</span>
          </div>
        </div>
        <div className={css.elements}>
          <span>Company</span>
          <div className={css.inelement}>
            <BsPeople className={css.icon} />
            <span>About Us</span>
          </div>
        </div>
        <div className={css.elements}>
          <span>Resources</span>
          <div className={css.inelement}>
            <BsTags className={css.icon} />
            <span>Safety Privacy & Terms</span>
          </div>
        </div>
      </div>
      <div className={css.copyright}>
        <span>Copyright ©2024 by Rohith Ecom, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
