import React from 'react'
import footer from '../imges/logoo-imges.jpeg'
export default function Footer() {
  return (
    <div style={{boxShadow:"1px 1px 10px 1px gray"}}>
<footer class="text-center text-lg-start bg-body-tertiary text-muted">
  
   
  <section class="">
    <div class="container text-center text-md-start mt-5 p-3" >
      <div class="row mt-3">
        <img src={footer} width={"120px"} height={"100px"} alt="" />
         {/*<div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div> */}
        
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a   class="text-reset">Angular</a>
          </p>
          <p>
            <a   class="text-reset">React</a>
          </p>
          <p>
            <a   class="text-reset">Vue</a>
          </p>
          <p>
            <a   class="text-reset">Laravel</a>
          </p>
        </div>
        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a   class="text-reset">Pricing</a>
          </p>
          <p>
            <a   class="text-reset">Settings</a>
          </p>
          <p>
            <a   class="text-reset">Orders</a>
          </p>
          <p>
            <a   class="text-reset">Help</a>
          </p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          
          <p>
            <a   class="text-reset">Pricing</a>
          </p>
          <p>
            <a   class="text-reset">Settings</a>
          </p>
          <p>
            <a   class="text-reset">Orders</a>
          </p>
          <p>
            <a   class="text-reset">Help</a>
          </p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          
         <p>
           <a   class="text-reset">Pricing</a>
         </p>
         <p>
           <a   class="text-reset">Settings</a>
         </p>
         <p>
           <a   class="text-reset">Orders</a>
         </p>
         <p>
           <a   class="text-reset">Help</a>
         </p>
       </div>
        
      </div>
    </div>
  </section>
  
  <div class="text-center p-4" style={{backgroundcolor: "rgba(0, 0, 0, 0.05);"}}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis neque qui nam error, dicta cum, labore fugit eaque eos, culpa veritatis tenetur distinctio accusamus!</p>
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https/">Weberal</a>
  </div>
</footer>
    </div>
  )
}
