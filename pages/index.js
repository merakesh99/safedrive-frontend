/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <div className=''>

        <div className="bannerimage2 w-100 d-flex justify-content-center align-items-center" style={{ height: "800px" }}>

          {/* <div className="content">
                        <div className=''>
                            <p className='home_heading'></p>
                        </div>

                    </div> */}

          {/*  */}
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            {/* <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        </ol> */}
            <div className="carousel-inner">
              {/* slider------1----- */}
              <div className="carousel-item active">
                <div className='col-xl' style={{ color: "black", paddingTop: "900px", paddingBottom: "300px", paddingRight: "260px", paddingLeft: "300px", fontSize: '35px' }}>
                  <h1 className='carousalHeading'>" Be Safe – Drive Smart! "</h1>
                </div>
              </div>
              {/* slider------2----- */}
              <div className="carousel-item">
                <div className='col-xl' style={{ color: "black", paddingTop: "900px", paddingBottom: "300px", paddingRight: "200px", paddingLeft: "300px", fontSize: '35px' }}>
                  <h1 className='carousalHeading'>"Road safety is a state of mind, accident is an absence of mind."</h1>
                </div>
              </div>

              {/* slider------3----- */}
              <div className="carousel-item">
                <div className='col-xl' style={{ color: "black", paddingTop: "900px", paddingBottom: "300px", paddingRight: "200px", paddingLeft: "300px", fontSize: '35px' }}>
                  <h1 className=''>"Follow traffic rules, save your future"</h1>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/*  */}
        </div>
      </div>

      <section className="header relative pt-16 items-center flex h-screen py-20">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600" id="about">
                About Us
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Our Motive is the {" "}
                <a
                  href="/"
                  className="text-blueGray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Driver Safety
                </a>
                . We and Technology can do this...<br /><br />

                "Avoid the Drowsiness While Driving"
              </p>
              <div className="mt-12">
                <a
                  href="/"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Know More
                </a>

              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12"
          src="https://blog.affectiva.com/hs-fs/hubfs/Sleep%20detection%20DMS.jpg?width=1890&name=Sleep%20detection%20DMS.jpg"
          alt="..."
          style={{ width: "600px" }}
        />
      </section>



      <section className="block relative z-1 bg-blueGray-600" id="service">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Detect
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://www.startupticker.ch/assets/images/articles/ams%20DMS%20950.jpeg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Alert
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150" >
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg" style={{ height: '300px' }}
                        src="https://mycardoeswhat.org/wp-content/uploads/2015/08/Quick-Guide-DAS-Vlg.jpg"
                      />
                    </div>
                  </Link>
                </div>


                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Safe
                  </h5>
                  <Link href="/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full rounded-lg" style={{ height: '230px' }}
                        src="https://daysfleet.com/wp-content/uploads/2016/05/driver-licence-checking.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-car text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                National Road Saftey Policy
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                The Government constituted a Committee under the Chairmanship of Shri S. Sundar, Former Secretary (MoST) in the year 2005 to deliberate and make recommendations on creation of a dedicated body on road safety and traffic management. The Committee was also subsequently requested to finalise a draft National Road Safety Policy for consideration of the Government. The Committee while submitting its report in February, 2007 inter alia, recommended a draft National Road Safety Policy. Based on the recommendations of Sunder Committee, the Union Cabinet on 15.03.2010 approved National Road Safety Policy. The National Road Safety Policy outlines the policy initiatives to be framed / taken by the Government at all levels to improve the road safety activities in the country.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                The National Road Safety Policy is as under :-
              </p>
              <a
                href="https://morth.nic.in/national-road-safety-policy-1"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Read Policy
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-microsoft text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">

              <h3 className="font-semibold text-3xl">
                Drowsy Driving Is Similar to Drunk Driving
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Your body needs adequate sleep on a daily basis. The more hours of sleep you miss, the harder it is for you to think and perform as well as you would like. Lack of sleep can make you less alert and affect your coordination, judgement, and reaction time while driving. This is known as cognitive impairment.
              </p>
              <div className="sm:block flex flex-col mt-10">

                <a
                  href="https://www.mygov.in/campaigns/national-road-safety/"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <span>Help People</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div><br />




        <div className='container' id='contact'>
          <div className='row'>
            <div className='col-xl-6 offset-xl-3 col-xs-12'>
              <div className='text-center'>
                <p className='font-semibold text-3xl'>Contact us</p>
                <p className='text-blueGray-500 text-lg leading-relaxed mt-4 mb-4'>Drop us a line with any questions, inquiries or business proposals</p>
              </div>
            </div>
          </div>

          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                 


                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Full Name
                      </label>
                      <input
                        type="name"
                        className="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Name" name="name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email Id*
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Your Email Address" name="email"

                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-message"
                      >
                        Leave us a message
                      </label>
                      <textarea
                        class="
                              form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                      ></textarea>
                    </div>



                    <div className="text-center mt-6">
                      <button type="submit"
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"

                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
      <Footer />
    </>
  );
}
