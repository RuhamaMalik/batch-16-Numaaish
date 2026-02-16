import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ProductCard from "../components/card/ProductCard";
import { useLoaderData } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const Products = () => {

  const refEle = useRef([]);
  const container = useRef();
const products = useLoaderData();

console.log(products);


    useGSAP(() => {
    gsap.from(refEle.current, {
      y: 50,
      opacity: 0,
      duration:1.5,
      stagger: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
        end: 'top 20%',
        scrub: true
      }
    });
  },{scope:container});

  return (
   <>
   
   <div ref={container} className="min-h-[50vh] flex gap-4 mt-20  justify-center items-center">

        {
          [1,2,3,4,5].map((service, i) => (
            <ProductCard ref={(el) => (refEle.current[i] = el)} key={i} service={service} />
          ))
        }
      </div>
   
   </>
  )
}

export default Products