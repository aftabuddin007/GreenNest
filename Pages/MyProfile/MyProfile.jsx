import React, { use, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const MyProfile = () => {
const {user,setUser} = use(AuthContext)
// console.log(user)
const [name,setName]=useState(user.
displayName||'')
const [photoURL,setPhotoURL]=useState(user?.photoURL||'')

const handleUpdate = ()=>{
  if(!user) return alert('no user found');
updateProfile(user,{
  
      displayName: name ||user.displayName,
      photoURL: photoURL || user.photoURL
})
.then(()=>{
  const updatedUser = {...user, displayName: name || user.displayName, photoURL: photoURL || user.photoURL}
  setUser(updatedUser)
  toast.success('Profile Updated Successfully')
  setName('')
  setPhotoURL('')

})
.catch(err=>{
  console.log(err.message)
})



}
    return (
        <div className='max-w-3xl mx-auto my-30  bg-green-200 py-4 rounded-lg border-1 shadow-xl '>
            <h1 className='text-3xl text-center font-semibold mb-3'>My Profile</h1>
            <div className="hero  ">
                
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={user?.photoURL}
      className="w-40 h-40 object-cover rounded-lg shadow-xl"
    />
    <div>
        <h1>

        </h1>
      <h1 className="text-xl "><span className='font-semibold'>Name:</span> {user.
displayName}</h1>
      <p className='text-xl my-6'><span className='font-semibold'>Email:</span> {user.email}</p>

        <div className="dropdown dropdown-top dropdown-center">
  <div tabIndex={0} role="button" className=" m-1 "><button  className="btn btn-primary">Update Profile</button></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 py-5 px-3  shadow-sm">
    <h2 className='font-bold text-center text-xl'>Update You Profile</h2>
    <li>
      <label >Name</label>
      <input className='border' 
      type="text" 
      value={name}
      
      onChange={(e)=>setName(e.target.value)}
      placeholder='Enter New Name'/></li>
    <li>
      <label >Photo URL</label>
      <input className='border' 
      type="text" 
      value={photoURL}
      
      onChange={(e)=>setPhotoURL(e.target.value)}
      placeholder='Enter Photo URL'/></li>
      <li>
        <button onClick={handleUpdate} 
        className='btn btn-primary mt-3'>Save Change</button></li>
  </ul>
</div>


      
    </div>
  </div>
</div>
        </div>
    );
};

export default MyProfile;