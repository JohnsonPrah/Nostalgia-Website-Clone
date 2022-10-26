import React from "react";
const Login = () => {
  return (
        <div className="px-3 sm:px-16">            
            <section className="py-[8rem] grid place-items-center">
                <h1 className="font-bold text-center text-2xl md:text-4xl lg:text-5xl tracking-widest text-colprm">MY ACCOUNT</h1>
                <p className="bg-colprm w-20 h-1 mt-8 "></p>
            </section>
            <section className="py-10 grid place-items-center md:grid-cols-2 gap-10">
                <div className="flex flex-col">
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-10 text-colprm">LOGIN</h2>
                    <form className="flex flex-col px-5">
                        <div className=" w-full">
                            <label htmlFor="email" className="text-white font-bold">Username or address <span className="text-red-800">*</span></label>
                            <input type="email" id="email" className=" text-white bg-transparent w-full p-2 border border-1 border-gray"/>
                        </div>
                        <div className="mt-3 w-full">
                            <label htmlFor="password" className="text-white font-bold">Password <span className="text-red-800">*</span></label>
                            <input type="email" id="password" className=" text-white bg-transparent w-full p-2 border border-1 border-gray"/>
                        </div>
                        <div className="my-3 w-full">
                            <button className="text-colprm borde border mr-6 border-colprm py-1 px-8 font-bold text-lg"> LOG IN </button>
                            <input type="radio" className="bg-white mr-1"></input>
                            <label htmlFor="password" className="text-colprm mb-2">Remember me</label>    
                        </div>
                        
                        <p className="text-colprm">Lost password ?</p>
                        
                    </form>
                </div>

                <div className="flex flex-col">
                    <h2 className="font-bold mb-10 text-2xl md:text-3xl lg:text-4xl text-colprm">REGISTER</h2>
                    <form className="flex flex-col px-5">
                        <div className="mb-4">
                            <label htmlFor="password" className="text-white font-bold">Email address <span className="text-red-800">*</span></label>
                            <input type="email" id="password" className="text-white bg-transparent w-full p-2 border border-1 border-gray"/>
                        </div>
                        <p className="text-white mb-7">
                            A link to set a new password will be sent to your email address.
                        </p>
                        <p className="text-white mb-4">
                            Your personal data will be used to support your experience 
                            throughout this website, to manage access to your account, 
                            and for other purposes described in our <span className=" text-colprm">privacy policy</span> .
                        </p>
                        <button className="text-colprm border border-colprm py-1 px-2 font-bold text-lg w-[8rem]"> LOG IN </button>
                            
                    </form>
                </div>
            </section>
        </div>
  );
};

export default Login;
