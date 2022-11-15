import React from "react";
import "./style.css";

export default function App() {
  return (
    <div id="footer">
      <hr/>
      <tr>
        <td width="30" align="center" bgcolor="white"><a href=""><i  class="fa fa-twitter"></i></a></td>
        <td>&nbsp;&nbsp;&nbsp;</td>
        <td
        width="30" align="center" bgcolor="white"
        ><i class="fa fa-linkedin"></i></td>
        <td><td>&nbsp;&nbsp;&nbsp;</td></td>
        <td
        width="30" align="center" bgcolor="white"
        ><i class="fa fa-facebook-f"></i></td>
      </tr>
      <br/>
      <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">About</a></li>
    <li class="breadcrumb-item"><a href="#">For Business</a></li>
    <li class="breadcrumb-item"><a href="#">Suggestion</a></li>
    <li class="breadcrumb-item"><a href="#">Help&FAQ</a></li>
    <li class="breadcrumb-item"><a href="#">Contacts</a></li>
    <li class="breadcrumb-item"><a href="#">Pricing</a></li>
  </ol>
</nav>
      <br/>
      
      <p id="logo">Copyright © 2022 companynameinc.</p>
      <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Privacy</a></li>
      <li class="breadcrumb-item"><a href="#">Terms</a></li>
  </ol>
    </div>
  );
}
