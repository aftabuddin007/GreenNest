import React from 'react';
import usePlants from '../../Components/Hooks/Hooks';
// import { useNavigate } from 'react-router';
import PlantCard from '../../Components/PlantCard/PlantCard';
import { Link } from 'react-router';

const TopRatedCard = () => {
    const {plants} = usePlants()
    const featuredPlants = plants.slice(0,6)
    // const navigation = useNavigate()
    return (
        <div className='   bg-green-200 py-5 '>
            <h2 className='text-3xl font-bold text-center text-green-700 mb-8 '>Our Indoor Plants</h2>
            <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-6 max-w-7xl mx-auto'>
        {
            featuredPlants.map(plant=><PlantCard plant={plant} key={plant.plantId}></PlantCard>)
        }
            </div>
<div className='mt-10 text-center'>
             <Link to='/plants' className='btn text-[white] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] rounded-md '>See All</Link>
           </div>        
           </div>
    );
};

export default TopRatedCard;