import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function InfoHero() {
    const InfoCard = [
        {
            img: 'https://www.apple.com/v/airpods/v/images/chapternav/airpods_2gen_light__ckwbqlgv1r9e_large.svg',
            title: 'AirPods',
            subtitle: '(seconda generazione)'
        },
        {
            img: 'https://www.apple.com/v/airpods/v/images/chapternav/airpods_3gen_light__6r7zooyk4lua_large.svg',
            title: 'AirPods',
            subtitle: '(terza generazione)'
        },
        {
            img: 'https://www.apple.com/v/airpods/v/images/chapternav/airpods_pro_light__ets5a19rt3au_large.svg',
            title: 'AirPods Pro',
            subtitle: '(seconda generazione)'
        },
        {
            img: 'https://www.apple.com/v/airpods/v/images/chapternav/airpods_max_light__cvaaddhgazqu_large.svg',
            title: 'AirPods Max',
            subtitle: ''
        },
        {
            img: 'https://www.apple.com/v/airpods/v/images/chapternav/airpods_compare_light__cmuvdvbxj1w2_large.svg',
            title: 'Confronta',
            subtitle: ''
        },
        {
            img: 'https://www.apple.com/v/airpods/v/images/chapternav/apple_music_light__fexraacz3dme_large.svg',
            title: 'Apple music',
            subtitle: ''
        }


    ];

    useEffect(() => {
        ScrollReveal().reveal('.effect', { delay: 1000 });
    }, []);

    return (
        <div className='bg-white min-h-24 effect py-5'>
            <div className='grid grid-cols-6 gap-4 mx-auto max-w-screen-xl'>
                {InfoCard.map((card, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <img src={card.img} alt={card.title} />
                        <div className='text-center'>
                            <h5>{card.title}</h5>
                            <span>{card.subtitle}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}