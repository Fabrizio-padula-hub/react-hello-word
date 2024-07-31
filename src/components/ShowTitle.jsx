import React from 'react';
import Sfondo from '../assets/img/img-sost/sfondo-sfumato.png'

function ShowTitle() {
    return (

        <div className="min-h-[18rem] md:min-h-[20rem] lg:min-h-[50rem] bg-[url(../assets/img/img-sost/foglie.jpg)] bg-no-repeat bg-cover bg-right p-8">

            <div className="relative flex justify-center">
                <img src={Sfondo} alt="" />
                <h2 className='absolute inset-0 flex items-center justify-center text-center font-bold text-2xl md:text-5xl lg:text-7xl'>
                    Nati dalla natura, <br />sostenibili per il futuro
                </h2>

            </div>



        </div>

    );
}

export default ShowTitle;