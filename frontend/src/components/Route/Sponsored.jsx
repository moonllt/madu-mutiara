import React from "react";
import styles from "../../styles/styles";
import logoMadu from "../../assets/images/logo-Madu.jpg";
import kedaireka from "../../assets/images/kedaireka.png";
import tutwuri from "../../assets/images/tutwuri.png";
import umj from "../../assets/images/umj.png";
import ug from "../../assets/images/ug.png";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} sm:block bg-white py-5 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <img
          src={logoMadu}
          alt=""
          style={{ width: "70px", objectFit: "contain" }}
        />
        <img
          src={kedaireka}
          style={{ width: "80px", objectFit: "contain" }}
          alt=""
        />
        <img
          src={tutwuri}
          style={{ width: "55px", objectFit: "contain" }}
          alt=""
        />
        <img
          src={umj}
          style={{ width: "70px", objectFit: "contain" }}
          alt=""
        />
        <img
          src={ug}
          style={{ width: "60px", objectFit: "contain" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Sponsored;
