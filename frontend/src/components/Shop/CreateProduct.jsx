import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../redux/actions/product";
import { categoriesData } from "../../static/data";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [stock, setStock] = useState();
  const formatPrice = (value) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      return "";
    }
    return parsedValue.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Product created successfully!");
      navigate("/dashboard");
      window.location.reload();
    }
  }, [dispatch, error, success]);

  // const handleImageChange = (e) => {
  //   e.preventDefault();

  //   let files = Array.from(e.target.files);
  //   console.log("Selected Files:", files);
  //   setImages((prevImages) => [...prevImages, ...files]);
  // };

  const handleImageChange = (e) => {
  e.preventDefault();

  const files = Array.from(e.target.files);
  readAndConvertImageToDataUrl(files);
};


  const readAndConvertImageToDataUrl = (files) => {
  const imageDataUrls = [];

  const loadImage = (file) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        imageDataUrls.push(reader.result);

        if (imageDataUrls.length === files.length) {
          setImages((prevImages) => [...prevImages, ...imageDataUrls]);
        }
      }
    };

    reader.readAsDataURL(file);
  };

  files.forEach((file) => {
    loadImage(file);
  });
};


  console.log(images);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = new FormData();

    images.forEach((image) => {
      newForm.append("images", image);
    });
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category);
    newForm.append("tags", tags);
    newForm.append("price", price);
    newForm.append("size", size);
    newForm.append("stock", stock);
    newForm.append("shopId", seller._id);
    // dispatch(createProduct(newForm));
    dispatch(
      createProduct({
        name,
        description,
        category,
        tags,
        price,
        size,
        stock,
        shopId: seller._id,
        images,
      })
    );
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Buat produk baru</h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Nama produk <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            placeholder="Input nama produk.."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Deskripsi produk <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
            value={description}
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Input deskripsi produk"
          ></textarea>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Kategori <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Choose a category">Pilih kategori</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">Tags</label>
          <input
            type="text"
            name="tags"
            value={tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setTags(e.target.value)}
            placeholder="Input tags yang sesuai dengan produk"
          />
        </div>
        <br />
        <div>
          <label className="pb-2">Harga</label>
          <input
            type="number"
            name="price"
            value={price}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Input harga [hanya angka]"
          />
          <p>Dalam rupiah: {formatPrice(price)}</p>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Berat produk <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="size"
            value={size}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setSize(e.target.value)}
            placeholder="Input berat produk [gram]"
          />
        </div>
        
        <br />
        <div>
          <label className="pb-2">
            Stok produk <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="stock"
            value={stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setStock(e.target.value)}
            placeholder="Input stok produk"
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Upload foto produk <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name= "images"
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((dataUrl, index) => (
                <img
                  src={dataUrl}
                  key={index}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))}
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Tambah Produk"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;




// --------DOUBLE OPTIONS ARRAY------------
// import React, { useEffect, useState } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createProduct } from "../../redux/actions/product";
// import { categoriesData } from "../../static/data";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";

// const CreateProduct = () => {
//   const { seller } = useSelector((state) => state.seller);
//   const { success, error } = useSelector((state) => state.products);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [images, setImages] = useState([]);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [options, setOptions] = useState([]);
//   const [tags, setTags] = useState("");
//   const [originalPrice, setOriginalPrice] = useState("");
//   const [stock, setStock] = useState("");

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//     }
//     if (success) {
//       toast.success("Produk berhasil dibuat!");
//       navigate("/dashboard");
//       window.location.reload();
//     }
//   }, [dispatch, error, success]);

//   const handleImageChange = (e) => {
//     e.preventDefault();
//     let files = Array.from(e.target.files);
//     setImages((prevImages) => [...prevImages, ...files]);
//   };

//   const handleOptionChange = (index, property, value) => {
//     const updatedOptions = [...options];
//     updatedOptions[index] = {
//       ...updatedOptions[index],
//       [property]: value,
//     };
//     setOptions(updatedOptions);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     images.forEach((image) => {
//       formData.append("images", image);
//     });
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("category", category);
//     formData.append("options", JSON.stringify(options));
//     formData.append("tags", tags);
//     formData.append("originalPrice", originalPrice);
//     formData.append("stock", stock);
//     formData.append("shopId", seller._id);

