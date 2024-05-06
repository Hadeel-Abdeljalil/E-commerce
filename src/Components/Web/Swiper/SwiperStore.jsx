import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SwiperStore.css'

export default function SwiperStore() {
  return (
    <>
      <Swiper
    modules={[Navigation, Pagination,Scrollbar,Autoplay]}
    spaceBetween={70}
    slidesPerView={1}
    navigation
    loop={true}
    autoplay={{ delay: 5000 }} 
    pagination={{ clickable: true }}
    className='h-100 d-flex align-content-center header '

  >
        <SwiperSlide className=' h-100 w-100'><img className='h-100 w-100' src="../../../../public/images/back.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className=' h-100 w-100'><img className='h-100 w-100' src="../../../../public/images/background.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className=' h-100 w-100'><img className='h-100 w-100' src="../../../../public/images/contact.jpg" alt="" /></SwiperSlide>
        <div className='swiper-text'>
        <h1 className='swiper-text2'>كل ما تحتاجه لرحلتك الأمثل</h1>
        <button className='btn border border-white bg-transparent text-white rounded-5 fw-bold store-header-botton mt-2'>تسوق الآن</button>
        </div>
      </Swiper>
    </>
  );
}
