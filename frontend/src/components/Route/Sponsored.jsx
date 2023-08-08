import React from "react";
import styles from "../../styles/styles";
import logoMadu from "../../assets/images/logo-Madu.jpg"
import kedaireka from "../../assets/images/kedaireka.png"
import tutwuri from "../../assets/images/tutwuri.png"
import umj from "../../assets/images/umj.png"
import ug from "../../assets/images/ug.png"

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-5 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      {/* <div> STORY/BLOG</div> */}
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src= {logoMadu}
            alt=""
            style={{width:"90px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src= {kedaireka}
            style={{width:"100px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src= {tutwuri}
            style={{width:"80px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src= {umj}
            style={{width:"90px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src= {ug}
            style={{width:"90px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
