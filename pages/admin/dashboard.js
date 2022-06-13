import React, { useEffect } from "react";
import Head from 'next/head'

import useSound from "use-sound";
// import sound1 from "../../public/beep.mp3";



// components
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";
import EntryList from "./EntryList";
import Tables from "./tables";

export default function Dashboard() {
  // const [play] = useSound(sound1, { volume: 0.2 });
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Sleep' })
    };
    fetch('http://localhost:8000/api/sleepy', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.success !== "Nothing") {
          console.log("##Alert##");
          // play();
        }
      })

  }, [])

  return (
    <>
    <Head>
      <title>Safe Driver | Dashboard</title>
    </Head>
      
      {/* <EntryList /> */}
      <div className="w-full xl:w-12 mb-12 xl:mb-0 px-4">
        <Tables />
        {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div> */}
        <div className="w-full xl:w-10/12 px-4">
          <CardBarChart />
        </div>
      </div>
      {/* <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
    </>
  );
}

Dashboard.layout = Admin;
