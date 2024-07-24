import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function InfoHero() {
    useEffect(() => {
        ScrollReveal().reveal('.effect', { delay: 1000 });
    }, []);

    return (
        <div className='bg-white min-h-24 effect py-5'>
            <div className=' grid grid-cols-6 gap-4 mx-auto max-w-screen-xl'>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://www.apple.com/v/airpods/v/images/chapternav/airpods_2gen_light__ckwbqlgv1r9e_large.svg" alt="" />
                    <div className='text-center'>
                        <h5>AirPods</h5>
                        <span>(seconda generazione)</span>
                    </div>
                </div>

                
            </div>
        </div>
    );
}