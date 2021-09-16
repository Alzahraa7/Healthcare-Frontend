import React from 'react';
import Card from 'react-bootstrap/Card'
import '../nav.css'

function Footeer (){
    return(
<footer class="page-footer pt-4 footerr">
  <div class="container">
    <ul class="list-unstyled list-inline text-center">
        <p style={{fontWeight: "bold",fontSize: "23px"}}>
      We are also in 
      </p>
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1" style={{fontWeight: "bold",fontSize: "26px", color:"black"}}>
          <i class="fab fa-facebook-f"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1" style={{fontWeight: "bold",fontSize: "26px", color:"black"}}>
          <i class="fab fa-twitter"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1" style={{fontWeight: "bold",fontSize: "26px", color:"black"}}>
          <i class="fab fa-google-plus-g"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1" style={{fontWeight: "bold",fontSize: "26px", color:"black"}}>
          <i class="fab fa-linkedin-in"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1" style={{fontWeight: "bold",fontSize: "26px", color:"black"}}>
          <i class="fab fa-dribbble"> </i>
        </a>
      </li>
    </ul>

  </div>
  <div class="footer-copyright text-center py-3" >Copyright © 2020 - 2021 <br/> All Rights Reserved to our graduation project team
  </div>

</footer>
    );
}

export default Footeer;