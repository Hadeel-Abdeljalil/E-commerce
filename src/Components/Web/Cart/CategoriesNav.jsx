import React from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { useQuery } from "react-query";
import './Store.css'

export default function Categories() {
    const getCategory = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}categories/active?limit=9`);
        return data;
    };

    const { data, isLoading, isError } = useQuery("web_category", getCategory);

    if(isLoading){
      return <div className="loading bg-transfer  w-100 d-flex justify-content-center align-items-center z-3">
      <span className="loader"></span>
  </div>
  }

    if (isError) {
        return <div className="dir">خطأ في جلب البيانات</div>;
    }

    return (
        <ul className='d-flex justify-content-end '>
            {data?.categories.length ? data?.categories.map(category => (
                <li key={category._id} ><NavLink activeclassname="active" className="category" to={`/products/category/${category._id}`}>{category.name}</NavLink></li>

            )) : "there is no category found"
            }

        </ul>
    );
}
