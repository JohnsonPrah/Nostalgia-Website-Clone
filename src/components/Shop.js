import google from "../assets/images/google.png";
import { NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai"
import nosright from "../assets/images/nosright.jpg";
import rubright from "../assets/images/rubright.jpg";



const Shop = () => {
  
    
    return (
  <div >
    <section className="home bg-review relative bg-cover bg-center grid place-items-center py-6 md:py-16 lg:py-28" > 
    <div className="absolute h-full w-full top-0 left-0  bg-[rgba(0,0,0,0.2)] z-[1]"> </div>
          
        <h5 className="text-colprm z-10 text-center text-lg md:text-2xl lg:text-3xl font-bold ">
            CONNECTING YOU WITH
        </h5>
       <h6 className="text-white z-10 text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            THE WORLD'S BEST BEANS
       </h6> 
    
        <div className="bg-colprm z-10 w-16 h-[3px] mb-8"></div>

       <img src={google} alt="google" className="w-8 h-8 z-10 rounded-full" /> 
       <p className="text-white text-2xl flex z-10 items-center justify-center">5.0 <AiFillStar className="text-yellow-500 ml-3"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/> </p>
       < NavLink to='/reviews' className=" text-gray underline z-10 "> Read Our 54 reviews </NavLink >
      
    </section>

    <section className=" py-16 lg:py-28 flex  flex-col md:flex-row items-center justify-center gap-8">
        <div  className="grid place-items-center">
             <img src={ nosright} alt="nosright" className=""/>
            <h6 className="text-white font-bold mt-6">
                NOSTALGIA BLEND
            </h6>
            <p className="text-colprm mb-10">$17.95 - $49.95</p>
            < NavLink to='/nostalgia' className="text-colprm border-2 border-colprm  font-bold text-xl center py-2 px-8 duration-500 hover:bg-colprm hover:text-white"> SELECT OPTION </NavLink >
        </div>
        <div className="grid place-items-center"> 
            <img src={rubright } alt="rubright" className=""/>
            <h6 className="text-white font-bold mt-6">
                RUBY BLEND
            </h6>
            <p className="text-colprm mb-10">$17.95 - $49.95</p>
            < NavLink to='/ruby' className="text-colprm border-2 border-colprm  text-xl  font-bold center py-2 px-8 duration-500 hover:bg-colprm hover:text-white"> SELECT OPTION </NavLink >
        </div>
    </section>

  </div>
  );
};

export default Shop;
