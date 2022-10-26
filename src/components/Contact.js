import React from "react";
import gogg from "../assets/images/gogg.png";
import { AiFillStar } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";


const Contact = () => {
  return (
  <section>
      <div className="bg-review relative bg-cover bg-bottom grid py-[5rem] lg:py-[11rem] place-items-center">
         <h6 className="text-colprm z-10 font-bold tracking-widest mb-6 text-2xl md:text-3xl lg:text-4xl">CONTACT</h6>
         <div className="bg-colprm w-14 z-10 h-[3px]"></div>
         <div className="absolute h-full w-full top-0 left-0  bg-[rgba(0,0,0,0.2)] z-[1]"> </div>   
      </div>

      <section className="grid md:grid-cols-2 gap-10 py-10 px-[1rem] xl:px-[12rem]">
        <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl text-colprm text-center font-bold">GET IN TOUCH</h1>
            <div className="bg-colprm w-14 z-10 h-[3px] my-4"></div>
            <p className="text-sm text-white text-center lg:text-start mb-6">Please fill in our contact form to get in touch or send us an email. One of our team member will get back to you as soon as possible.</p>
            <p className="text-sm text-colprm lg:text-start text-center mb-6"> <span className="text-white text-sm">Email:</span> nostalgiacoffee@outlook.com</p>
            <div className="flex items-center gap-4">
                <FaFacebook size={25} className=" text-colprm cursor-pointer  hover:scale-105"/>
                <GrInstagram size={25} className=" text-colprm cursor-pointer  hover:scale-105"/>
            </div>
        </div>

        <div className="w-full">
            <form className="text-white w-full grid place-items-center gap-2">
              <input className="text-white px-3 w-full bg-transparent py-2 border rounded-sm" placeholder="Name"/>
              <input className="text-white px-3 w-full bg-transparent py-2 border rounded-sm" placeholder="Email"/>
              <textarea className="text-white px-3 w-full bg-transparent py-2 border rounded-sm" placeholder="Message"></textarea>
              <button className="text-colprm border-2 border-colprm justify-self-start px-6 py-2 font-bold">SEND</button>
            </form>
        </div>
      </section>
       
  </section>
  );
};

export default Contact;
