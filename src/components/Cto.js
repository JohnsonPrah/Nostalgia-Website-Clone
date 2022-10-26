import React from "react";
import { NavLink } from "react-router-dom";


const cto = () => {
  return (
    <div className="bg-cto bg-cover bg-center grid place-items-center pt-5 pb-16 px-3">
        <div className="bg-colprm w-[2px] h-[5rem] mb-2 md:block hidden"></div>
        <h2 className="text-colprm my-2 md:my-6 text-sm md:text-3xl text-center md:w-full">NEED NOSTALGIA COFFEE'S DELICIOUS BEANS REGULARLY ? </h2>
        <div className="bg-colprm w-[5rem] h-[2px]"></div>
        <p className="text-white my-3 md:my-6 sm:px-14 text-center">
            With our easy subscription service, we make sure you always have the best premium roasted
            arabica beans delivered to your door. Only a few minutes
            to setup and then you’ll never run out of fresh roasted coffee again.
        </p>
        < NavLink to='/subscriptions' className="text-colprm border border-colprm py-2 px-10 font-bold text-sm sm:text-xl duration-500 hover:bg-colprm hover:text-white"> SEE OUR SUBSCRIPTIONS </NavLink >  
    </div>
    );
};

export default cto;
