import React from "react";
import { createPopper } from "@popperjs/core";
import axios from "axios";
import { useRouter } from 'next/router'

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const router = useRouter();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };


  async function logout() {
    const token = JSON.parse(localStorage.getItem('user'));
    console.log(token.data.token.id);
    const headers = {
        "Content-Type": "application/json",
        "Accept": 'application/json',
        'access-control-allow-origin': '*',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
       // Authorization: "Bearer " + token.data.token.id,
    };


    const res = await axios.get('http://127.0.0.1:8000/api/logout', { headers }).then(res => {
        console.log(res);
        console.log(res.data);
        if (res.status === 200) {
            alert(res.data.data.message)
            localStorage.clear();
            router.push("/")

        }
    })

}
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="/img/profilepic.jpeg"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="/admin/dashboard"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          // onClick={(e) => e.preventDefault()}
        >
         Dashboard
        </a>
        <a
          href="/profile"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          // onClick={(e) => e.preventDefault()}
        >
          My Profile
        </a>
        {/* <a
          href="/setting"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Setting
        </a> */}
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Change Password
        </a>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={() => logout()}
        >
         Logout
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
