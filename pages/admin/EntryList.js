import Sidebar from 'components/Sidebar/Sidebar';
import AdminNavbar from 'components/Navbars/AdminNavbar';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import axios from 'axios';

import { Container, Row, Col, Media, Input } from 'reactstrap';


const CarList = () => {
    

    // TODO: automatic API calling When Status 0 and 1`

    useEffect(() => {
        setInterval(async () => {
            const res = await axios.get('https://api.apijson.com/...');
            
          }, 30000);
    }, [])
    
    
    const deletecar = (a)=>{
        console.log("car id is", a.id);
        const id = a.id;
        const token = JSON.parse(localStorage.getItem('user'));
        const headers = {
            "Content-Type": "application/json",
            "Accept": 'application/json',
            'access-control-allow-origin': '*',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            Authorization: "Bearer " + token.data.token,
        };

        let url = 'http://127.0.0.1:8000/api/car/' + id + '/delete'
        const res = axios.get(url, { headers });
        console.log(res);
        getData();
    }

    return (
        <>
            <AdminNavbar />
            <Sidebar />
            <br />

            <div className='' style={{ marginTop: "190px", marginLeft: "200px" }}>

                <section className="cart-section section-b-space">
                    <Container>
                        <h1 className="text-blueGray-600 text-center mb-3 font-bold">List of Entries</h1><hr />
                        <Row>
                            <Col sm="12">

                                <table className="table cart-table table-responsive-xs">
                                    <thead className="bg-indigo-500 text-white">
                                        <tr className="table-head">
                                            <th scope="col">Date</th>
                                            {/* <th scope="col">Starting Place</th>
                                            <th scope="col">Ending Place</th> */}
                                            <th scope="col">Vehicle No</th>
                                            <th scope="col">Driver Name</th>
                                            <th scope="col">Active Status</th>
                                            <th scope="col">Alert Status</th>
                                            <th scope="col">Alert Time</th>
                                        </tr>
                                    </thead>




                                    <tbody>
                                        {/* {data.map((a) => ( */}
                                            {/* <tr>
                                                <td>{a.created_at.slice(0, 10)}</td>
                                                <td></td>
                                                <td></td>
                                                <td>{a.car_id}</td>
                                                <td>{a.driver_id}</td>
                                                <td></td>
                                                {a.status === 0 ? <td style={{color: "green"}}>Normal</td> : <>{a.status === 1 ?  <td style={{color: "blue"}}>Drowsiness</td> :  <td style={{color: "red"}}>Sleepy</td>}</>}
                                                <td style={{color: "brown"}}>{a.alert_time}</td>
                                            </tr> */}
                                        {/* ))} */}
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
export default CarList;