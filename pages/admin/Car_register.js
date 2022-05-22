import React, { Component } from "react";
import axios from 'axios';
import Router, { withRouter } from 'next/router'
import Head from "next/head";
import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar";
import FooterAdmin from "components/Footers/FooterAdmin";


class CarRegister extends Component {
    constructor() {
        super();
        this.state = {
            activeShow: true,
            startDate: new Date(),
            vehicle_no: '',
            model_no: '',
            manufacture_year: '',
            manufacture_company: '',
            color: '',
            image_file: '',
            message: '',
            errormessage: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
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
        form_data.append('vehicle_no', this.state.vehicle_no);
        form_data.append('model_no', this.state.model_no);
        form_data.append('manufacture_year', this.state.manufacture_year);
        form_data.append('manufacture_company', this.state.manufacture_company);
        form_data.append('color', this.state.color);
        form_data.append('image_file', this.state.image_file);
       

        axios.post('http://localhost:8000/api/car_store', form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(response => {
            console.log(response.data);
            console.log(response.status);
            if (response.status == 201) {
                console.log("201 and success")

                this.setState({ message: "Register Successfully Done" })
            }


        }).catch(err => {
            console.log(err);
            this.setState({ errormessage: "Wrong Input!!" })
        });
    }
    render() {
        return (
            <>
               <Head><title>Add Managers</title></Head> 
               <AdminNavbar />
            
               <Sidebar />
                <div className="container-fluid mx-auto px-4 h-full" style={{backgroundColor: "rgba(30, 41, 59)" }} ><br/><br/><br/><br/><br/><br/>
                    {/*  */}
                    {this.state.message == 'Register Successfully Done' ? <div class="form-group">
                        <div class="text-center py-2">
                            <h2 style={{ color: "lightblue" }}>{this.state.message}</h2>
                        </div>
                    </div> :<div class="form-group">
                        <div class="text-center py-2">
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
                                           Add Vehicle
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
                                            <input
                                                type="name"
                                                className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="enter vehicle no" name="vehicle_no" onChange={this.handleChange}
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-100 text-xs font-bold mb-2"
                                                htmlFor="grid-email"
                                            >
                                               Model No.
                                            </label>
                                            <input
                                                type="name"
                                                className="border-0 px-3 py-3 placeholder-blueGray-100 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="enter model no" name="model_no"
                                                onChange={this.handleChange}
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <div className="row">
                                                <div className="col-6">
                                                    <label
                                                        className="block uppercase text-blueGray-100 text-xs font-bold mb-2"
                                                        htmlFor="grid-dob"
                                                    >
                                                        manufacture year
                                                    </label>
                                                    <input
                                                        type="name"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-100  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="enter manufacture year" name="manufacture_year"
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <label
                                                        className="block uppercase text-blueGray-100 text-xs font-bold mb-2"
                                                        htmlFor="grid-dob"
                                                    >
                                                        manufacture company
                                                    </label>
                                                    <input
                                                        type="name"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-100  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="enter company name" name="manufacture_company"
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-100 text-xs font-bold mb-2"
                                                htmlFor="grid-phoneno" 
                                            >
                                               color
                                            </label>
                                            <input
                                                type="name"
                                                className="border-0 px-3 py-3 placeholder-blueGray-100 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Enter color" name="color"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="relative w-full mb-3">
                                       
                                            <label htmlFor="avatar"  className="block uppercase text-blueGray-100 text-xs font-bold mb-2">Choose a Car picture:</label>
                                            <input type="file" className="border-0 px-3 py-3 placeholder-blueGray-100 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                onChange={this.fileSelectedHandler}
                                            />
                                       
                                        </div>
                                      
                                        <div className="text-center mt-6">
                                            <button type="submit"
                                                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"

                                            >
                                                Add Now
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

// Register.layout = Auth;

export default CarRegister
