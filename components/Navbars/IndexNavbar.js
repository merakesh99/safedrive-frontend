import React, { useEffect } from "react";
import Link from "next/link";
import UserDropdown from "components/Dropdowns/UserDropdown";
// components

// import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  useEffect(() => {
    const user = localStorage.getItem('user');

    setUser(user);
  }, [])
  const [user, setUser] = React.useState();

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <img src='/img/safedriver.png' style={{ width: "100px" }}></img>
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="/"
              >

                Safe Driver
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <IndexDropdown />
              </li> */}
              <li className="flex items-center">
                <Link href='/'>
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    <span className="inline-block ml-2">Home</span>
                  </a></Link>
              </li>
              <li className="flex items-center">
                <Link href='/#about'>
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    <span className="inline-block ml-2">About</span>
                  </a></Link>
              </li>
              <li className="flex items-center">
                <Link href='/#service'>
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    <span className="inline-block ml-2">Services</span>
                  </a></Link>
              </li>
              <li className="flex items-center">
                <Link href='/Gallery'>
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    <span className="inline-block ml-2">Gallery</span>
                  </a></Link>
              </li>
              <li className="flex items-center">
                <Link href='/#contact'>
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    <span className="inline-block ml-2">Contact Us</span>
                  </a></Link>
              </li>



              {user == null ?
                <li className="flex items-center">
                  <Link href='/auth/login'>
                    <button
                      className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-3 py-3 my-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="button"
                    >

                      Login
                    </button>
                  </Link>
                </li>
                :

                <li className="flex-col md:flex-row list-none items-center hidden md:flex px-3">
                  <UserDropdown />
                </li>

              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
