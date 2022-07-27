import Image from "next/image";
import React from "react";
import css from "../styles/Service.module.css";
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'

const Services = () => {
  return (
    <>
      <div className={css.heading}>
        <span>What We Serve</span>
        <span>Your Favourite Food</span>
        <span>Delievery Partner</span>
      </div>

      {/* features */}

      <div className={css.services}>

        
        <div className={css.feature}>
          <div className={css.imagewrapper}>
            <Image src={s1} alt="" />
          </div>
          <span>Easy to Order</span>
          <span>You only need a few steps in food ordering</span>
        </div>


        <div className={css.feature}>
          <div className={css.imagewrapper}>
            <Image src={s2} alt="" />
          </div>
          <span>Easy to Order</span>
          <span>Delievery that is always on time even faster</span>
        </div>

        
        <div className={css.feature}>
          <div className={css.imagewrapper}>
            <Image src={s3} alt="" />
          </div>
          <span>Easy to Order</span>
          <span>Not only fast, but Quality is also number one </span>
        </div>


      </div>
    </>
  );
};

export default Services;
