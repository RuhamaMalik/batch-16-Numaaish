import { forwardRef } from "react";

const ProductCard = forwardRef(
  ({service},ref) => {
    
const {title, description, icon} = service;
 
  
  return (
    <div ref={ref} className="bg-neutral-primary-soft  flex flex-col items-center max-w-sm p-6 border border-default rounded-base shadow-xs">
      
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
}
)





export default ProductCard