import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/bg-hero.jpg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import konten from "../../../assets/images/baner.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="navbar" style={{ background: "transparent", color: "white" }}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={1000}
      >
        <div className="carousel-item" style={{ position: 'relative', width: '100%', height: 'auto', marginTop: '0px', marginBottom: '50px' }}>
          <img src={backgroundImage} alt="Image 1" className="carousel-image" style={{ width: '100%', height: 'auto' }} />
          {/* <div className="legend" style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white' }}>
            <div>
              <h1 style={{ fontSize: '24px', margin: '0', textAlign: "left" }}>Title 1</h1>
              <p style={{ fontSize: '16px', margin: '8px 0', textAlign: "left" }}>Description 1</p>
            </div>
          </div> */}
        </div>

        <div className="carousel-item" style={{ position: 'relative', marginTop: '20px', marginBottom: '10px'  }}>
          <img src={konten} alt="Image 2" className="carousel-image" style={{ width: '80%', height: 'auto' }} />
          {/* <div className="legend" style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white' }}>
            <div>
              <h1 style={{ fontSize: '24px', margin: '0', textAlign: "left" }}>Title 2</h1>
              <p style={{ fontSize: '16px', margin: '8px 0', textAlign: "left" }}>Description 2</p>
            </div>
          </div> */}
        </div>
        {/* Tambahkan elemen CarouselItem sesuai jumlah gambar yang diinginkan */}
      </Carousel>
    </div>
  );
};

export default Hero;



  // <div
    //   className={`relative min-h-[70vh] 800px:min-h-[100vh] w-full bg-no-repeat ${styles.noramlFlex}`}
    //   style={{
    //     backgroundImage: `url(${backgroundImage})`,
    //     backgroundSize: "cover", // Menyesuaikan ukuran gambar dengan elemen
    //     backgroundPosition: "center", // Posisi gambar di tengah
    
    //   }}
    // >
    //   <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
    //     <h1
    //       className={`text-[30px] leading-[1.2] 800px:text-[50px] text-[#282525] font-[600] capitalize ${styles.leftAligned}`}
    //     >
    //       Madu Lokal <br /> Berkelas Internasional
    //     </h1>
    //     {/* <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
    //       assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
    //       quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
    //       <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
    //     </p> */}
    //     <Link to="/products" className="inline-block">
    //         <div className={`${styles.button} mt-5`}>
    //              <span className="text-[#fff] font-[Poppins] text-[18px]">
    //                 Shop Now
    //              </span>
    //         </div>
    //     </Link>
    //   </div>
    // </div>

    