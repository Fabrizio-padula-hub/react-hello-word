import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="max-w-7xl m-auto grid grid-cols-4 gap-3">
      {plants.map((plant) => (
        <div
          key={plant.id}
          className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
          <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img
              src={
                plant.image_url ||
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              }
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
  );
};

export default CardList;
