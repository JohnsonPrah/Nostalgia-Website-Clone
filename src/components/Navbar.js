import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import log from "../assets/images/logo-two.svg";
import { FaFacebook } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";


const Navbar = () => {

  const [toggle,setToggle] = useState(false);

  const [drop,setDrop] = useState(false)

  const whenClicked = () => setToggle(false);

  const activeLink = "border-b-[2px] text-16 border-colprm text-colprm font-bold ";
  const actLink = "border-b-[2px] text-16 border-colprm text-colprm font-bold px-1 flex items-center relative";
  const act = "relative text-16 text-white px-1 flex items-center hover:text-colprm transiton-all duraton-500 ease-in";
  const norm = "text-16 text-white transiton-all duraton-500 ease-in hover:border-colprm hover:border-b-[2px] hover:text-colprm";
  const logg ="text-white text-16 hover:text-colprm hover:border-b-[2px] hover:text-colprm";




  return (
    <div className="className=w-full z-20 shadow-xl flex justify-between lg:px-20 md:px-16  items-start h-[7rem] px-4 ">  
         <button onClick={()=> setToggle( prev => !prev)} className="text-white lg:hidden cursor-pointer mt-6 mr-6">
            <FiMenu  size={26} />
         </button> 
         <  NavLink to="/" > 
            <img src={logo} alt="logo" className="w-[14rem] h-[5rem] cursor-pointer"/>
         </ NavLink >
         
         <div className="flex-col justify-center items-center hidden lg:flex mt-4 gap-2">
            <div className="flex gap-6 justify-center items-center">
                < NavLink end to='/' className={({isActive}) => isActive ? activeLink : norm}> HOME </NavLink >
                < NavLink to='/about' className={({isActive}) => isActive ? activeLink : norm}> ABOUT US </NavLink >
                < NavLink to='/shop' onMouseEnter={()=> setDrop(true)} onMouseLeave={()=> setDrop(false)} className={({isActive}) => isActive ? actLink : act}> SHOP NOW <RiArrowDownSFill className="ml-1"/>
                   {drop && <div className="grid absolute top-[110%] w-[10rem] bg-black">
                      < NavLink to='/nostalgia' className="text-16 text-white font-bold hover:bg-gray px-1 py-2" onClick={()=>setDrop(false)}> NOSTALGIA BLEND </NavLink >    
                      <NavLink to='/ruby' className="text-16 text-white font-bold hover:bg-gray px-1 py-2" onClick={()=>setDrop(false)}> RUBY BLEND </NavLink >
                   </div>
                   }
                </NavLink >
                < NavLink to='/reviews' className={({isActive}) => isActive ? activeLink : norm}> REVIEWS </NavLink >    
            </div>
            <div className="mt-3">
                <NavLink to='/subscribe' className={({isActive}) => isActive ? activeLink : norm}> SUBSCRIPTIONS </NavLink >
            </div>
         </div>

         <div className=" flex mt-4"> 
             <div className="hidden lg:flex items-center gap-4">
                <FaFacebook size={20} className="text-16 text-white cursor-pointer hover:text-colprm hover:translate-y-1"/>
                <GrInstagram size={20} className="text-16 text-white cursor-pointer hover:text-colprm hover:translate-y-1"/>
                < NavLink to='/login' className={({isActive}) => isActive ? activeLink : logg}> LOGIN </NavLink >
             </div>
             <AiOutlineShoppingCart size={20} className="text-16 mt-3 sm:mt-3 ml-6 text-white cursor-pointer hover:text-colprm hover:translate-y-1"/>
         </div> 

        
         {toggle && ( 
         <div className='fixed z-20 top-0 left-0 w-full h-screen bg-black gap-4 flex flex-col items-center justify-center text-white'>
            <img src={log} className="w-[25rem] h-[10rem]" alt="log"/>
            < NavLink to='/' className="text-16 text-white font-bold hover:text-colprm transiton-all duraton-500 ease-in" onClick={whenClicked}> HOME </NavLink >
            < NavLink to='/about' className="text-16 text-white font-bold hover:text-colprm transiton-all duraton-500 ease-in" onClick={whenClicked}> ABOUT US </NavLink >
            < NavLink to='/shop' className="text-16 text-white px-4 font-bold hover:text-colprm transiton-all duraton-500 ease-in" onClick={whenClicked}> SHOP </NavLink >
            < NavLink to='/nostalgia' className="text-16 text-white font-bold hover:text-colprm transiton-all duraton-500 ease-in" onClick={whenClicked}> NOSTALGIA BLEND </NavLink >    
            <NavLink to='/ruby' className="text-16 text-white font-bold hover:text-colprm transiton-all duraton-500 ease-in" onClick={whenClicked}> RUBY BLEND </NavLink >
            <NavLink to='/reviews' className="text-16 text-white font-bold hover:text-colprm transiton-all duraton-500 ease-in" onClick={whenClicked}> REVIEWS </NavLink >
            <NavLink to='/subscribe' className="text-16 text-white font-bold hover:text-colprm transiton-all duraton-500 ease-in" onClick={whenClicked}> SUBSCRIPTIONS </NavLink >
            <NavLink to='/contact' className="text-16 text-white font-bold hover:text-colprm transiton-all duraton-500 ease-in" onClick={whenClicked}> CONTACT </NavLink >
            <div className="w-[80%] mx-auto  my-2 h-[2px] bg-colprm" font-bold></div>
            <NavLink to='/login' className="text-16 text-white font-bold hover:text-colprm transiton-all duraton-500 ease-in" onClick={whenClicked}> LOGIN </NavLink >
           
            <button onClick={()=> setToggle( false)} className="text-white hover:text-colprm transiton-all duraton-500 ease-in absolute top-6 right-4" >
              <MdOutlineClose size={30} />
            </button> 
         </div> )
        }
        </div>
  );
};

export default Navbar;
