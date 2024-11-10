import React from 'react'
 
import '../css/demo.css'
import nike from '../imges/follwimges.jpg'
import { IoIosStarOutline } from "react-icons/io";

export default function Itemmore() {
    return (
        <div style={{marginTop:"-130px"}}>




            <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">



                    <div class="row gx-4 gx-lg-5 align-items-center" style={{ padding: '25px' , borderRadius: "15px", }}>
                        <div class="col-md-6" style={{   borderRadius: "15px" , padding: '15px',width:"350px",boxShadow:"0.5px 1px 2px 0.5px gray" }}>
                        <div class="d-grid gap-2">
  {/* <button class="btn btn-primary" style ={{width:"500px"}}type="button">Button</button> */}
  {/* <button class="btn btn-primary" type="button">Button</button> */}
</div>
                          
                            <img class="card-img-top mb-5 mb-md-0" src={nike} style={{ boxShadow: ' 0.5px 0.5px 0.5px 0.5px  gray', borderRadius: "15px"    }} alt="..." />
                            <p id='boxx' style={{border:"1px solid black",padding:'2px',margin:"5px" ,textAlign:"center",color: "white",borderRadius: "10px"}}>Follow</p>
                            {/* <p><button ='boxx'id style={{ width: "430px" ,marginLeft:'30px',marginRight:"30px" ,maxWidth:"400px",justifyContent:"center", height: '35px', margin: '5px', color: "white", borderRadius: "10px",overflow:"hidden" }}>Follow</button></p> */}
                            <p style={{ display: "flex", justifyContent: "space-between" }} ><span style={{ fontWeight: "500" }}>Tab Sport</span> <span>4.8<IoIosStarOutline /> <br />
                                <span style={{ fontSize: "10px" }}>  13 Reviews</span> </span></p>
                            <p>218/B, Near Mala Sheri Mumbai,<br />
                                maharastra - 259632
                            </p>
                            <p>
                                Open Now: <br />
                                Mon-Sun :- 10:30 am - 9:30 pm
                            </p>
                            <p   style={{border:"1px solid green",padding:'2px',margin:"5px" ,textAlign:"center", borderRadius: "10px" ,fontWeight:'500'}}>About Supplier</p>



                        </div>





















                        <div class="col-md-6">
                        <div>
                <h6 style={{ margin: "15px" }}>Specification</h6>

                <div style={{ padding: "20px", height: "350px", width: '450px', margin: "3px", border: "1px solid black", borderRadius: "15px" }}>

                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Product Model</span><span style={{ color: "black", fontWeight: "500" }}>Escaper Mesh</span></p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Manufacture details</span><span style={{ color: "black", fontWeight: "500",fontSize:"15px" }}> 48/B, Batahouse, malaseri <br />
                        Bhat-gandhinagar</span></p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Product weight</span><span style={{ color: "black", fontWeight: "500" }}>0.7190kg, 719gm</span></p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Brand</span><span style={{ color: "black", fontWeight: "500" }}>Puma</span></p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Type</span><span style={{ color: "black", fontWeight: "500" }}>Type Running shoes, womens shoes</span></p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Size</span><span style={{ color: "black", fontWeight: "500" }}>11</span></p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}> <span style={{ opacity: "0.9" }}> Color</span><span style={{ color: "black", fontWeight: "500" }}>Navy</span></p>


                </div>
            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
