import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsCartPlus, BsHeart, BsHeartFill } from 'react-icons/bs';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function CategoriesDetails() {
    const {categoryId} = useParams();
    const [category, setCategory] = useState([]);

    const getCategoryDetails = async ()=>{
      try {
        const { data } = await axios.get(`https://ecommerce-node4-five.vercel.app/products/category/${categoryId}`);
        return data.products;
      } catch (error) {
        console.error("Error fetching category:", error);
        throw new Error("Failed to fetch category");
      }
    };

  const { data, isLoading, isError, refetch } = useQuery(["categoryDetails", categoryId], getCategoryDetails);

  useEffect(() => {
    refetch();
  }, [categoryId, refetch]);

  useEffect(() => {
    if (data) {
      setCategory(data);
    }
  }, [data]);

    if(isLoading){
        return <div className="loading bg-transfer  w-100 d-flex justify-content-center align-items-center z-3">
        <span className="loader"></span>
    </div>
    }

    if (isError) {
      return <div>خطأ في جلب البيانات</div>;
    }
  return (
    <div className='container pt-5 mt-5 pb-5 '>
    <div className='row d-flex justify-content-around mt-5'>
    {category.length ? (
      category.map((product) => (
        <Link className='card border-color col-lg-3 ps-0 mb-3' to={`/products/${product._id}`} style={{ width: '17rem', position: 'relative' }} key={product._id}>
                  <div className='bg-danger p-1 ms-auto rounded-start-1 text-white text-center shadow-bottom position-absolute end-0 mt-5' style={{ width: '5rem' }}>تخفيضات</div>
                  <img className="card-img-top ps-3 image-store" src={product.mainImage.secure_url} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title text-center">{product.name}</h5>
                    <p className="card-text color dir text-danger">{product.price}  ₪ </p>
                  </div>
                  <div className='d-flex'>
                    <div className='bg-color mb-3 w-50 p-2 rounded-end-1 text-white text-center me-3 shadow-bottom'>{product.status}</div>
                    
                    <div className=' d-flex justify-content-start w-100'>
                    <div className=" me-3">
                      <BsCartPlus />
                    </div>
                   
                    <div className=" w-75 ">
                      <BsHeart />
                    </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <h2 className='dir'>لا يوجد منتجات</h2>
            )}
    </div>
    
   
  </div>
  )
}
