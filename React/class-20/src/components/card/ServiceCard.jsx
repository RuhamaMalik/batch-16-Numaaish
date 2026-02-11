import React from "react";

const ServiceCard = ({service}) => {
const {title, description, icon} = service;
 
  
  return (
    <div className="bg-neutral-primary-soft  flex flex-col items-center max-w-sm p-6 border border-default rounded-base shadow-xs">
      {/* <svg
        className="w-7 h-7 mb-3 text-body"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
        />
      </svg> */}

      <p  className="w-10 h-10 text-4xl mb-3  text-body">{icon}</p>

      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-heading">
          {title || "my title"}
        </h5>
      </a>

      <p className="mb-3 text-body">
       {description}
      </p>

      <a
        href="#"
        className="inline-flex font-medium items-center text-red-600 hover:underline"
      >
        See our guideline
        <svg
          className="w-4 h-4 ms-2 rtl:rotate-[270deg]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
          />
        </svg>
      </a>
    </div>
  );
};



export default ServiceCard