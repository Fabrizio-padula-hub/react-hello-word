import React, { useState, useEffect } from "react";
import axios from "axios";
import aloeImage from '../assets/img/Aloe.png';

const CardList = () => {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fare la chiamata API quando il componente viene montato
    axios
      .get("http://127.0.0.1:8000/api/plant")
      .then((response) => {
        // Imposta i dati delle piante nello stato
        setPlants(response.data.results);
      })
      .catch((error) => {
        // Gestione degli errori
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Errore: {error.message}</div>;
  }

  return (
    <>
      <div

        className={`backdrop-blur-sm bg-white/30 p-3 sticky top-0 flex justify-center items-center`}
      >
        <h5 className="text-[#292929] text-5xl md:text-7xl font-semibold">
          Arredi e Oggetti
        </h5>
      </div>

      <div className="mx-auto max-w-96 md:max-w-screen-md lg:max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-9">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700">
              <img
                src={plant.image_url ? `http://127.0.0.1:8000/${plant.image_url}` : aloeImage}
                alt={plant.name}
              />

            </div>
            <div className="p-6">
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {plant.name}
              </h4>
              <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                {plant.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardList;
