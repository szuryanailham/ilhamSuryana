import React from "react";
import Link from "next/link"; // Import Link from Next.js for internal navigation

const CardPortofolio = ({ image, title, description, linkUrl }) => {
  return (
    <div className="mx-auto w-[95%] md:w-[45%] lg:w-[30%] bg-gray-800 border border-gray-700 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800 mt-5">
      <div>
        <img className="rounded-t-lg" src={image} alt={title} />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-400">{description}</p>
        <Link href={linkUrl}>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800">
            See Demo
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardPortofolio;
