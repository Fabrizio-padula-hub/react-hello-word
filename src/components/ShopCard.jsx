import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ShopCard() {
  useEffect(() => {
    gsap.to(".absolute-div", {
      y: 0, // Adjust this value as needed
      scrollTrigger: {
        trigger: ".relative-div",
        start: "top center", // When the top of relative-div enters the center of the viewport
        end: "bottom top", // When the bottom of relative-div leaves the top of the viewport
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative-div relative m-8 min-h-[33.06rem] md:min-h-[39.94rem] lg:min-h-[51.25rem] rounded-lg bg-[url('../assets/img/image.webp')] bg-no-repeat bg-cover bg-center">
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-30 rounded-lg"></div>

      <div className="relative text-white flex flex-col items-center z-2">
        <h2 className="font-bold text-7xl lg:text-9xl text-white mt-4">
          VIETNAM
        </h2>
      </div>

      <div className="absolute-div absolute inset-x-0 bottom-0 min-h-[35vh] md:min-h-[47vh] lg:min-h-[60vh] lg:bg-left-top bg-[url('../assets/img/lago.png')] bg-no-repeat bg-cover bg-center"></div>
    </div>
  );
}

export default ShopCard;
