import React from "react";
import Sale from "../../assets/images/sale.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone , faEnvelope , faLocationDot , faClock} from "@fortawesome/free-solid-svg-icons"



export default function Home () {
    return (
        <>
    <div className=" row flex flex-col mt-8 mb-8">
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-4 mb-5">
              <div>
                <h1 className="text-6xl mb-5 mt-20 font-normal">ONLINE store</h1>
                    <h2 className="text-7xl mb-14 mt-10 font-bold">Enjoy Our Sale
                    </h2>
                    <p className="font-semibold text-base">Enjoy Our Discound Up To 50%.
                    </p>
              </div>
              <div>
                    <img src={Sale} alt="sale pic" />
              </div>
        </div>
    </div>
            <div>
                <p className="text-5xl mt-10">Need Help ?<span className=" text-green-600 ">Contact Us</span></p>
            </div>
        <div className=" row flex flex-col mt-8 mb-8 ">
            <div className="grid  lg:grid-cols-2 xl:grid-cols-2 gap-4 mb-5">
                   <div className="relative flex justify-between bg-gray-200 mb-5 p-8 gap-5 ">
                    <div>
                        <h3 className="mb-5 text-xl font-bold text-left">Our Address</h3>
                        <p>6 Of October City, Giza, Egypt</p>
                    </div>
                    <div className=" border-black bg-green-600 rounded-full w-20 h-20 flex items-center justify-center">
                    <FontAwesomeIcon icon={faLocationDot}  className="text-3xl"/>
                    </div>
                   </div>
                    <div className="relative flex justify-between bg-gray-200 mb-5 p-8 gap-5 ">
                    <div>
                        <h3 className="mb-5 text-xl font-bold text-left">Opening Hours</h3>
                        <p><b>Mon-Sat :</b>11AM - 23PM; <b>Sunday :</b>Closed</p>
                    </div>
                    <div className=" border-black bg-green-600 rounded-full w-20 h-20 flex items-center justify-center">
                    <FontAwesomeIcon icon={faClock}  className="text-3xl"/>
                    </div>
                    </div>
                    <div className="relative flex justify-between bg-gray-200 mb-5 p-8 gap-5 ">
                    <div >
                        <h3 className="mb-5 text-xl font-bold text-left">Email Us</h3>
                        <p>online-store@gmail.com</p>
                    </div>
                    <div className=" border-black bg-green-600 rounded-full w-20 h-20 flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope}  className="text-3xl"/>
                    </div>
                    </div>
                    <div className="relative flex justify-between bg-gray-200 mb-5 p-8 gap-5 ">
                        <div >
                        <h3 className="mb-5 text-xl font-bold text-left">Call Us</h3>
                        <p>01002003004</p>
                    </div>
                    <div className=" border-black bg-green-600 rounded-full w-20 h-20 flex items-center justify-center ">
                    <FontAwesomeIcon icon={faPhone} className="text-3xl"/>
                    </div>
                    </div>
            </div>
        </div>
        </>
    )
}

