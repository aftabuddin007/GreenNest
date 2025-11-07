import React from 'react';
import usePlants from '../../Components/Hooks/Hooks';
import PlantCard from '../../Components/PlantCard/PlantCard';

const Plants = () => {
    const {plants} = usePlants();
    const allPlants = plants;
    // console.log(allPlants)
    return (
        <div className='bg-green-200'>
        <div className='max-w-7xl mx-auto pt-10  py-6'>
           <div className=' text-center px-4'>
             <h2 className='font-semibold text-3xl text-green-600 mb-4'>Our All Plants</h2>
            <p>Discover a variety of plants that bring freshness, beauty, and calm to your space.</p>
           </div>
            <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-6'>
        {
            allPlants.map((plant)=><PlantCard plant={plant} key={plant.plantId}></PlantCard>)
        }
            </div>
        </div></div>
    );
};

export default Plants;