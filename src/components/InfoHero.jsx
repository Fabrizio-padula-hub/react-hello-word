import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Sofa from '../assets/img/disegni/divano.png';
import Bed from '../assets/img/disegni/letto.png';
import Wardrobe from '../assets/img/disegni/armadio.png';


export default function InfoHero() {
   
    useEffect(() => {
        ScrollReveal().reveal('.effect', { delay: 900 });
    }, []);

    return (
        <>
            <div className="effect min-h-[8rem] md:min-h-[8rem] lg:min-h-[16rem] bg-[url(../assets/img/chair.png)] lg:bg-[url(../assets/img/chair-lg.png)] bg-no-repeat bg-cover bg-left p-8 flex items-center justify-end">

                <div className="flex basis-1/2">

                    <p className="text-lg ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores cumque? Eligendi ea totam facilis suscipit ex perferendis, ipsa harum.
                    </p>
                </div>

            </div>
            <div className="bg-[#f5f5f7] min-h-10 text-xs flex justify-center items-center">
                {/* <span>Scopri tutte le nostre offerte.</span> */}
            </div>

        </>

    );
}