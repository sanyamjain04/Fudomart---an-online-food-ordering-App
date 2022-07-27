import React from "react";
import css from "../styles/Menu.module.css";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";

const Menu = ({ pizzas }) => {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>Our Menu</span>
        <span>Menu that Always</span>
        <span>Make you fall in Love with Food</span>
      </div>

      <div className={css.menu}>
        {/* pizzas */}
        {pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <div className={css.pizza} key={id}>
                <Link href={`./pizza/${pizza.slug.current}`}>

              <div className={css.imageWrapper}>
                <Image
                  loader={() => src}
                  src={src}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  />
              </div>
                  </Link>

              <span>{pizza.name}</span>
              <span><span style={{ color: "var(--themeRed)" }}>$</span> {pizza.price[1]}</span>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Menu;
