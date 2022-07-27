import Image from "next/image";
import React from "react";
import css from "../styles/Header.module.css";
import Logo from "../assets/Logo.png";
import {UilShoppingBag} from '@iconscout/react-unicons'
import Link from "next/link";

const Header = () => {
  return (
    <div className={css.header}>
      {/* logo side */}
      <div className={css.logo}>
        <Link href='/' >
        <Image src={Logo} alt="logo-image" width={50} height={50} />
        </Link>
        <span>Fudomato</span>
      </div>

      {/* menu side */}
      <ul className={css.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Context</li>
      </ul>

      {/* right side */}
      <div className={css.rightSide}>
        <div className={css.cart}>
            <UilShoppingBag size={35} color="#2e2e2e" />
            <div className={css.badge}>1</div>
        </div>

      </div>
    </div>
  );
};

export default Header;
