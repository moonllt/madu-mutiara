import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import maduNutrisi from "../../../assets/images/bg-madu-home.jpg";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import bee from "../../../assets/images/bee-icon.png";
import yellowNutrisi from "../../../assets/images/yellow-nutrisi.jpg";
import { CSSTransition } from 'react-transition-group';
import "../../../styles/animation.css"
import halal from "../../../assets/images/H-HALAL.png"
import bpom from "../../../assets/images/H-BPOM.png"
import pertenakan from "../../../assets/images/H-PERTERNAKAN.png"
import { Link } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderAnimatedText = (text, index) => {
    return (
      <CSSTransition
        key={index}
        in={isHovered}
        timeout={1000}
        classNames="fade"
      >
        <p className="text-lg text-left md:text-left mb-2 ml-0 md:ml-11">
          <img src={bee} alt="bee" className="inline-block mr-6" style={{ width: '40px', height: '40px' }} />
          {text}
        </p>
      </CSSTransition>
    );
  };

  return (
    <>
     

{/* <div className="py-10 p-6 rounded-lg mb-12">
  <div className="container mx-auto ">
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Link to="/kategori-kecantikan" className="flex flex-col items-center bg-[#f8ecde] p-4 rounded-lg">
        <img src={bpom} alt="Image 1" className="w-24 mb-4" />
        <p className="text-[#CF9443] text-5xl font-normal">Madu Kesehatan</p>
      </Link>
      <Link to="/kategori-kecantikan" className="flex flex-col items-center bg-[#d9f5f2] p-4 rounded-lg">
        <img src={halal} alt="Image 2" className="w-32 mb-4" />
        <p className="text-[#CF9443] text-lg font-normal">Kecantikan da</p>
            </Link>
            
    </div>
  </div>
</div> */}


      


      <div className="bg-[#f8ecde] py-10 p-6 rounded-lg ml-5 mr-5 mb-12">
  <div className="container mx-auto ">
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <div className="flex flex-col items-center">
        <img src={bpom} alt="Image 1" className="w-24 mb-4" />
        <p className="text-[#CF9443] text-lg font-normal">Teruji Badan POM</p>
      </div>
      <div className="flex flex-col items-center mb-2">
        <img src={halal} alt="Image 2" className="w-32 mb-4" />
        <p className="text-[#CF9443] text-lg font-normal">100% Halal</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={pertenakan} alt="Image 3" className="w-20 mb-4" />
        <p className="text-[#CF9443] text-lg font-normal">Madu Berkualitas Tinggi</p>
      </div>
    </div>
  </div>
</div>



      {/* <div className="flex flex-wrap items-center justify-center py-10 bg-[#ffffff]">
        <div
          className={`w-full md:w-1/2 px-4`}
          style={{ backgroundImage: `url(${yellowNutrisi})`, backgroundSize: '700px 500px',  }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1 className="text-2xl font-bold text-center md:text-left mb-10 ml-10 mt-10">
            Dalam 1 Kg Madu Setara dengan:
          </h1>

          <CSSTransition
            in={isHovered}
            timeout={300}
            classNames="fade"
          >
            <div>
              <p className="text-lg text-left md:text-left mb-2 ml-0 md:ml-11">
                <img src={bee} alt="bee" className="inline-block mr-6" style={{ width: '40px', height: '40px' }} />
                50 Butir Telur Ayam
              </p>
              <p className="text-lg text-left md:text-left mb-2 ml-0 md:ml-11">
                <img src={bee} alt="bee" className="inline-block mr-6" style={{ width: '40px', height: '40px' }} />
                5,7 Liter Susu
              </p>
              <p className="text-lg text-left md:text-left mb-2 ml-0 md:ml-11">
                <img src={bee} alt="bee" className="inline-block mr-6" style={{ width: '40px', height: '40px' }} />
                25 Buah Pisang
              </p>
              <p className="text-lg text-left md:text-left mb-2 ml-0 md:ml-11">
                <img src={bee} alt="bee" className="inline-block mr-6" style={{ width: '40px', height: '40px' }} />
                40 Buah Jeruk
              </p>
              <p className="text-lg text-left md:text-left mb-2 ml-0 md:ml-11">
                <img src={bee} alt="bee" className="inline-block mr-6" style={{ width: '40px', height: '40px' }} />
                4 Kg Kentang
              </p>
              <p className="text-lg text-left md:text-left mb-20 ml-0 md:ml-11">
                <img src={bee} alt="bee" className="inline-block mr-6" style={{ width: '40px', height: '40px' }} />
                1,68 Kg Daging
              </p>
            </div>
          </CSSTransition>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <img src={maduNutrisi} alt="Gambar" className="mx-auto md:float-right" style={{ width: '600px', height: 'auto' }} />
        </div>
      </div> */}
    </>
  );
};

export default Categories;




       {/* <div className={`${styles.section} bg-white p-6 rounded-lg mb-12`} id="categories">
      <div className="grid grid-cols-2 gap-[5px] md:grid-cols-2 md:gap-[3px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
        <div className="flex items-center">
          <FaChevronLeft
            className={`text-3xl cursor-pointer ${scrollLeft > 0 ? 'text-black' : 'text-gray-300'}`}
            onClick={handleScrollLeft}
          />
        </div>
        <div className="flex flex-row overflow-x-auto" ref={containerRef}>
          {categoriesData.map((i) => {
            const handleSubmit = (i) => {
              navigate(`/products?category=${i.title}`);
            };
            return (
              <div
                className="w-[180px] h-[80px] bg-gray-200 flex items-center justify-center rounded-md mx-2"
                key={i.id}
                onClick={() => handleSubmit(i)}
              >
                <h5 className="text-[18px] leading-[1.3]">{i.title}</h5>
              </div>
            );
          })}
        </div>
        <div className="flex items-center">
          <FaChevronRight
            className={`text-3xl cursor-pointer ${
              containerRef.current && containerRef.current.scrollWidth - containerRef.current.clientWidth > scrollLeft
                ? 'text-black'
                : 'text-gray-300'
            }`}
            onClick={handleScrollRight}
          />
        </div>
      </div> */}
    {/* </div> */}
   

