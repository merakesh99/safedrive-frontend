import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className=" bg-blueGray-200 pt-8 pb-8">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex text-center lg:text-left">
           
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.7993000260894!2d88.54094161484863!3d22.957617424513824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bf5871a9e0d7%3A0x3cbdf3b9f157e355!2sMAKAUT%20MAIN%20CAMPUS!5e0!3m2!1sen!2sin!4v1648886267778!5m2!1sen!2sin" width="1650" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
     
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-black-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Safe Driver by{" "}
                <Link href='https://www.linkedin.com/in/merakesh99/'>
                
                <a
                  target='_blank'
                  className="text-black-500"
                  >
                  Rakesh Sadhukhan
                </a>
                  </Link>
                .
              </div>
              <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
