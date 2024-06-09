import React from "react";
import css from "./Testimonials.module.css";
import Hero from "../../assets/testimonialHero.png";
const Testinomials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.testimonial}>
        <div className={css.left}>
          <span>TOP RATED</span>
          <span>
            SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCICE JOY MAN CHILDREN
            REJOICED.
          </span>
        </div>
        <div className={css.wrapper}>
          <img src={Hero} alt="" width={400} />
        </div>
        <div className={css.right}>
          <span>100K</span>
          <span>HAPPY CUSTOMERS WITH US</span>
        </div>
      </div>
      <div>Review</div>
    </div>
  );
};

export default Testinomials;
