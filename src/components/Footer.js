import { NavLink } from "react-router-dom"
import visa from "../assets/images/visacard.png"
import log from "../assets/images/logo-two.svg";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";



const Footer = () => {
  return (
     <div className=" px-3 sm:px-12 py-12 md:px-14 grid place-items-center lg:px-6">
        <div className="flex flex-col items-center justify-center gap-14 mb-12 md:flex md:flex-row md:flex-wrap md:justify-center md:items-center lg:grid lg:place-items-start lg:grid-cols-mygrid">
               
             <div className="flex flex-col items-center gap-2 md:items-start">
                <h6 className="text-colprm font-medium ">MENU</h6>
                < NavLink to='/' className="text-20 text-white font-medium"> HOME </NavLink >
                < NavLink to='/about' className="text-16 text-white font-medium"> ABOUT US </NavLink >
                < NavLink to='/shop' className="text-16 text-white font-medium"> SHOP NOW </NavLink >
                < NavLink to='/reviews' className="text-16 text-white font-medium"> SUBSCRIPTIONS </NavLink >    
                <NavLink to='/subscriptions' className="text-16 text-white font-medium"> CONTACT US </NavLink >
             </div>

            <div className="flex flex-col items-center gap-2 order-last md:items-start md:order-none">
                <h6 className="text-colprm font-medium ">LEGAL</h6>
                 < NavLink to='/' className="text-16 text-white font-bold"> TERMS & PRIVACY  </NavLink >
                 < NavLink to='/about' className="text-16 text-white font-bold"> REFUNDS & SHIPPING </NavLink > 
                  <div className=" flex gap-4 mt-2">
                     <GrInstagram size={26} className="text-colprm  cursor-pointer"/>
                     <FaFacebook size={26} className="text-colprm  cursor-pointer"/>
                   </div>
            </div>

    
            <img src={log} alt="logo" className="w-[13rem] order-first lg:order-none "/>
    

            <div className="flex flex-col gap-4 items-center md:order-last lg:items-start lg:w-auto">
                <h6 className="text-colprm font-medium ">NOSTALGIA MEMBER</h6>
                <p className="text-white text-center lg:text-left ">Become a Nostalgia member to receive 
                    exclusive offers, products and news.
                     Simply enter your email to become a
                      member today!
                </p>
                <form action="#" className="grid gap-2 place-items-center bg-transparent mt-8 w-full md:place-items-start">
                    <input type="text" placeholder="Name" className="text-white w-full p-2 bg-transparent border-gray rounded-sm border-[1px] hover:outline-none"/>
                    <input type="email" placeholder="Email" className="text-white w-full p-2 bg-transparent border-gray rounded-sm  border-[1px] hover:outline-none"/>
                    <button className="py-2 px-auto w-[10rem] border-2 text-colprm border-colprm hover:text-white">SIGN UP</button>
                </form >
            </div>
         </div>

           <img src={visa} alt="visa" className="h-6 mb-4 w-[12rem]"/>
            <p className="text-gray text-center">ALL RIGHTS RESERVED BY NOSTALGIA - WEBSITE BY TGDC</p>
   
         </div>
        );
};

export default Footer;
