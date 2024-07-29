import React from 'react';

function ShowTitle() {
    return (
        <div className="min-h-[18rem] md:min-h-[20rem] lg:min-h-[50rem] bg-[url(../assets/img/chair.png)] bg-no-repeat bg-cover bg-left p-8 flex items-center justify-end">

            <div className="flex basis-1/2">
              
                <p className="text-lg ">
                    Your paragraph text goes here. This will stay in place while the chair rotates and scales with the scroll.
                </p>
            </div>

        </div>
    );
}

export default ShowTitle;