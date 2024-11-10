import React from 'react'
import imgeshoes from '../imges/shoes-imges.jpeg'
import imges from '../imges/shoesimgesss.jpg'
import { GrFavorite } from "react-icons/gr";
import '../css/demo.css'

export default function Item() {
    return (
        <div>




            <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">

                    <p style={{ fontWeight: "500" }}><span style={{ opacity: "0.8" }}> Home  &#60; <span></span>Shoes </span>  &#60; <span> Round toe leather loafer shoe(Black)</span></p>


                    <div class="row gx-4 gx-lg-5 align-items-center" style={{ padding: '25px', }}>
                        <div class="col-md-6" > <img class="card-img-top mb-5 mb-md-0" src={imgeshoes} style={{ boxShadow: ' 0.5px 0.5px 0.5px 0.5px  gray', borderRadius: "15px" }} alt="..." />
                            <img src={imges} style={{ width: "80%", marginTop: "30px", marginBottom: '20px' }} alt="" />

                        </div>
                        <div class="col-md-6">
                            {/* <div class="small mb-1">SKU: BST-498</div> */}
                            <h3 class="display-5 fw-bolder">Round toe leather loafer shoe(Black)</h3>
                            <p style={{ padding: "10px" }}>   <GrFavorite />
                                <span style={{ marginLeft: "5px" }}> Add to my wishlist</span></p>

                            <div>
                                <div><p></p></div>
                            </div>

                            <table>
                                <tr>
                                    <td style={{ padding: '10px' }}>
                                        <span style={{ opacity: "0.8" }}> Occasion </span> : <span>Sport</span>
                                    </td>
                                    <td style={{ padding: '10px' }}>  <span style={{ opacity: "0.8" }}> Color </span> : <span>Red</span></td>
                                </tr>
                                <tr >
                                    <td style={{ paddingLeft: '10px' }}> <span style={{ opacity: "0.8" }}> Size </span> : <span>12</span></td>
                                    <td style={{ paddingLeft: '10px' }}> <span style={{ opacity: "0.8" }}> Type </span> : <span>Running Shoes ,Womens Shoes</span></td>
                                </tr>

                            </table>

                            <div style={{ marginTop: "15px", padding: "10px", display: "flex", justifyContent: 'space-between' }}>
                                <h4> $ 58.00 <span style={{ fontSize: "18px" }} >$ 65.12</span></h4>
                                <button class="btn btn-outline-dark flex-shrink-0" type="button" id='boxx' style={{ marginLeft: "5px", color: "white" }}>
                                    <i class="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>

                            <h6 style={{ padding: "5px" }}>Description</h6>
                            <p style={{ padding: "5px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim consequatur architecto nesciunt fugit corrupti aut nemo voluptatibus doloremque ea dicta tempora molestiae quas nisi ipsam, inventore voluptate ipsum perspiciatis!</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
