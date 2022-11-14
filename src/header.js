import React from "react";
import "./style.css";

export default function App() {
  return (
    <div id="header">
      <div class="row">
        <div class="col-md-6">
          <a id="logo">Social</a>
          <a id="logo2">Network</a>
          
        </div>
        <div class="col-md-6">
        <div class="input-group">
  <input type="search" class="form-control rounded" placeholder="find" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">Find</button>
</div>
        </div>
      </div>
    </div>
  );
}