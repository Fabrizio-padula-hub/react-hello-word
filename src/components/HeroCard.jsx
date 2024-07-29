import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function HeroCard() {
  const [isSticky, setIsSticky] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const stickyElement = document.querySelector(".sticky");
      const stickyOffset = stickyElement?.offsetTop || 0;
      if (window.scrollY >= stickyOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const animation = gsap.to(cardRef.current, { 
      width: isSticky ? "100%" : "auto", 
      duration: 0.5, 
      ease: "power1.inOut" 
    });

    return () => {
      animation.kill();
    };
  }, [isSticky]);

  return (
    <div className="flex justify-center items-start min-h-[25rem] md:min-h-[39.94rem] lg:min-h-[51.25rem] bg-[url('../assets/img/divano-2-hero.jpg')] bg-no-repeat bg-cover bg-center">
      <div
        ref={cardRef}
        className={`backdrop-blur-sm bg-white/30 p-3 rounded-3xl mt-4 sticky top-0 flex justify-center items-center`}
      >
        <h1 className="text-[#E0FFFF] text-5xl md:text-7xl font-semibold drop-shadow-lg">
          FUTURE DESIGN
        </h1>
      </div>
    </div>
  );
}

export default HeroCard;