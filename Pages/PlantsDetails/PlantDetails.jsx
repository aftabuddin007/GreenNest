import React from 'react';
import { useNavigate, useParams } from 'react-router';
import usePlants from '../../Components/Hooks/Hooks';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading/Loading';

const PlantDetails = () => {
  const navigate = useNavigate();
    const {id} = useParams();
    
    const {plants,loading} = usePlants()
    const plant = plants.find(p => String(p.plantId)  === id)
    // console.log(plant)
if(loading){
    return <div><Loading></Loading></div>
}
const {image,plantName,price,rating,description,availableStock,careLevel,category,providerName} = plant || {};


const handleBook = (e)=>{
    e.preventDefault()
    const form =e.target
    const name =form.name.value
    const email =form.email.value
    console.log(name,email)
    toast.success('Your mail can sent successfully')
    form.reset()
}

const handleBack = ()=>{
    navigate(-1)
  }

    return (
        
 <div className='bg-green-50 shadow-md p-8 rounded-2xl my-10 max-w-7xl mx-auto'>
    <div className="  flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl mx-auto border border-green-100">
      <div className="flex-1 flex justify-center">
        <img
          src={image}
          alt={plantName}
          className="w-80 h-80 object-contain rounded-xl"
        />
      </div>
      <div className="flex-1 text-left space-y-3">
        <h2 className="text-3xl font-semibold text-green-800">
          {plantName}
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-700">
           Price: ${price}
          </span>
         
        </div>
        <p className="text-gray-700 leading-relaxed text-sm">
          <span className='text-green-700 font-semibold text-xl'>Description:</span> {description}
        </p>
        <div className="flex items-center text-yellow-500 text-lg">
  {"⭐".repeat(Math.round(rating || 0))}{" "}
  <span className="text-gray-600 text-sm ml-2">
    ({rating?.toFixed ? rating.toFixed(1) : "N/A"})
  </span>
</div>
        <p className="text-gray-700 text-sm">
          <span className="font-semibold text-green-900">Category:</span>{" "}
          {category}
        </p>
        <p className="text-gray-700 text-sm">
          <span className="font-semibold text-green-900">Provider:</span>{" "}
          {providerName}
        </p>
        <p className="text-gray-700 text-sm">
          <span className="font-semibold text-green-900">Care Level:</span>{" "}
          {careLevel}
        </p>

      
        <p className={`font-semibold ${
            availableStock > 0 ? "text-green-700" : "text-red-500"}`}>
          {availableStock > 0
            ? `Available Stock: ${availableStock}`
            : "Out of Stock"}
        </p>

       
      </div>
    </div >
    <form onSubmit={handleBook} className='items-center justify-center flex mt-10 mb-20'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-center text-3xl font-bold '>Book Consultation</h2>
        <fieldset className="fieldset">
          <label className="label text-xl">Name</label>
          <input name='name' type="text" className="input text-gray-300" placeholder="Name" />
          <label className="label text-xl">Email</label>
          <input name='email' type="email" className="input text-gray-300" placeholder="test@gmail.com" required />
          
          <button  className="btn btn-success mt-4">Book Now</button>
        </fieldset>
      </div></div>
      </form>
      <div className='card-actions justify-center mb-10'>
        <button onClick={()=>handleBack()}  className='btn btn-primary'>Go Back</button>
      </div>
 </div>
    );
};

export default PlantDetails;