import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ProductCard from "../components/card/ProductCard";
import { useLoaderData } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const Products = () => {

  const refEle = useRef([]);
  const container = useRef(null);
  const products = useLoaderData();

  console.log(refEle.current);



  useGSAP(() => {

    // refEle.current.forEach((card) => {

    gsap.from(refEle.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
          toggleActions: "play none none reverse"
      }
    });

    // })



  }, { scope: container });

  return (
    <>

      <div ref={container} className="max-w-screen-xl mx-auto   min-h-[50vh] flex flex-wrap gap-4 mt-20  justify-center items-center">

        {
          products?.map((product, i) => (
            <ProductCard ref={(el) => (refEle.current[i] = el)} key={i} product={product} />
          ))
        }
      </div>

    </>
  )
}

export default Products