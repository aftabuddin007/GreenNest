import React from 'react';
import { Link } from 'react-router';
import { FaStar } from "react-icons/fa";
const PlantCard = ({plant}) => {

const {image,plantName,price,rating,plantId} = plant

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm items-center pt-2">
  <figure className="h-[250px] w-[250px] sm:p-3 bg-gray-300 ">
    <img
      src={image}
      alt="plant-image" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">
      {plantName}
      
    </h2>
    <div className='flex justify-between gap-3'>
        <span className='px-2 py-1 font-bold text-green-400 bg-[#F1F5E8]'>Price: ${price}</span>
    <span className='px-2 py-1 font-bold text-yellow-400 bg-[#F1F5E8] flex items-center gap-1'>Rating: {rating} <FaStar /></span>
    </div>
      <Link to={`/plantDetails/${plantId}`}  className='btn mt-2 btn-success w-full'>View Details</Link>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </div>
    );
};

export default PlantCard;