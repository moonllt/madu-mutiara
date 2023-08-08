import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProduct, updateProduct } from "../../redux/actions/product";
import { categoriesData } from "../../static/data";
import { toast, ToastContainer } from "react-toastify";

const PutProduct = () => {
  const { id } = useParams();
  const { success, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const formatPrice = (value) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      return "";
    }
    return parsedValue.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        dispatch({ type: "fetchProductStart" });

        const product = await dispatch(fetchProduct(id));
        setName(product.name);
        setDescription(product.description);
        setCategory(product.category);
        setSize(product.size);
        setTags(product.tags);
        setPrice(product.price);
        setStock(product.stock);

        dispatch({ type: "fetchProductSuccess" });
      } catch (error) {
        dispatch({
          type: "fetchProductFailed",
          payload: error.message,
        });
      }
    };

    fetchProductData();
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      name,
      description,
      category,
      size,
      tags,
      price,
      stock,
    };

    dispatch(updateProduct(id, updatedProduct))
      .then(() => {
        toast.success("Product updated successfully!");
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Edit Produk</h5>
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
            placeholder="Masukkan nama produk..."
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
            placeholder="Masukkan deskripsi produk..."
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
            <option value="">Pilih kategori</option>
            {categoriesData.map((i) => (
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
            placeholder="Masukkan tags yang sesuai dengan produk..."
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
        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-yellow-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
        >
          Update Product
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default PutProduct;
