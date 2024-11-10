import React from 'react'
import men from '../imges/men.jpg'
import shoess from '../imges/shoes-imges.jpeg'
import { IoIosStarOutline } from "react-icons/io";
export default function Pro() {
    return (
        <div style={{ border: "1px solid balck", marginLeft: "150px", marginRight: "150px" }}>
            <h4 style={{ display: "flex", justifyContent: "space-between" }}><span>User review on this Product</span> <span>View more</span></h4>
            <div style={{ border: "1px solid balck", display: "flex" }} as>
                <div style={{ margin: "15px" }}>
                    <div style={{ display: "flex" }}>
                        <img style={{ borderRadius: "50%" }} src={men} alt="" width={"44px"} />
                        <p style={{ padding: "5px", marginLeft: "15px" }}> <span style={{ fontWeight: "500" }}>Sama Seth</span>  <br />
                            <span style={{ fontSize: "12px" }}>2 Days ago</span></p>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <img src={shoess} alt="" width={"60px"} style={{ padding: "2px" }} />
                        <img src={shoess} alt="" width={"60px"} style={{ padding: "2px" }} />
                    </div>
                </div>
                <div style={{ width: "80%", padding: "20px" }}>
                    <h4 style={{ display: "flex", justifyContent: "space-between" }}><span>Easy The most confortable Shoes</span> <span>4.9  <IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /></span>
                    </h4>
                    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
                        assumenda. Provident inventore recusandae a eius atque. Sunt, dolorem nostrum?
                        Neque numquam reprehenderit expedita minus voluptatem eius odit dicta rem nemo a, officiis laborum. Non dignissimos in voluptate assumenda aliquam at perspiciatis. Doloribus soluta corrupti modi aliquam iure perferendis placeat sed.</p>
                </div>
            </div>
            <div style={{ border: "1px solid balck", display: "flex" }} as>
                <div style={{ margin: "15px" }}>
                    <div style={{ display: "flex" }}>
                        <img style={{ borderRadius: "50%" }} src={men} alt="" width={"44px"} />
                        <p style={{ padding: "5px", marginLeft: "15px" }}> <span style={{ fontWeight: "500" }}>Sama Seth</span>  <br />
                            <span style={{ fontSize: "12px" }}>2 Days ago</span></p>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <img src={shoess} alt="" width={"60px"} style={{ padding: "2px" }} />
                        <img src={shoess} alt="" width={"60px"} style={{ padding: "2px" }} />
                    </div>
                </div>
                <div style={{ width: "80%", padding: "20px" }}>
                    <h4 style={{ display: "flex", justifyContent: "space-between" }}><span>Easy The most confortable Shoes</span> <span>4.9  <IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /></span>
                    </h4>
                    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
                        assumenda. Provident inventore recusandae a eius atque. Sunt, dolorem nostrum?
                        Neque numquam reprehenderit expedita minus voluptatem eius odit dicta rem nemo a, officiis laborum. Non dignissimos in voluptate assumenda aliquam at perspiciatis. Doloribus soluta corrupti modi aliquam iure perferendis placeat sed.</p>
                </div>
            </div>
            <div style={{ border: "1px solid balck", display: "flex" }} as>
                <div style={{ margin: "15px" }}>
                    <div style={{ display: "flex" }}>
                        <img style={{ borderRadius: "50%" }} src={men} alt="" width={"44px"} />
                        <p style={{ padding: "5px", marginLeft: "15px" }}> <span style={{ fontWeight: "500" }}>Sama Seth</span>  <br />
                            <span style={{ fontSize: "12px" }}>2 Days ago</span></p>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <img src={shoess} alt="" width={"60px"} style={{ padding: "2px" }} />
                        <img src={shoess} alt="" width={"60px"} style={{ padding: "2px" }} />
                    </div>
                </div>
                <div style={{ width: "80%", padding: "20px" }}>
                    <h4 style={{ display: "flex", justifyContent: "space-between" }}><span>Easy The most confortable Shoes</span> <span>4.9  <IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /></span>
                    </h4>
                    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
                        assumenda. Provident inventore recusandae a eius atque. Sunt, dolorem nostrum?
                        Neque numquam reprehenderit expedita minus voluptatem eius odit dicta rem nemo a, officiis laborum. Non dignissimos in voluptate assumenda aliquam at perspiciatis. Doloribus soluta corrupti modi aliquam iure perferendis placeat sed.</p>
                </div>
            </div>
        </div>
    )
}
