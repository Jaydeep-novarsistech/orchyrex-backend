// OrderSummary.jsx
import React from 'react';

const OrderSummary = ({ cartItems, onClose, onCheckout, onAddToCart }) => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

      {cartItems.length > 0 ? (
        <ul className="divide-y divide-gray-300">
          {cartItems.map((item) => (
            <li key={item.id} className="py-2">
              <div className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <div className="flex justify-end mt-4">
        <button
          onClick={onClose}
          className="px-4 py-2 mr-2 bg-gray-300 hover:bg-gray-400 rounded-md focus:outline-none"
        >
          Close
        </button>
        <button
          onClick={onCheckout}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md focus:outline-none"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
