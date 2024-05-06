import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { CartContext } from '../Context/FeatureCart';
import { UserContext } from '../Context/FeatureUser';
import SwiperReviews from './SwiperReviews';
import ReviewOrders from './ReviewOrders';
import ReactImageMagnify from 'react-image-magnify';
import { BiCart } from 'react-icons/bi';
import './Products.css'
import { BsHeart } from 'react-icons/bs';


export default function Products() {
  const { productId } = useParams();
  const { addToCartContext } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageOpacity, setImageOpacity] = useState({}); // Store opacity for each image



  let ratCount = 0;
  let ratsNum = 0;
  let AvgRating = 0;
  const { userToken, getUserOrdersContext } = useContext(UserContext);

  const getProduct = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}products/${productId}`);
    //console.log(data.product);
    return data.product;
  };

  const addToCart = async (productId) => {
    const res = await addToCartContext(productId);
    return res;
  };

  const avgRat = () => {
    data.reviews.map((review) => {
      ratCount += review.rating;
      ratsNum++;
    })
    AvgRating = ratCount / ratsNum;
    console.log(AvgRating);
    return Math.round(AvgRating);

  }

  const { data, isLoading, isError, refetch } = useQuery(["productDetails", productId], getProduct);


  useEffect(() => {
    refetch();
  }, [productId, refetch]);

  useEffect(() => {
    if (data) {
      setProduct(data);
      setSelectedImage(data.mainImage.secure_url);

      // Set opacity for each image initially
      const initialOpacity = {};
      data.subImages.forEach((_, index) => {
        initialOpacity[index] = 0.5; // Initial opacity for unselected images
      });
      setImageOpacity(initialOpacity);
    }
  }, [data]);

  const handleImageClick = (imageUrl, index) => {
    setSelectedImage(imageUrl);

    const updatedOpacity = {};
    Object.keys(imageOpacity).forEach((key) => {
      if (key === index.toString()) {
        updatedOpacity['main'] = 0.5;//خاصة بالصورة الرئيسية
      }
      if (key === index.toString()) {
        updatedOpacity[key] = key === index.toString() ? 1 : 0.5; // Set opacity to 1 for the clicked image and 0.5 for the main image
      } else {
        updatedOpacity[key] = 0.5; // Set opacity to 0.5 for other images
      }
    });
    setImageOpacity(updatedOpacity);
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };


  if (isError) {
    return <div>خطأ في جلب البيانات</div>;
  }

  if (isLoading || !product) {
    return <div className="loading bg-transfer  w-100 d-flex justify-content-center align-items-center z-3">
      <span className="loader"></span>
    </div>
  }
  return (
    <div className="container pt-5 mt-5 pb-5 mb-5">
      <div className="row justify-content-center align-items-center pt-5">
        <div className="col-lg-10">
          <div className='pb-5 d-flex '>
            <div className='dir col-lg-6 pe-5'>
              <h2 className="fw-bold">{data.name}</h2>
              <div className='pe-4 pt-3'>
                <p>السعر: <span className='color'> {product.price} ₪</span></p>
              </div>
              <div className='pe-4 '>
                <p>اللون: <span className='color'> {product.color} </span></p>
              </div>
              <div className='pe-2'>
                <p className='mb-0'>في حال لديك ملاحظات خاصة للبائع</p>
                <textarea className='mt-0 w-100 textarea'></textarea>

              </div>

              <div className='d-flex pe-2   dir'>
                <p>التقييم:</p>
                <div className='d-flex gap-1'>
                  {Array.from({ length: avgRat() }, (_, index) => (
                    <svg
                      height="800px"
                      width="800px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 47.94 47.94"
                      xmlSpace="preserve"
                      key={index}
                    >
                      <path
                        fill="#ED8A19"
                        d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
                      />
                    </svg>
                  ))}

                  {Array.from({ length: Number(5) - avgRat() }, (_, index) => (
                    <svg
                      height="200px"
                      width="200px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 47.94 47.94"
                      xmlSpace="preserve"
                      fill="#000000"
                      stroke="#000000"
                      key={index}
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path style={{ fill: '#ffffff' }} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path>
                      </g>
                    </svg>
                  ))}
                </div>
              </div>
             <div className='d-flex justify-content-center'>
           
              <div className='d-flex justify-content-center'>
                <button
                  className="btn text-white bg-dark d-flex align-items-center dir add-button "
                  onClick={() => addToCart(data._id)}
                  hidden={!userToken}
                >
                  <span className="ps-2 pb-1">
                    <BiCart />
                  </span>
                  أضف إلى عربة التسوق

                </button>
              </div>
              <div className=" heart-icon pe-3 pt-2 ">
                <BsHeart />
              </div>
             </div>
           
            </div>
            <div className='col-lg-6 d-flex '>
              <div >
                <ReactImageMagnify
                  smallImage={{
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: false,
                    src: selectedImage,
                    width: 500,
                    height: 600,
                  }}
                  largeImage={{
                    src: selectedImage,
                    width: 1200,
                    height: 1800
                  }}
                  enlargedImageContainerDimensions={{
                    width: 300,
                    height: 400
                  }}
                  isHintEnabled={true}
                  hintTextMouse='قم بالتمرير للتكبير'
                  enlargedImagePosition='over'
                  imageClassName='shadow-lg product-image '
                />
              </div>
              <div>
                {product.subImages && product.subImages.length > 0 && (
                  <>
                    <div className='mt-2 ms-2'>
                      <img
                        src={product.mainImage.secure_url}
                        alt={`main image`}
                        className={`sub-image`}
                        style={{ opacity: imageOpacity["main"] }}
                        onClick={() => handleImageClick(product.mainImage.secure_url, "main")}
                      />
                    </div>
                    {product.subImages.map((subImage, index) => (
                      <div key={index} className='mt-2 ms-2'>
                        <img
                          src={subImage.secure_url}
                          alt={`sub image ${index}`}
                          className={`sub-image`}
                          style={{ opacity: imageOpacity[index] }}
                          onClick={() => handleImageClick(subImage.secure_url, index)}
                        />
                      </div>
                    ))}
                  </>
                )}
                {!product.subImages || product.subImages.length === 0 && (
                  <div>Sub images not found</div>
                )}
              </div>
            </div>
          </div>


        </div>
      </div>
      <hr />

      <h2 className="text-center py-4 fw-bolder">
        ما مدى رضاك عن منتجنا؟
      </h2>
      <ReviewOrders productId={productId} />
      <hr />

      <h2 className="text-center py-5 fw-bolder ">ماذا يقول عملاؤنا</h2>
      <SwiperReviews data={data} />
    </div>
  );
}
