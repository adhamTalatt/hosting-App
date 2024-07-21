import React from "react";
import Image from "next/image";

import { TiTick } from "react-icons/ti";

import CloudImage from "../../../public/cloud-hosting-removebg-preview.png";

import style from "./hero.module.css";
export default function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.heroLeft}>
        <h1 className={style.title}>Cloud Hosting </h1>
        <p className={style.desc}>
          The best web hostoing solution for your online success
        </p>
        <div className={style.services}>
          <div className={style.serviceItem}>
            <TiTick /> Easy To Use Control Panel .
          </div>
          <div className={style.serviceItem}>
            <TiTick /> Secure Hosting .
          </div>
          <div className={style.serviceItem}>
            <TiTick /> Website MainTenace .
          </div>
        </div>
      </div>
      <div>
        <Image src={CloudImage} alt="" width={500} height={500} priority />
      </div>
    </div>
  );
}
