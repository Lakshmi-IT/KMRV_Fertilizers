import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <>
         
      
            <section className="text-gray-600 body-font bg-green-50">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center lg:px-14">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-green-900">
                            Nourish Your Crops Naturally
                            <br className="hidden lg:inline-block" />with Premium Fertilizers & Pesticides
                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-700">
                            KMRU brings eco-friendly and highly effective agricultural solutions to help you grow healthier, more productive crops. From organic fertilizers to safe pesticides, we support your journey to sustainable farming.
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">
                                Explore Products
                            </button>
                            <button className="ml-4 inline-flex text-green-700 bg-green-200 border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-lg">
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="Agro field"
                            src="./heroImage2.png"
                        />
                    </div>
                </div>
            </section>

        </>
    );
}

export default Hero;
