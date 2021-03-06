import React, { Component } from "react";
import axios from 'axios';
import IndexNavbar from "../components/Navbars/IndexNavbar";
import Router, { withRouter } from 'next/router'
import Head from "next/head";


class Register extends Component {
    constructor() {
        super();
        this.state = {
            activeShow: true,
            startDate: new Date(),
            name: '',
            email: '',
            dob: '',
            phoneno: '',
            gender: '',
            licence_no: '',
            message: '',
            errormessage: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = event => {
        console.log("handlehittt");
        event.preventDefault();
        const form_data = new FormData();
        form_data.append('name', this.state.name);
        form_data.append('email', this.state.email);
        form_data.append('dob', this.state.dob);
        form_data.append('phoneno', this.state.phoneno);
        form_data.append('gender', this.state.gender);
        form_data.append('licence_no', this.state.licence_no);

        axios.post('http://localhost:8000/api/register_driver', form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(response => {
            console.log(response.data);
            console.log(response.status);
            if (response.status == 201) {
                console.log("201 and success")

                this.setState({ message: "Register Successfully Done, Please Login!" })
            }


        }).catch(err => {
            console.log(err);
            this.setState({ errormessage: "Wrong Input!!" })
        });
    }
    render() {
        return (
            <>
               <Head><title>Driver Registration</title></Head> 
                <IndexNavbar /> <br />
            
                <div className="container mx-auto px-4 h-full" style={{ marginTop: "100px" }}>
                    {/*  */}
                    {this.state.message == 'Register Successfully Done, Please Login!' ? <div class="form-group">
                        <div class="text-center my-4 py-3" style={{ backgroundColor: "green" }}>
                            <h2 style={{ color: "whitesmoke" }}>{this.state.message}</h2>
                        </div>
                    </div> : " "}
                    {this.state.errormessage == 'Wrong Input!!' ? <div class="form-group">
                        <div class="text-center my-4 py-3" style={{ backgroundColor: "red" }}>
                            <h2 style={{ color: "whitesmoke" }}>{this.state.errormessage}</h2>
                        </div>
                    </div> : " "}

                    {/*  */}
                    <div className="flex content-center items-center justify-center h-full">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                                <div className="rounded-t mb-0 px-6 py-6">
                                    {/* <div className="text-center mb-3">
                                        <h6 className="text-blueGray-500 text-sm font-bold">
                                            Sign up with
                                        </h6>
                                    </div> */}
                                    {/* <div className="btn-wrapper text-center">
                                        <button
                                            className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            <img alt="..." className="w-5 mr-1" src="/img/github.svg" />
                                            Github
                                        </button>
                                        <button
                                            className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
                                            Google
                                        </button>
                                    </div> */}
                                    {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                                        <h2>Driver Registration</h2>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="name"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Name" name="name" onChange={this.handleChange}
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Email" name="email"
                                                onChange={this.handleChange}
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <div className="row">
                                                <div className="col-6">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-dob"
                                                    >
                                                        DOB
                                                    </label>
                                                    <input
                                                        type="date"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="dob" name="dob"
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-dob"
                                                    >
                                                        Gender
                                                    </label>
                                                    <select class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" aria-label="Default select example"  onChange={this.handleChange} name="gender">
                                                        <option selected>Select Gender</option>
                                                        <option value="1">Male</option>
                                                        <option value="2">Female</option>
                                                        <option value="3">Others</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-phoneno" 
                                            >
                                                Mobile No.
                                            </label>
                                            <input
                                                type="number"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Enter Mobile no" name="phoneno"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-phoneno"
                                            >
                                                Licence No.
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Enter Licence no" name="licence_no"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="text-center mt-6">
                                            <button type="submit"
                                                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"

                                            >
                                                Create Account
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

// Register.layout = Auth;

export default Register
