import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import axios from "axios";

export default function CardTable({ color }) {
  const [data, setData] = useState([]);
  const [datalength, setDataLength] = useState([]);
  // get 
  useEffect(() => {
    const user = localStorage.getItem('user')
    const data = JSON.parse(user);
    console.log("data", data);
    const url = "http://127.0.0.1:8000/api/entry";
    const token = JSON.parse(localStorage.getItem('user'));
    const headers = {
      "Content-Type": "application/json",
      "Accept": 'application/json',
      'access-control-allow-origin': '*',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'content-type': 'multipart/form-data',
      Authorization: "Bearer " + token.data.token,

    }
    const fetchData = async () => {
      try {
        const response = await fetch(url, { headers });
        const json = await response.json();
        console.log("json_DATA: ", json.data.entries);
        setData(json.data.entries);
        //console.log("DATA: ", data);
        setDataLength(json.data.entries.length);


      }
      catch (error) {
        console.log("error", error);
      }
    };
    fetchData();


  }, []);

  const url = "http://127.0.0.1:8000/assets/uploads/carimages/";
  const getData = () => {

    const token = JSON.parse(localStorage.getItem('user'));
    const id = token.data.user_id
    const url = 'http://127.0.0.1:8000/api/car';
    const headers = {
      "Content-Type": "application/json",
      "Accept": 'application/json',
      'access-control-allow-origin': '*',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'content-type': 'multipart/form-data',
      Authorization: "Bearer " + token.data.token,

    }
    axios.get(url, { headers })
      .then((getData) => {
        console.log("gett: ", getData.data.entries);
        setData(getData.data.entries);

      }, [])
  }
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Active Drivers Status
              </h3>
            </div>
          </div>
        </div>
        {datalength == 0 ? <><h1 className="text-center my-3 py-4">No Data Found!</h1></> : <>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            {/* <table className="items-center w-full bg-transparent border-collapse"> */}
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  >
                    Date
                  </th>
                  {/* <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                 Starting Place
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                 Ending Place
                </th> */}
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  >
                    Vehicle No
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  >
                    Driver Name
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  >
                    Active Status
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  >
                    Alert Status
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  >
                    Alert Date and Time
                  </th>
                  {/* <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Completion
                </th> */}
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  ></th>

                </tr>
              </thead>


              <tbody>
                {data.map((a) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                    <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{a.created_at.slice(0, 10)}</td>
                    <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{a.car.vehicle_no} </td>
                    <td class="px-6 py-4 font-medium text-gray-600 dark:text-white whitespace-nowrap">{a.driver.name}</td>
                    {/* <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{a.car_id}</td>
                    <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{a.driver_id}</td> */}
                    <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"> <i className="fas fa-circle text-emerald-500 mr-2"> </i>Active</td>
                    <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{a.status === 0 ? "Normal" : <>{a.status === 1 ? "Drowsiness" : "Sleepy"}</>}</td>

                    {a.status === 0 ? <td className="px-6 py-4 text-center font-medium text-gray-900 dark:text-white whitespace-nowrap"> NA </td> : <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{a.alert_time}</td>}
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <TableDropdown />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>}
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
