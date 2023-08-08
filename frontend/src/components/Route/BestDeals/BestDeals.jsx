import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import p1 from "../../../assets/images/p2.png"
import p3 from "../../../assets/images/p3.png"
import p4 from "../../../assets/images/p4.png"
import p2 from "../../../assets/images/p6.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, [allProducts]);
  

  return (
    
    <div>
      <div className="bg-[#f9f0e5] py-10 p-6 rounded-lg ml-5 mr-5 mb-12">
  <div className={`${styles.section}`}>
    <div className={`${styles.heading} text-center`}>
      <h1 className="text-4xl text-[#CF9443] text-center mt-4">Best Deals</h1>
    </div>
    
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 md:gap-[30px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {
          data && data.slice(0, 5).map((i, index) => (
            <div className="flex justify-center" key={index}>
              <ProductCard data={i} />
            </div>
          ))
        }
      </div>
    </div>
  </div>
</div>
      
      <div>
        <div>
          <div className="flex justify-center h-full">
            <div className="w-full max-w-6xl bg-gray-200 p-4 rounded-lg mx-auto">
              <div className="flex">
                <div className="w-1/2 p-2">
                  <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400&display=swap');
          /* Gaya menggunakan font Caveat pada elemen h1 */
          .about{
            font-family: 'Caveat', cursive;
          }
        `}
      </style>
                  <h1 className="about text-5xl text-center ">About Us</h1>

                  <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300&display=swap');
          /* Gaya menggunakan font Caveat pada elemen h1 */
          .tabout{
            font-family: 'Assistant', sans-serif;
          }
        `}
      </style>

                  <p className="tabout text-md mt-4 text-center">
  CV. Madu Apiari Mutiara memproduksi madu dari berbagai jenis bunga, oleh karena itu masing-masing madu memiliki warna, rasa, dan aroma yang berbeda.
                  </p>
                  <p className="tabout text-md mt-4 text-center">
  Selain memproduksi madu murni dan madu multiflora, CV. Madu Apiari Mutiara juga memproduksi madu Formula, Propolis Cair, Permen Madu , dan juga kosmetik yang berbahan dasar madu.
</p>
<p className="tabout text-md mt-4 text-center">
  Pada tahun 2013, CV. Madu Apiari Mutiara mendapatkan penghargaan sebagai UKM Kreatif dari kota Depok dan ikut berpartisipasi dalam kegiatan Malaysia International Showcase (MIHAS) tahun 2015.
                  </p>
                  <p className="tabout text-md mt-4 text-center">
 Pada tahun 2019, CV. Madu Apiari Mutiara menjadi vendor terbaik di Serambi Botani. Mulai tahun 2022 CV Madu Apiari
Mutiara bekerjasama dengan UMJ dalam penelitian pengembangan produk & magang mahasiswa.
</p>

                </div>
  <div className="w-1/2 p-4 ml-20">
  <Slider
    dots={true}
    infinite={true}
    slidesToShow={1}
    slidesToScroll={1}
  > 
  <div>
    
  </div>
    <div>
      <img src={p1} alt="Foto 1" className="w-full h-auto max-w-sm" />
    </div>
    <div>
      <img src={p3} alt="Foto 2" className="w-full h-auto max-w-sm" />
    </div>
    <div>
      <img src={p4} alt="Foto 3" className="w-full h-auto max-w-sm" />
                    </div>
                    <div>
      <img src={p2} alt="Foto 3" className="w-full h-auto max-w-sm" />
                    </div>
                    <div>
      <img src={p3} alt="Foto 2" className="w-full h-auto max-w-sm" />
    </div>
    
    {/* Tambahkan gambar lainnya di sini */}
  </Slider>
</div>

      </div>
    </div>
  </div>
</div>




      </div>
   </div>
    
  );
};

export default BestDeals;
