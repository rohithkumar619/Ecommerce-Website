import React from "react";
import css from "../components/Hero.module.css";
import HeroImg from "../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className={css.container}>
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collections</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man childern
            rejoiced.
          </span>
        </div>
      </div>

      <div className={css.wrapper}>
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className={css.bluecircle}
        ></motion.div>
        <motion.img
          initial={{ top: "2rem" }}
          whileInView={{ top: "0rem" }}
          transition={transition}
          className={css.heroimg}
          src={HeroImg}
          alt=""
        />
        <motion.div
          initial={{ right: "-2rem" }}
          whileInView={{ right: "0rem" }}
          transition={transition}
          className={css.cart2}
        >
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <BsArrowRight />
          </div>
        </motion.div>
      </div>
      <div className={css.h_sides1}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
