import React, { useContext } from 'react';
import { CartContext } from '../Web/Context/FeatureCart.jsx';

export default function Quantity({ product }) {
  const { increaseQuantityContext, decreaseQuantityContext, getCart } = useContext(CartContext);

  const increaseQuantity = async (productId) => {
    try {
      const res = await increaseQuantityContext(productId);
      if (res.message === 'success') {
        await getCart();
      }
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  const decreaseQuantity = async (productId) => {
    try {
      const res = await decreaseQuantityContext(productId);
      if (res.message === 'success') {
        await getCart();
      }
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  return (
    <div className="quantity border border-dark rounded d-flex justify-content-center">
      <button
        className='ps-4'
        onClick={() => {
          if (product.quantity > 1) {
            decreaseQuantity(product.details._id);
          }
        }}
        disabled={product.quantity === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={17}
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M3.22852 8.5H12.5618"
            stroke="#121212"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <span>{product.quantity}</span>
      <button
        className='pe-4'
        onClick={() => increaseQuantity(product.details._id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={17}
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.37565 3.83333C8.37565 3.62622 8.20776 3.45833 8.00065 3.45833C7.79354 3.45833 7.62565 3.62622 7.62565 3.83333V8.125H3.33398C3.12688 8.125 2.95898 8.29289 2.95898 8.5C2.95898 8.7071 3.12688 8.875 3.33398 8.875H7.62565V13.1667C7.62565 13.3738 7.79354 13.5417 8.00065 13.5417C8.20776 13.5417 8.37565 13.3738 8.37565 13.1667V8.875H12.6673C12.8744 8.875 13.0423 8.7071 13.0423 8.5C13.0423 8.29289 12.8744 8.125 12.6673 8.125H8.37565V3.83333Z"
            fill="#121212"
          />
        </svg>
      </button>
    </div>
  );
}
