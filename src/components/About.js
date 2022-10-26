import React from "react";
import tripple from "../assets/images/tripple.png";
import farmer from "../assets/images/farmer.jpg";
import harvest from "../assets/images/harvest.jpeg";
import workers from "../assets/images/workers.jpg";
import aboutnos from "../assets/images/aboutnos.png";
import aboutruby from "../assets/images/aboutruby.png";
import aboutemerald from "../assets/images/aboutemerald.png";
import certs from "../assets/images/certs.png";
import { NavLink } from "react-router-dom";




const About = () => {
  return (
      <div className="">
       <section className="bg-about bg-cover py-[5rem] px-4 lg:py-[9rem] flex flex-col items-center justify-center">
            <h5 className="text-colprm font-bold  text-center text-4xl tracking-wider">OUR</h5>
            <h5 className="text-colprm font-bold  text-center text-4xl tracking-wider">MISSION</h5>
            <div className="bg-colprm w-16 h-1 my-8"></div>
            <p className=" text-white text-center" >To provide the best quality coffee from social and environmentally responsible <br /> 
                farms. We connect farmers and coffee enthusiasts to produce one of the best <br />
                products on the market. <span className="font-bold"> Coffee is all about people, love and passion. </span>
            </p>
       </section>

    <section className="ben px-4 sm:px-16 py-10 sm:py-36 grid place-items-center lg:grid-cols-2 gap-10 lg:gap-20">
        <img src={tripple} alt="tripple" className=""/>
        <div className="grid place-items-center">
            <h3  className="text-colprm font-bold text-2xl md:text-4xl text-center tracking-wider">COFFEE ENTHUSIASTS</h3>
            <div className="bg-colprm w-16 h-1 my-1"></div>
            <p className="text-white mb-4 text-center">
                Nostalgia Coffee was founded as a way to connect everyday home baristas with world leading coffee beans from award winning farms. In our store, every day, we hand blend and roast a selection of specialist beans, and promptly deliver them to customers. Consistent quality is important to us and you, so we roast our beans daily to meet demand.
            </p>
            <p className="text-white text-center">
                We only select the finest quality green beans, from two select growing regions that meet our strict guidelines. They include criteria such as the quality of the bean, the consistency of flavour and strength, the aroma of the coffee, the taste, eco-friendly crops and the ethics of the farm just to name a few.
            </p>
        </div>
    </section>

    <section className="px-3 smpx-16 grid place-items-center lg:grid-cols-mygrids gap-20 py-16">
        <div class="para-left flex flex-col">
            <h2  className="text-colprm text-center font-bold text-2xl md:text-3xl lg:text-4xl tracking-wider">WHO ARE WE</h2>
            <div className="bg-colprm w-16 h-1 self-center sm:self-start my-5"></div>
            <div className="grid md:grid-cols-2 gap-1 md:gap-5 lg:gap-10">
                <p className="text-white mb-4">Mitchell and I both spent 4 years in the Australian army
                    , that’s where we met each other, and that’s where our
                     true love for coffee really started. Anybody who has 
                     spent time in the military knows that you spend a lot
                      of time away from home, friends and family in some
                       pretty challenging environments, and there are a 
                       very limited amount of luxuries when you are out on exercises, usually 
                       for a few weeks at a time. There definitely isn’t a whole lot to look forward to out there, but something I’m sure everyone can relate to, is the enjoyment of sitting down with your closest mates, and enjoying a coffee together, particularly in the colder months, sometimes it’s the only thing to look forward too. That’s when we both 
                    started to develop a strong connection and love for
                </p>
                <p className="text-white ">
                    coffee. And thinking back to them moments really does have a nostalgic feel about it, which is how our name ties into it all.
    
                    Since discharging, we both made it our mission to find the best coffee that we could, and once we did that, we thought why not share this experience with others. We started with other friends from the army, and since then have expanded to providing as high-quality coffee beans to customers as we can and really focusing on providing the best customer experience that we can for them as well, making sure that are always freshly roasted, and delivered in a timely matter, which is super important to us.
                </p>
            </div>
           
        </div>
    
        <img src={farmer} alt="farmer" className="h-[30rem] object-cover w-full order-first lg:order-none"/>
        
    </section>

    <section className="px-4 sm:px-16 py-4 bg-aboutnos bg-cover bg-fixed">
        <div className="bg-colprm w-[2px] h-[10rem] my-5"></div>
        <h2 className="text-colprm font-bold text-2xl tracking-wider">NOSTALGIA <br /> BLEND</h2>
        <div className="bg-colprm w-16 h-[2px] my-4"></div>
        
        <div className="grid md:grid-cols-megrid gap-10 my-10">     
            <img src={aboutnos} alt="aboutnos" />      
            <div className="grid md:grid-cols-2 gap-2 md:gap-10">
                <div >
                    <p className="text-white mb-4 md:mb-8">
                        Pedro Gabarra, Joao Newton’s son, is the 6th 
                        generation of coffee growers in his family, 
                        accumulating valuable knowledge transmitted from
                         his father, Joao Newton Teixeira, and his grandfather. 
                         Located in the South of Minas Gerais, a vast and hilly region,
                        coffees from Camp das Vertentes have soft chocolate notes, medium acidity and complex aroma
                        of fruits and flowers. It is not uncommon to see Pedro picking 
                        the cherries during the harvest time. Coffee is more than a business; coffee is a passion for the family.
                    </p>
                    <p className="text-white" >
                        The farm maintains more than 40% of the total area for
                         reforestation/legal reserve, showing the respect they have 
                        for the environment and the cultural history of the 
                        land.
                    </p>
                </div>
                <div class="two">
                    <p className="text-white mb-4 md:mb-8">They currently have 5 different and permanent projects that aim to create environmental awareness, a better relationship between the workers’ families and a hope for a better future for the generations to come.</p>
                    <p className="text-white mb-4 md:mb-8">The care for the environment is paramount at the farm and it is recognised by the certifications they carry. In 2019 they were awarded the most sustainable farm in Brazil.
                        Pedro’s farm is part of WINGS project as rehabilitation and release area. They take care of 2 aviaries to help and release native birds back to the wild.
                    </p>
                    < NavLink to='/nostalgia' className="text-colprm border-2 border-colprm  text-xl  font-bold center py-2 px-8 duration-500 hover:bg-colprm hover:text-white"> BUY NOW </NavLink > </div>
            </div>
        </div>
    </section>

    <section className="px-4 sm:px-[5rem] grid place-items-center py-10">
        <div className="grid grid-cols-3 gap-3 sm:gap-10">
            <img src={farmer} alt="farmer" className="w-full fit-cover h-full"/>
            <img src={workers} alt="workers" className="w-full fit-cover h-full"/>
            <img src={harvest} alt="harvest" className="w-full fit-cover h-full"/>
        </div>
        <p className="text-white my-8 md:my-14 font-bold text-lg text-center md:text-xl">
            THIS FARM CARRIES THE FOLLOWING CERTIFICATIONS:
        </p>
        <img src={certs} alt="certs" className="h-[2.6rem] sm:h-[4rem]"/>
        <div className="bg-colprm w-16 h-1 my-6"></div>
        <p className="text-colprm italic text-center text-xl md:text-2xl mb-4">
            "What is essential to us is the human relationship, mutual respect, and also respect for the nature, and most of all, our passion for coffee. For me and for my family, coffee was never only coffee, for me coffee is the same as passion, coffee is life, coffee is movement"
        </p>
        <h6 className="text-white">~ Pedro</h6>
    </section>


    <section className="px-4 sm:px-16 flex flex-col items-end py-4 bg-aboutruby bg-cover bg-fixed">
  
         <div className="bg-colprm w-[2px] h-[10rem] my-5"></div>
         <h2 className="text-ruby font-bold text-2xl tracking-wider">RUBY<br /> BLEND</h2>
         <div className="bg-colprm w-16 h-[2px] my-4"></div>    
        
        <div className="grid md:grid-cols-mygrids gap-10 my-10">   
                  
            <div className=" grid md:grid-cols-2 gap-2 md:gap-10">
                <div >
                    <p className="text-white mb-4 md:mb-8">
                    Flavia and Gabriel’s ancestors have been growing coffee for nearly 150 years in the Alta Mogiana region, Sao Paulo. The area is impressive, approximately 8,000 hectares where they plant mainly Bourbon and Mundo Novo varieties.
                    </p>
                    <p className="text-white  md:mb-8" >
                        Mogiana is one of the oldest Brazilian coffee production regions. Its altitude helps develop high sugar content, low acidity, buttery and a strong presence of caramels and toffee. The farm has been awarded in local and national competitions as one of the best coffees from Alta Mogiana region, the same region Marcelo Brussi’s grandfather was born in 1913, inside a coffee farm. The care and passion from producing high quality coffee has been inherited by Flavia and Gabriel son’s, Lucas and Gabriel. By using traditional methods for drying coffee, the farm is known by its unique coffee flavour and delivers caramel and sweetness to any coffee cup it has been part of.
                    </p>
                </div>
                <div class="two">
                   <p className="text-white mb-4 md:mb-8">
                      The farmers from Bom Jesus proudly support a project which aims to promote social and environmental responsibility and awareness in younger generations.                  
                   </p>
                   <p className="text-white mb-4 md:mb-8">The care for the environment is paramount at the farm and it is recognised by the certifications they carry. In 2019 they were awarded the most sustainable farm in Brazil.
                      In 2008, they’ve launched a project that aims to promote social and environmental responsibilities and to create environmental awareness on early generations. In 2007, GIMA (The intercity Games for the Environment) celebrated its 10th edition and reunited more than 900 children from 5 surrounding towns on a day to celebrate life and spread love. During the special day, there are exciting games, involving adults and children around our greatest gift: the environment.
                    </p>
                    < NavLink to='/ruby' className="text-colprm border-2 border-colprm  text-xl  font-bold center py-2 px-8 duration-500 hover:bg-colprm hover:text-white"> BUY NOW </NavLink > </div>
            </div>
            <img src={aboutruby} alt="aboutruby" className="order-first md:order-none"/>
        </div>
    </section>
    <section className="px-4 sm:px-[5rem] grid place-items-center py-10">
        <div className="grid grid-cols-3 gap-10">
            <img src={farmer} alt="farmer" className="w-full fit-cover h-full"/>
            <img src={workers} alt="workers" className="w-full fit-cover h-full"/>
            <img src={harvest} alt="harvest" className="w-full fit-cover h-full"/>
        </div>
        <p className="text-white my-8 md:my-14 font-bold text-center text-lg md:text-xl">
            THIS FARM CARRIES THE FOLLOWING CERTIFICATIONS:
        </p>
        <img src={certs} alt="certs" className="h-[2.6rem] sm:h-[4rem]"/>
        
    </section>


    <section className="px-4 sm:px-16 py-6 bg-aboutemerald bg-cover bg-fixed">
        <div className="bg-colprm w-[2px] h-[10rem] my-5"></div>
        <h2 className="text-emerald font-bold text-2xl tracking-wider uppercase">Emerald <br /> BLEND</h2>
        <div className="bg-colprm w-16 h-[2px] my-4"></div>
        
        <div className="grid md:grid-cols-megrid gap-10 my-10">     
            <img src={aboutemerald} alt="aboutemerald" />      
            <div className="grid md:grid-cols-2 gap-2 md:gap-10">
                <div >
                    <p className="text-white mb-4 md:mb-8">
                       Peru is the largest exporter of organic arabica globally. With extremely high altitudes, and fertile soils the countries, smallholder farmers, also produce some stunning specialty coffees. The warm days and cool nights from their farms locations at 1600m above sea level, creates ideal conditions for growing dence, sweet beans.  
                    </p>
                    <p className="text-white mb-4 md:mb-8" >
                      Today Peruvian coffee growers are overwhelming small scale. Farmers in Peru usually process their process on their own farms. Most coffee is fully washed.
                    </p>
                </div>
                <div class="two">
                    <p className="text-white mb-4 md:mb-8">
                    Cherry is usually pulped, fermented, and dried in the sun on raised beds, called drying sheds. Drying greenhouse parabolic heads are becoming more common as farmers pivot towards specialty markets. 
                    </p>
                     < NavLink to='/' className="text-colprm border-2 border-colprm  text-xl  font-bold center py-2 px-8 duration-500 hover:bg-colprm hover:text-white"> COMING SOON </NavLink >
                 </div>
            </div>
        </div>
    </section>

    <section className="px-4 sm:px-[5rem] grid place-items-center py-10">
        <div className="grid grid-cols-3 gap-10">
            <img src={farmer} alt="farmer" className="w-full fit-cover h-full"/>
            <img src={workers} alt="workers" className="w-full fit-cover h-full"/>
            <img src={harvest} alt="harvest" className="w-full fit-cover h-full"/>
        </div>
        <p className="text-white my-8 md:my-14 font-bold text-center text-lg md:text-xl">
            THIS FARM CARRIES THE FOLLOWING CERTIFICATIONS:
        </p>
        <img src={certs} alt="certs" className="h-[2.6rem] sm:h-[4rem]"/>
        
    </section>



      </div>
      
      );
};

export default About;
