import React from 'react'
import Item from './Item'
import logoimages from '../imges/logoo-imges.jpeg'
// import Cont from './Cont'
import Footer from './Footer'
import Allproduct from './Allproduct'
import Pro from './Pro'
import Itemmore from './Itemmore'

export default function Navbar() {
    return (
        <div>

            <div style={{boxShadow:"1px 1px 10px  1px gray"}}><nav class="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a class="navbar-brand" style={{ paddingLeft: '50px' }} >logo</a> */}
               <a> <img class="navbar-brand" style={{ paddingLeft: '45px', width:"150px"}} src={logoimages}  alt="" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav" style={{ justifyContent: 'center' }} >
                    <ul class="navbar-nav">
                        <li class="nav-item active" >
                            <a class="nav-link" style={{fontWeight:"700"}} >Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item" style={{ paddingLeft: '25px' }}>
                            <a class="nav-link"  >Free listing</a>
                        </li>
                        <li class="nav-item" style={{ paddingLeft: '25px' }}>
                            <a class="nav-link"  >Service</a>
                        </li>
                        <li class="nav-item" style={{ paddingLeft: '25px' }}>
                            <a class="nav-link "  >Contact US</a>
                        </li>
                        <li class="nav-item" style={{ paddingLeft: '25px' }}>
                            <a class="nav-link " >Login/Register</a>
                        </li>
                    </ul>
                </div>
            </nav></div>
  <Item></Item>
  <Itemmore></Itemmore>

<Allproduct></Allproduct>
<Pro></Pro>
  <Footer></Footer>
        </div>
    )
}
