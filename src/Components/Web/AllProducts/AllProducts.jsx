//import * as React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { BsHeart, BsCartPlus, BsEye } from 'react-icons/bs';


import './AllProducts.css'
import SwiperStore from '../Swiper/SwiperStore.jsx';

export default function AllProducts() {

  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(8);
  const [sort, setSort] = useState('');
  const [ltePrice, setLtePrice] = useState(100000);
  const [gtePrice, setGtePrice] = useState(0);
  const [categoryFilter, setCategorFilter] = useState(null);


  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `https://ecommerce-node4-five.vercel.app/products?page=${currentPage}&&limit=${limit}&&sort=${sort}
            &&price[gte]=${gtePrice}&&price[lte]=${ltePrice}${categoryFilter ? `&categoryId=${categoryFilter}` : ''}`);
      //console.log(data);
      setProduct(data);
    }
    catch (error) {
      console.log(error);
    }
  };


  const getCategories = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}categories/active?limit=7`);
    //console.log(data.categories);import { Swiper } from 'swiper/react';

    setCategories(data.categories);

  }
  console.log(categories)


  const changeLimit = (data) => {
    setLimit(Number(data));
  }
  const changeSort = (data) => {
    setSort((data));
  }
  const handleGtePriceChange = (event) => {
    setGtePrice(event.target.value);
  };

  const handleLtePriceChange = (event) => {
    setLtePrice(event.target.value);
  };
  const handleGoButtonClick = () => {
    fetchProducts();
  };
  const handleCatFilter = (data) => {
    console.log(data.target.value)
    data.target.value == 'all' ? setCategorFilter(null) : setCategorFilter(data.target.value)
  };

  useEffect(() => {
    fetchProducts();
    getCategories();
  }, [currentPage, limit, sort, categoryFilter]);

  let totalPages = Math.ceil(products.total / limit);
  totalPages = isNaN(totalPages) ? 1 : totalPages;


  return (
    <div className=' pb-5 '>
      <div className='vh-100 mb-5 dark-overlay'>
        <SwiperStore />
      </div>

      <div className='container'>
        <div className='container-fluid'>
          <h2 className='text-center'>أصنافنا</h2>
          <hr />
        </div>
      </div>
      <Categories />


      <div className='container'>
        <div className=" container-fluid ">
          <div className='pb-4 container-fluid pt-5'>
            <h1 className='text-center '> منتجاتنا</h1>
            <hr />
          </div>


          <div className="d-flex gap-2 justify-content-center">
            <div className="dropdown">
              <button
                className="btn btn-dark text-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                حدد
              </button>
              <ul className="dropdown-menu">
                {Array.from({ length: products.total }, (_, index) => (
                  <li key={index}>
                    <button
                      className="dropdown-item"
                      onClick={() => changeLimit(`${index + 1}`)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-dark text-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ترتيب حسب
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => changeSort(`name`)}
                  >
                    الاسم
                  </button>
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => changeSort(`price`)}
                  >
                    السعر
                  </button>
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => changeSort(`rating`)}
                  >
                    الأعلى تقييم
                  </button>
                </li>
              </ul>
            </div>
            <div className="dropdown ">
              <button className="btn btn-dark text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                تصفية حسب السعر
              </button>
              <ul className="dropdown-menu p-4">
                <form>
                  <div className='text-center'>من: </div>
                  <div className="form-row">
                    <div className="col">
                      <input type="number" className="form-control" placeholder="First Number" onChange={handleGtePriceChange} />
                    </div>
                    <div className='text-center'>إلى: </div>
                    <div className="col">
                      <input type="number" className="form-control" placeholder="Last Number" onChange={handleLtePriceChange} />
                    </div>
                  </div>
                  <div className='p-2 text-center'>
                    <button className="btn btn-outline-secondary" type="button" onClick={handleGoButtonClick}>
                      اذهب
                    </button>
                  </div>
                </form>
              </ul>
            </div>

            <select className="form-select bg-color form-select-sm w-25" aria-label=".form-select-sm example" onChange={handleCatFilter}>

              <option className='dir' value={'all'}>التصفية حسب الفئة</option>
              {
                categories?.map((category) =>
                  <option className='dir' key={category._id} value={category._id}>{category.name}</option>
                )
              }
            </select>
          </div>

          <div className="row gap-3 justify-content-center p-5">
            {products.products ? (
              products.products.map((product) => (
                <Link
                  className="col-lg-3 ps-0 mb-3"
                  to={`/products/${product._id}`}
                  style={{ width: '17rem', position: 'relative' }}
                  key={product._id}
                >
                  <div className="image-container position-relative">
                    <img
                      className="w-100 h-100 product-image"
                      src={product.mainImage.secure_url}
                      alt="Card image cap"
                    />
                    <div className="icon-container position-absolute bottom-0 start-50 mb-3  d-flex justify-content-center d-icon ">
                       
                      <Link className="icon-card rounded-circle text-dark bg-white d-flex card-icon justify-content-center align-items-center w-100 h-100 col-lg-3 ">
                        <BsCartPlus className='icon-animation' />
                      </Link>
                      <Link className="icon-card rounded-circle text-dark bg-white d-flex card-icon justify-content-center align-items-center w-100 h-100 col-lg-3 mx-3">
                        <BsHeart className='icon-animation'/>
                      </Link>
                      <Link className="icon-card rounded-circle text-dark bg-white d-flex card-icon justify-content-center align-items-center w-100 h-100 col-lg-3 me-5">
                        <BsEye className='icon-animation'/>
                      </Link>
                    </div>
                  </div>

                  <p className='text-center'>{product.name}</p>
                  <p className='text-center text-secondary dir'> {product.price} شيكل</p>

                </Link>
              ))
            ) : (
              <h2 className="dir">لا يوجد منتجات</h2>
            )}
          </div>

        </div>

        <div className="d-flex justify-content-center ">
          <Stack spacing={3}>
            <Pagination
              count={totalPages}
              variant="outlined"
              shape="rounded"
              color="standard"
              defaultPage={currentPage}
              onChange={(event, value) => setCurrentPage(value)}
            />
          </Stack>
        </div>


        <div className=''>
          <div className='row d-flex justify-content-center align-items-center  p-2 '>
            <ul className='d-flex h-100  justify-content-center p-2 pt-4 col-lg-4 '>
              <li className='mb-1'><Link to="/">الرئيسية</Link> </li>
              <li><Link to="mailto:cyclingpalestine@gmail.com"> cyclingpalestine@gmail.com</Link></li>
              <li><Link to="tel:+970568642671"> +970-568642671</Link></li>
            </ul>

            <ul className='d-flex justify-content-center p-2 pt-4 col-lg-4'>
              <li ><Link to="">سياسة الخصوصية</Link> </li>
              <li ><Link to="">سياسة الشحن</Link> </li>
              <li ><Link to="">سياسة الإسترجاع والإستبدال</Link> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};





// const changePrice = ()=>{
//   fetchProducts();
// }


