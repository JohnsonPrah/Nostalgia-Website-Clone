import { AiFillStar } from "react-icons/ai"
import { NavLink } from "react-router-dom";
import google from "../assets/images/google.png";
import convenience from "../assets/images/convenience.svg";
import discount from "../assets/images/discount.svg";
import nosright from "../assets/images/nosright.jpg";
import rubright from "../assets/images/rubright.jpg";


const Subscription = () => {
  return ( 
    <div className="home"> 
         
    <section className="bg-subscribe relative px-5 bg-cover bg-center bg- grid place-items-center py-24">
        <div className="absolute h-full w-full top-0 left-0  bg-[rgba(0,0,0,0.6)] z-[1]"> </div>
        <h1 className="text-colprm z-10 text-center bg-cover mb-2 text-3xl md:text-4xl lg:text-5xl font-bold">FRESHLY ROASTED COFFEE</h1>
        <h3 className="text-colprm z-10 text-center mb-4 text-2xl md:text-3xl lg:text-4xl ">DELIVERED TO YOUR DOOR</h3>
        <div className="bg-colprm w-[3rem] h-[2px] my-4 "></div>
        <p className="text-white mb-8 z-10 text-center">
            We know how important fresh coffee is to you. That’s why every day, we roast all beans and post all orders, 
            to maximise potential of our <br /> blends.  Delivered at your choice of frequency and size with our easy subscription service. We make sure you always have the best premium 
            <br /> roasted arabica beans delivered to 
            your door. Only a few minutes to setup 
            and then you’ll never run out of fresh roasted coffee again.  
       </p>

        < NavLink to='/nostalgia' className="duration-500 z-10 hover:bg-colprm hover:text-white text-colprm border-2 border-colprm py-2 px-10 font-bold text-xl mb-6"> SUBSCRIBE NOW </NavLink >
        <img src={google} alt="google" className="w-8 h-8 z-10 rounded-full" /> 
        <p className="text-white text-2xl flex z-10 items-center justify-center ">5.0 <AiFillStar className="text-yellow-500 ml-3"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/> </p>
        < NavLink to='/reviews' className=" text-gray z-10 underline duration-500 hover:text-white "> Read Our 54 reviews </NavLink >

    </section>

    <section className="px-6 grid place-items-center ben">
        <div className="bg-colprm w-[2px] z-10 relative -top-16 h-[10rem]"></div>
        <h5 className="text-colprm text-2xl text-center md:text-3xl lg:text-4xl -mt-1 mb-3 font-semibold">EXCLUSIVE BENEFITS FOR MEMBERS</h5>
        <div className="bg-colprm w-[5rem] h-[3px] mb-10"></div>
        <div className="grid place-items-center md:grid-cols-3 gap-x-8">
            <div className="flex flex-col items-center justify-center">   
                <img src={discount} alt="discount" className="w-1/2 md:w-2/3 lg:w-1/2 md:[8rem]"/>
                <h4 className="text-colprm text-2xl my-6 font-bold">DISCOUNT</h4>
                <p className="text-white text-center">
                    By being an exclusive member of nostalgia   
                     coffee, you 
                    will enjoy a 10% discount on all    products.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <img src={convenience} alt="convenience" className="w-1/2 md:w-2/3 lg:w-1/2 md:[8rem] "/>
                <h4 className="text-colprm text-2xl my-6 font-bold">CONVENIENCE</h4>
                <p className="text-white text-center">
                    We know how important fresh coffee is to you. <br /> That’s why every day, we roast all
                     beans and post all orders, to maximise 
                     potential of our  blends. Deliv
                    ered at your choice of frequency and size.
                </p>
            </div>
          
            <div className="flex flex-col items-center justify-center ">
                <img src={discount} alt="discount" className="w-1/2 md:w-2/3 lg:w-1/2 md:[8rem]"/>
                <h4 className="text-colprm text-2xl my-6 font-bold">COMMUNITY</h4>
                <p className="text-white text-center">
                    Exclusive business to business offers
                     only available to Nostalgia coffee
                    members.
                </p>
                <h6 className="text-white font-bold text-lg">COMING SOON</h6>
            </div>
          </div>  
            < NavLink to='/reviews' className="duration-500 hover:bg-colprm hover:text-white text-colprm border-2 border-colprm py-2 px-10 font-bold text-xl my-20  font-boldcenter"> START TODAY </NavLink >
    </section>

        
        
    <section className="pt-6 pb-10 px-auto mx-2">
        <div className="bg-colprm w-[1px] h-[10rem]"></div>
        <h1 className="text-colprm text-2xl my-8 font-bold">1. COFFEE BLEND</h1>
        <p className="text-white mb-40">Which coffee blend would you like ?</p>
        <div className="flex flex-col sm:flex-row gap-10 mb-28">
            <div className="grid place-items-center gap-6">
                <img src={nosright} alt="nosright" />
                <p className="text-white">Nostalgia Blend</p>
                < NavLink to='/nostalgia'  className="duration-500 hover:bg-colprm hover:text-white text-colprm border-2 border-colprm py-2 px-6 font-bold text-xl center"> SELECT </NavLink >
            </div>
            <div className="grid place-items-center gap-6">
                <img src={rubright} alt="rubright" />
                <p className="text-white">Ruby Blend</p>
               < NavLink to='/ruby'  className="duration-500 hover:bg-colprm hover:text-white text-colprm border-2 border-colprm py-2 px-6 font-bold text-xl center"> SELECT </NavLink >
            </div>
        </div>
        
        <p className="text-white">
          *You will be automatically billed prior to each delivery
        </p>
    </section>
   
      
    </div>
    );
};

export default Subscription;
