import Sidebar from 'components/Sidebar/Sidebar';
import AdminNavbar from 'components/Navbars/AdminNavbar';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import axios from 'axios';

import { Container, Row, Col, Media, Input } from 'reactstrap';


const DriverList = () => {
    const [data, setData] = useState([]);
    // get 
    useEffect(() => {
        const user = localStorage.getItem('user')
        const data = JSON.parse(user);
        console.log("data", data);
        const url = "http://127.0.0.1:8000/api/driver";
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
                console.log("json_DATA: ", json.data);
                setData(json.data.drivers);
                //console.log("DATA: ", data);

            }
            catch (error) {
                console.log("error", error);
            }
        };
        fetchData();


    }, []);

    //const url = "http://127.0.0.1:8000/assets/uploads/carimages/";
    const getData = () => {

        const token = JSON.parse(localStorage.getItem('user'));
        const id = token.data.user_id
        const url = 'http://127.0.0.1:8000/api/driver';
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
                console.log("GET____>",getData)
                setData(getData.data.data.drivers);
            }, [])
    }

    // const deletecar = (a)=>{
    //     console.log("car id is", a.id);
    //     const id = a.id;
    //     const token = JSON.parse(localStorage.getItem('user'));
    //     const headers = {
    //         "Content-Type": "application/json",
    //         "Accept": 'application/json',
    //         'access-control-allow-origin': '*',
    //         'Access-Control-Allow-Origin': 'http://localhost:3000',
    //         Authorization: "Bearer " + token.data.token,
    //     };

    //     let url = 'http://127.0.0.1:8000/api/car/' + id + '/delete'
    //     const res = axios.get(url, { headers });
    //     console.log(res);
    //     getData();
    // }
    return (
        <>
          {/* <head><title>Safe Driver | Driver List</title></head> */}
            <AdminNavbar />
            <Sidebar />
            <br />

            <div className='' style={{ marginTop: "190px", marginLeft: "200px" }}>

                <section className="cart-section section-b-space">
                    <Container>
                        <h1 className="text-blueGray-600 text-center mb-3 font-bold">List of Drivers</h1><hr />
                        <Row>
                            <Col sm="12">

                                <table className="table cart-table table-responsive-xs">
                                    <thead className="bg-indigo-500 text-white">
                                        <tr className="table-head">
                                            {/* <th scope="col">Image</th> */}
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">DOB</th>
                                            <th scope="col">Phone No</th>
                                            <th scope="col">licence no</th>
                                            <th scope="col">Status</th>
                                            {/* <th scope="col">Status</th> */}
                                        </tr>
                                    </thead>




                                    <tbody>
                                        {data.map((a) => (
                                            <tr>
                                                {/* <td>
                                                    <Image src={url + a.image_file} alt="cart_product_img" style={{ width: "250px" }} />
                                                </td> */}
                                                <td>
                                                    <b>{a.name}</b>
                                                </td>
                                                <td>
                                                    <b>{a.email}</b>
                                                </td>
                                                <td>
                                                    <b>{a.dob}</b>
                                                </td>
                                                <td>
                                                    <b>{a.phoneno}</b>
                                                </td>
                                                <td>
                                                    <b>{a.licence_no}</b>
                                                </td>
                                                <td>
                                                    <b>{a.token == null ? <b> <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}Active</b>: <b><i className="fas fa-circle text-orange-500 mr-2"></i>Pending</b>}</b>
                                                </td>
                                                {/* <td>
                                                    {a !== null ? <b><i className="fas fa-circle text-orange-500 mr-2"></i>Pending</b> : <b> <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}Active</b>}

                                                </td> */}
                                                {/* <td>
                                                    <button
                                                        className="bg-red-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button" onClick={()=> deletecar(a)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td> */}


                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                                <table className="table cart-table table-responsive-md">
                                    <tfoot>
                                        <tr>

                                        </tr>
                                    </tfoot>
                                </table>
                            </Col>
                        </Row>
                        <Row className="cart-buttons">
                            <Col xs="6">

                            </Col>
                            <Col xs="6">
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>

        </>
    )
}
export default DriverList;