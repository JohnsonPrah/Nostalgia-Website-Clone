import google from "../assets/images/google.png";
import { NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai"
import rubyright from "../assets/images/rubright.jpg";
import nosbig from "../assets/images/nosbig.jpg";
import nosmalryt from "../assets/images/nosmalryt.jpg";
import nosmalback from "../assets/images/nosmalback.jpg";


const Ruby = () => {
  return (
      <div className="text-white pb-0">
         <section className="px-2 bg-review bg-cover relative bg-center duration-500 hover:bg-colprm hover:text-white grid place-items-center py-6 md:py-16 lg:py-28" > 
         <div className="absolute h-full w-full top-0 left-0  bg-[rgba(0,0,0,0.2)] z-[1]"> </div>
          
        <h5 className="text-colprm z-10 text-center text-lg md:text-2xl lg:text-3xl font-bold ">
            CONNECTING YOU WITH
        </h5>
       <h6 className="text-white z-10 text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            THE WORLD'S BEST BEANS
       </h6> 
    
        <div className="bg-colprm z-10 w-16 h-[3px] mb-8"></div>

       <img src={google} alt="google" className="w-8 h-8 rounded-full z-10" /> 
       <p className="text-white text-2xl flex items-center z-10 justify-center">5.0 <AiFillStar className="text-yellow-500 ml-3"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/><AiFillStar className="text-yellow-500"/> </p>
       < NavLink to='/reviews' className=" text-gray underline z-10"> Read Our 54 reviews </NavLink >
      
    </section>


    <section className="grid md:grid-cols-2 place-items-center px-2 md:px-6 py-10 gap-8">
        <div className="grid place-items-center">
            <img src={nosbig} alt="nosbig" className=""/>
            <div className="flex gap-4 justify-start">
                <img src={nosmalryt} alt="nosmalryt" />
                <img src={nosmalback} alt="nosmalback" />
            </div>
        </div>

        <div className="grid  ">
            <h4 className="text-colprm md:text-3xl text-2xl lg:text-4xl font-bold place-self-center md:place-self-start"> NOSTALGIA BLEND</h4>
            <div className="bg-colprm h-[3px] w-[5rem] my-3 place-self-center md:place-self-start"></div>
            <h6 className="text-lg text-center md:text-left">
                $17.95 - $49.95
            </h6>
            <p className="my-8 place-self-center md:place-self-start">Creamy and buttery mouthfeel with strong notes of honeycomb,<br />
                chocolate and watermelon. Delicate lychee acidity.
             </p>
             <p className="font-bold text-bold text-white text-center md:text-left">
                Country: <span className="font-normal text-base"> Brazil </span> <br />
                State:  <span className="font-normal text-base">Sao Paulo </span> <br />
                Region:  <span className="font-normal text-base">Alta Mogiana </span> <br />
                Altitude:  <span className="font-normal text-base">900m </span> <br />
                Variety:  <span className="font-normal text-base"> Yellow Topaz</span> <br />
                Processing: <span className="font-normal text-base">Natural </span> <br />
                Farmer: <span className="font-normal text-base">Luiz da Cunha  </span> <br />
                Certification:  <span className="font-normal text-base">IBD:Organic Brasil</span> <br />
                Strength:  <span className="font-normal text-base">3.5/5</span>
             </p>
             <div className="flex gap-4 mb-2 mt-2 items-center justify-start ">
                 <label htmlFor="kg" className="w-[8rem] font-bold text-xl grid  text-colprm">BAG SIZE</label>
                 <select name="kgs" id="kg" className="border-2 w-full text-white bg-transparent py-2 px-2">
                     <option value="choose an option">choose an option</option>
                     <option value="250g">250g</option>
                     <option value="500g">500g</option>
                     <option value="1kg">1kg</option>
                 </select>
             </div>

             <div className="flex gap-4  items-center justify-start mb-14">
                 <label htmlFor="grind" className="w-[8rem] font-bold text-xl  text-colprm">GRIND</label>
                 <select name="kgs" id="grind" className="w-full border-2 text-white bg-transparent py-2 px-2">
                     <option value="choose an option">choose an option</option>
                     <option value="250g">Whole Beans</option>
                     <option value="500g">Expresso</option>
                 </select>
             </div>
           
             <div className=" flex">
                <div className="py-2 px-4 text-black text-lg bg-white border-2 border-white"> - </div>
                <p className="py-2 px-4 text-white bg-transparent text-lg border border-white" > 1 </p>
                <div className="py-2 px-4 text-black text-lg bg-white border-2 border-white"> + </div>
                <p className="text-colprm border-2 py-2 px-10 text-xs sm:text-xl">ADD TO CART</p>
            </div>
           
        </div>
    </section>
    <div className="bg-nos-bg bg-cove bg-center bg-fixed grid place-items-center py-[1.5rem] md:py-[3rem] lg:py-[5rem] ">
        <h3 className="text-colprm font-bold text-2xl md:text-3xl lg:text-4xl">
            NOSTALGIA BLEND
        </h3>
        <p className="bg-colprm w-16 h-[3px] my-4"></p>
        <p className="text-white text-center w-[80%]">         
            Pedro Gabarra, Joao Newton’s son, is the 6th generation of coffee growers in his family, accumulating valuable knowledge transmitted from his father, Joao Newton Teixeira, and his grandfather. Located in the South of Minas Gerais, a vast and hilly region, coffees from Camp das Vertentes have
            soft chocolate notes, medium acidity and complex aroma of fruits and flowers.
        </p>
        < NavLink to='/about' className="text-colprm border-2 border-colprm my-8 font-bold text-xl center py-2 px-8  duration-500 hover:bg-colprm hover:text-white">  READ MORE </NavLink >
    </div>
    <div className="py-10 grid place-items-center px-3 sm:px-20 ">
        <h3 className="text-3xl text-center md:text-4xl lg:text-5xl  text-colprm font-bold mb-4">
            YOU MAY ALSO LIKE
        </h3>
        <div className="w-[5rem] h-[3px] bg-colprm mb-10"></div>
        <div className="grid place-items-center place-self-start">
            <img src={rubyright} alt="ruby" />
            <h6 className="text-white font-bold text-xl mt-4">
                RUBY BLEND
            </h6>
            <p className="text-colprm mb-4"> $17.95 - $49.95</p>
            < NavLink to='/ruby' className="text-colprm border-2 border-colprm  text-xl  font-bold center py-2 px-8 duration-500 hover:bg-colprm hover:text-white"> SELECT OPTION </NavLink >
        </div>
    </div>
   
      </div>
  );
};

export default Ruby;
