import React from "react";
import { FaTruckFast } from "react-icons/fa6";
const ServiceData = [
  {
    icon: "ri-truck-line",
    title: "Free Shipping",
    subtitle: "Enjoy free shipping on orders!",
    bg: "bg-yellow-200",
  },
  {
    icon: "ri-refresh-line",
    title: "100%  Handpicked",
    subtitle: "Indulge in excellence ",
    bg: "bg-blue-200",
  },
  {
    icon: "ri-secure-payment-line",
    title: "Secure Payment",
    subtitle: "Shop with confidence ",
    bg: "bg-green-200",
  },
];

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {ServiceData.map((service, index) => (
        <div
          key={index}
          className={`w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 mb-6 ${service.bg} rounded-lg text-center`}
        >
          <i className={`${service.icon} text-6xl mb-4 text-primary`}></i>
          <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
          <p className="text-lg text-gray-700">{service.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
