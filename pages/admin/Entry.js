import React, { Component } from "react";
import axios from 'axios';
import Router, { withRouter } from 'next/router'
import Head from "next/head";
import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar";
import FooterAdmin from "components/Footers/FooterAdmin";


class Entry extends Component {
    constructor() {
        super();
        this.state = {
            activeShow: true,
            startDate: new Date(),
            cars: [],
            drivers: [],
            car_id: '',
            driver_id: '',
            status: 0,
            message: '',
            errormessage: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    //
    async getUsersData() {
        const token = JSON.parse(localStorage.getItem("user"));
        const url = "http://localhost:8000/api/car";
        const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            "access-control-allow-origin": "*",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            Authorization: "Bearer " + token.data.token,
        };

        const res = await axios.get(url, {
            headers,
        });
        console.log("car data", res.data.data.cars);

        this.setState({ cars: res.data.data.cars });
    }
    async getDriversData() {
        const token = JSON.parse(localStorage.getItem("user"));
        const url = "http://localhost:8000/api/driver";
        const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            "access-control-allow-origin": "*",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            Authorization: "Bearer " + token.data.token,
        };

        const res = await axios.get(url, {
            headers,
        });
        console.log("driver data", res.data.data.drivers);

        this.setState({ drivers: res.data.data.drivers });
    }


    componentDidMount() {
        this.getUsersData();
        this.getDriversData();
    }


    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    fileSelectedHandler = event => {
        this.setState({
            image_file: event.target.files[0]
        })
    }

    handleSubmit = event => {
        console.log("handlehittt");
        event.preventDefault();
        const form_data = new FormData();
        form_data.append('car_id', this.state.car_id);
        form_data.append('driver_id', this.state.driver_id);
        form_data.append('status', this.state.status);



        axios.post('http://localhost:8000/api/entry', form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(response => {
            console.log(response.data);
            console.log(response.status);
            if (response.status == 201) {
                console.log("201 and success")

                this.setState({ message: "Entry Successfully Done" })
            }


        }).catch(err => {
            console.log(err);
            this.setState({ errormessage: "Wrong Input!!" })
        });
    }
    render() {
        const { cars } = this.state;
        const { drivers } = this.state;
        console.log(this.state.cars);
        return (
            <>
                <Head><title>  SafeDriver | Entry</title></Head>
                <AdminNavbar />

                <Sidebar />
                <div className="container-fluid mx-auto px-4 h-full" style={{ backgroundColor: "rgba(30, 41, 59)" }} ><br /><br /><br /><br /><br /><br />
                    {/*  */}
                    {this.state.message == 'Entry Successfully Done' ? <div className="form-group">
                        <div className="text-center py-2">
                            <h2 style={{ color: "green" }}>{this.state.message}</h2>
                        </div>
                    </div> : <div className="form-group">
                        <div className="text-center py-2">
                            <h2 style={{ color: "red" }}>{this.state.errormessage}</h2>
                        </div>
                    </div>}
                    {/* {this.state.errormessage == 'Wrong Input!!' ?  : " "} */}

                    {/*  */}
                    <div className="flex content-center items-center justify-center h-full">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-600 border-0">
                                <div className="rounded-t mb-0 px-6 py-6">
                                    <div className="text-center mb-3">
                                        <h3 className="text-blueGray-100 font-bold">
                                            Entry
                                        </h3>
                                    </div>

                                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                    <form onSubmit={this.handleSubmit}>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-100 text-xs font-bold mb-2"
                                                htmlFor="grid-name"
                                            >
                                                vehicle no
                                            </label>
                                            <select
                                                className="form-control"
                                                id="car_id"
                                                onChange={this.handleChange}
                                                // defaultValue={this.state.car_id}
                                            >{cars.map((car,i)=>
                                                // {console.log(car.id)}
                                                <option value={car.id} key={i}> {car.vehicle_no} - {car.model_no}</option>
                                            )}</select>
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-100 text-xs font-bold mb-2"
                                                htmlFor="grid-name"
                                            >
                                                Driver Name
                                            </label>
                                            <select
                                                className="form-control"
                                                id="driver_id"
                                                onChange={this.handleChange}
                                                defaultValue={this.state.driver_id}
                                            >{drivers.map((d,i)=>
                                                // {console.log(car.id)}
                                                <option value={d.id}>{d.name} - {d.licence_no}</option>
                                            )}</select>
                                        </div>


                                        
                                     
                                       

                                        <div className="text-center mt-6">
                                            <button type="submit"
                                                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"

                                            >
                                                Add
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterAdmin />
            </>
        );
    }
}

export default Entry
