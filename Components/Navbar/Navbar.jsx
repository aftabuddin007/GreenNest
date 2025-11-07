import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {user,logOut} = use(AuthContext)
  // console.log(user?.photoURL)
    const navLinkClass = ({isActive})=>
  isActive?'text-[#31e32ed4] underline font-bold':'hover:text-[#31e32ed4] hover:underline ';
const navigate = useNavigate()
    const handleLogOut=()=>{
      // console.log('log out')
      logOut()
      .then(res=>{
        toast.success('LogOut Successfully',res)
        navigate('/')
      })
      .catch(err=>{
        console.log(err)
      })
    }

    return (
        <div className='bg-green-100 shadow z-50'>
          
          <div className="navbar  max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
       <NavLink to='/' className={navLinkClass}><a >Home</a></NavLink>
      <NavLink to='/plants' className={navLinkClass}><a >Plants</a></NavLink>
      <NavLink to='/about' className={navLinkClass}><a >About Us</a></NavLink>
      
      <NavLink to='/my-profile' className={navLinkClass}><a >My Profile</a></NavLink>
      </ul>
    </div>
    <div className='flex'>
        <Link to='/'>  <img src='https://img.icons8.com/color/48/deciduous-tree.png' alt="" className='h-[40px]'/></Link>
<Link to='/' className="btn btn-ghost text-xl text-[#31e32ed4] font-bold">GreenNest</Link>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1 gap-3 text-[18px] font-semibold">
      <NavLink to='/' className={navLinkClass}>Home</NavLink>
      <NavLink to='/plants' className={navLinkClass}>Plants</NavLink>
      <NavLink to='/about' className={navLinkClass}>About</NavLink>
      
      <NavLink to='/my-profile' className={navLinkClass}>My Profile</NavLink>
    </ul>

  </div>
  {/* <p>{user&&user.email}</p> */}
  <div className="navbar-end flex gap-3">
    
    {
      user ? (<div className='flex justify-between items-center gap-4'>
    <div >

<div className="dropdown dropdown-end z-50">
  <div tabIndex={0} role="button" className=" m-1"><img src={user?.photoURL } alt="image" className='w-12 h-12 rounded-full object-cover'/></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li>     <p>{user.displayName}</p>
</li>
    <li><button onClick={handleLogOut} className="btn text-[white] bg-[linear-gradient(125deg,#16A34A_5.68%,#4ADE80_88.38%)]
"> LogOut</button></li>
  </ul>
</div>


      
    </div>

    </div>)
    :(<div className='flex justify-between gap-5'>
<Link to='/auth/login' className="btn text-[white] bg-[linear-gradient(125deg,#16A34A_5.68%,#4ADE80_88.38%)]
"> Login</Link>
<Link to='/auth/signup' className="btn text-[white] bg-[linear-gradient(125deg,#16A34A_5.68%,#4ADE80_88.38%)]
"> SignUp</Link>
</div>)
    }
    
  </div>
</div>
        </div>





    );
    
};

export default Navbar;