//     dispatch(createProduct(formData));
//   };

//   return (
//     <div className="w-[90%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
//       <h5 className="text-[30px] font-Poppins text-center">Produk baru</h5>
//       {/* create product form */}
//       <form onSubmit={handleSubmit}>
//         <br />
//         <div>
//           <label className="pb-2">
//             Nama produk <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Masukkan nama produk..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Deskripsi produk <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             cols="30"
//             required
//             rows="8"
//             type="text"
//             name="description"
//             value={description}
//             className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Masukkan deskripsi produk..."
//           ></textarea>
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Kategori <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full mt-2 border h-[35px] rounded-[5px]"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="Pilih kategori">Pilih kategori</option>
//             {categoriesData &&
//               categoriesData.map((i) => (
//                 <option value={i.title} key={i.title}>
//                   {i.title}
//                 </option>
//               ))}
//           </select>
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">Tags</label>
//           <input
//             type="text"
//             name="tags"
//             value={tags}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setTags(e.target.value)}
//             placeholder="Masukan tags yang sesuai dengan produk..."
//           />
//         </div>
//         <br />
//         {options.map((option, index) => (
//   <div key={index} className="flex">
//     <div className="flex-1">
//       <label className="pb-2">Berat</label>
//       <input
//         type="number"
//         name="weight"
//         value={option.weight}
//         className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//         onChange={(e) => handleOptionChange(index, "weight", e.target.value)}
//         placeholder="Masukkan berat produk.."
//       />
//     </div>
//     <div className="flex-1">
//       <label className="pb-2">Harga</label>
//       <input
//         type="number"
//         name="price"
//         value={option.price}
//         className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//         onChange={(e) => handleOptionChange(index, "price", e.target.value)}
//         placeholder="Masukkan harga produk.."
//       />
//     </div>
//     <div className="flex-1">
//       <label className="pb-2">Stok</label>
//       <input
//         type="number"
//         name="stock"
//         value={option.stock}
//         className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//         onChange={(e) => handleOptionChange(index, "stock", e.target.value)}
//         placeholder="Masukkan stok produk.."
//       />
//     </div>
//   </div>
// ))}

      
//         <br />
//         <button
//           className="flex items-center px-3 py-2 text-white bg-blue-500 rounded-[3px] hover:bg-blue-600 focus:outline-none"
//           onClick={() => setOptions([...options, { weight: "", price: "", stock: "" }])}
//         >
//           <AiOutlinePlusCircle className="mr-1" />
//           Tambahkan berat-harga-stok
//         </button>
//         <br />
//         {/* <div>
//           <label className="pb-2">
//             Harga asli <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="originalPrice"
//             value={originalPrice}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setOriginalPrice(e.target.value)}
//             placeholder="Masukkan harga asli produk..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Stok <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="stock"
//             value={stock}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setStock(e.target.value)}
//             placeholder="Masukkan stok produk..."
//           />
//         </div> */}
//         <br />
//         <div>
//           <label className="pb-2">
//             Upload foto produk <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="file"
//             name=""
//             id="upload"
//             className="hidden"
//             multiple
//             onChange={handleImageChange}
//           />
//           <div className="w-full flex items-center flex-wrap">
//             <label htmlFor="upload">
//               <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
//             </label>
//             {images &&
//               images.map((i) => (
//                 <img
//                   src={URL.createObjectURL(i)}
//                   key={i}
//                   alt=""
//                   className="h-[120px] w-[120px] object-cover m-2"
//                 />
//               ))}
//           </div>
//         <br />
//         <div className="flex items-center justify-end mt-4">
//           <button
//             type="submit"
//             className="flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded-[3px] hover:bg-blue-600 focus:outline-none"
//           >
//             Buat Produk
//           </button>
//           </div>
//           </div>
//       </form>
//       <ToastContainer autoClose={2000} />
//     </div>
//   );
// };

// export default CreateProduct;
