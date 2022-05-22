import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import axios from 'axios';
// import Nav2 from '../Common/Nav2';
// import Footer1 from '../Common/Footer1';
// import { Image } from 'react-bootstrap';
import { toast } from 'react-toastify';
const CreatePassword = () => {
    const router = useRouter();
    const code = router.query.id;
    console.log("code->", code);
    const [data, setData] = useState({
        password: '',
        password_confirmation: '',

    })
    const handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('password', data.password);
        form_data.append('password_confirmation', data.password_confirmation);
        form_data.append('token', code);
        axios.post('http://127.0.0.1:8000/api/create_user', form_data, {
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',


            }
        }).then(response => {
            console.log(response.data);
            console.log(response.status);
            if(response.status == 201){
                this.setState({ message: "User Creation succesfully" })
                setTimeout(() => {
                    console.log('login');
                    router.push("/auth/login");
                  }, 4000);
            }

        }).catch(err => console.log(err));
    };

    // Index.getInitialProps = async () => {
    //     return {};
    // };
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.name] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div>
            {/* <Nav2 /> */}
            <div style={{ margin: '180px' }}></div>
            <div className="flex content-center items-center justify-center h-full">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                                <div className="rounded-t mb-0 px-6 py-6">
                                    <div className="text-center mb-3">
                                    <h6 className="text-blueGray-500 text-sm font-bold">
                                    Create Password
                                        </h6>
                                        </div>


                    <form onSubmit={handleSubmit}>
                       

                            {/* <h3 className='text-center pb-4'>Create Password</h3> */}

                            <div className="btn-wrapper text-center">
                                
                                <input type="password" placeholder="New Password"
                                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    name="password"
                                    style={{ borderRadius: 50 }}
                                    onChange={(e) => handle(e)} />
                            </div><br />

                            <div><input type="password" placeholder="Confirm Password"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                name="password_confirmation"
                                style={{ borderRadius: 50 }}
                                onChange={(e) => handle(e)} />
                            </div>
                            <br />

                            <div className='row'>
                                <button  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">Register</button>
                            </div>
                        
                    </form>
                </div>
                </div>
                </div>
             
            </div>
            {/* <Footer1 /> */}
        </div>
    )
}

export default CreatePassword;