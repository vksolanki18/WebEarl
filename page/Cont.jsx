import React from 'react'
import follw from '../imges/follwimges.jpg'
import '../css/demo.css'
import { IoIosStarOutline } from "react-icons/io";
export default function Cont() {
    return (
        <div style={{ display: "flex" ,justifyContent:"center" }}  >
            <div style={{ padding: "20px", height: "490px", margin: "3px", border: "1px solid black", borderRadius: "15px" }} id='vkk'>
                <img src={follw} alt="" width={"350px"} />
                <p><button id='boxx' style={{ width: "350px", height: '35px', margin: '5px', color: "white", borderRadius: "10px", }}>Follow</button></p>
                <p style={{ display: "flex", justifyContent: "space-between" }} ><span style={{ fontWeight: "500" }}>Tab Sport</span> <span>4.8<IoIosStarOutline /> <br />
                    <span style={{ fontSize: "10px" }}>  13 Reviews</span> </span></p>
                <p>218/B, Near Mala Sheri Mumbai,<br />
                    maharastra - 259632
                </p>
                <p>
                    Open Now: <br />
                    Mon-Sun :- 10:30 am - 9:30 pm
                </p>
                <p><button style={{ width: "350px", height: '35px', margin: '5px', borderRadius: "10px", color: "black", border: "1px solid green" }} id='boxx-s'>About Supplier</button></p>

            </div>
            <div>
                <h6 style={{ margin: "15px" }}>Specification</h6>

                <div style={{ padding: "20px", height: "350px", width: '450px', margin: "3px", border: "1px solid black", borderRadius: "15px" }}>

                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Product Model</span><span style={{ color: "black", fontWeight: "500" }}>Escaper Mesh</span></p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Manufacture details</span><span style={{ color: "black", fontWeight: "500" }}> 48/B, Batahouse, malaseri <br />
                        Bhat-gandhinagar</span></p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Product weight</span><span style={{ color: "black", fontWeight: "500" }}>0.7190kg, 719gm</span></p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Brand</span><span style={{ color: "black", fontWeight: "500" }}>Puma</span></p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Type</span><span style={{ color: "black", fontWeight: "500" }}>Type Running shoes, womens shoes</span></p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Size</span><span style={{ color: "black", fontWeight: "500" }}>11</span></p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Color</span><span style={{ color: "black", fontWeight: "500" }}>Navy</span></p>


                </div>
            </div>
            </div>

    )
}
