import log from "../assets/images/logo-two.svg";
import nosleft from "../assets/images/nosleft.png";
import rubyright from "../assets/images/rubyright.png";
import emeraldleft from "../assets/images/emeraldleft.png";
import google from "../assets/images/google.png";
import planter from "../assets/images/planter.jpg";
import green from "../assets/images/green.webp";
import peoopl from "../assets/images/peoopl.PNG";
import { NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai"

const Home = () => {
 
  return (
    <div className="bg-nostalgia-bg bg-cover bg-no-repeat bg-center-left">
        <div className="pt-[5rem] md:pt-[20vh] lg:pt-[52vh] pb-[5rem] md:pb-[3rem] lg:pb-40 bg-hero bg-cover bg-center grid place-items-center px-5">
            < img src={log} alt="hero" className="w-[17rem] mb-20"/>
            <img src={google} alt="google" className="w-8 h-8 rounded-full object-cover" /> 
            <p className="text-white text-xl flex items-center justify-center">5.0 <AiFillStar className="text-yellow-500 ml-3"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/> </p>
            < NavLink to='/reviews' className=" text-gray underline"> Read Our 54 reviews </NavLink >
        </div>
        <div className="grid md:grid-cols-2 bg-dep">
            <img src={planter} alt="planter" className=" order-1 md:order-none h-full object-cover w-full"/>
            <div className="relative pt-[12rem] order-2 md:order-none grid place-items-center md:pt-4 pb-16 px-3">
                <div className=" bg-colprm w-[2px] h-[4rem] hidden md:grid"></div>
                <img src={nosleft} alt="rubyright" className=" bottom-[70%] absolute  md:static w-2/3 md:order-none md:w-[17rem] object-cover " />
                <h2 className="text-colprm my-1 text-xl sm:text-3xl text-center font-bold"> NOSTALGIA BLEND </h2>
                <div className="bg-colprm w-[5rem] h-[3px]"></div>
                 <p className="text-white my-3 text-center">
                    Our Nostalgia blend, a full-bodied coffee, is an elegant deep flavour with touches of sweet vanilla, chocolate and brown sugar sweetness. Our signature blend is grown at 1160m altitude, ensuring our farmers can
                    unlock the full potential of the bean.
                </p>
                < NavLink to='/nostalgia' className="text-colprm border-2 border-colprm py-2 px-10 font-bold text-xl duration-500 hover:bg-colprm hover:text-white"> BUY NOW </NavLink > 
            </div>

            <div className="order-4 relative pt-[12rem] md:order-none grid place-items-center md:pt-4 pb-16 px-3">
                <div className=" bg-colprm w-[2px] h-[4rem] hidden md:grid"></div>
                <img src={rubyright} alt="rubyright" className=" bottom-[70%] absolute md:static w-2/3 md:order-none md:w-[17rem] object-cover" />
                <h2 className="text-ruby my-1 text-xl sm:text-3xl text-center font-bold"> RUBY BLEND </h2>
                <div className="bg-ruby w-[5rem] h-[3px]"></div>
                <p className="text-white my-3 text-center">
                    Our Nostalgia blend, a full-bodied coffee, is an elegant deep flavour with touches of sweet vanilla, chocolate and brown sugar sweetness. Our signature blend is grown at 1160m altitude, ensuring our farmers can
                    unlock the full potential of the bean.
                </p>
                < NavLink to='/ruby' className="text-colprm border-2 border-colprm py-2 px-10 font-bold text-xl duration-500 hover:bg-colprm hover:text-white"> BUY NOW </NavLink > 
            </div>
            <img src={peoopl} alt="planter" className="order-3 md:order-none h-full object-cover w-full"/>

            <img src={green} alt="planter" className="order-5 md:order-none h-full object-cover w-full"/>
            <div className="order-6 md:order-none relative pt-[12rem] grid place-items-center md:pt-4 pb-16 px-3">
                <div className="bg-colprm w-[2px] h-[4rem] hidden md:grid"></div>
                <img src={emeraldleft} alt="emeraldleft" className=" bottom-[70%] absolute md:static w-2/3 md:order-none md:w-[17rem] object-cover" />
                <h2 className="text-emerald my-1 text-xl sm:text-3xl text-center font-bold"> EMERALD BLEND </h2>
                <div className="bg-emerald w-[5rem] h-[3px]"></div>
                <p className="text-white my-3 text-center">
                    Our Nostalgia blend, a full-bodied coffee, is an elegant deep flavour with touches of sweet vanilla, chocolate and brown sugar sweetness. Our signature blend is grown at 1160m altitude, ensuring our farmers can
                    unlock the full potential of the bean.
                </p>
                < NavLink to='/nostalgia' className="text-colprm border-2 border-colprm py-2 px-10 font-bold text-xl duration-500 hover:bg-colprm hover:text-white"> BUY NOW </NavLink > 
            </div>

            
        </div>

  </div>
    );
};

export default Home;
