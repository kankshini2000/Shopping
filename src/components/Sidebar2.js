import React from 'react';
import Decorlogo from '../assets/decorlogo.PNG'
import '../css/logo1.css'
import '../css/search.css'
import '../css/text.css'
import { MDBCol } from "mdbreact";

export default function App() {
  return (
    
    <div>
        <img src={Decorlogo}  alt="img"  className='img'/>
        <MDBCol md="6">
      <div className="search">
        <input className="form-control" type="text" placeholder="What are you looking for?" aria-label="Search" />

      </div>

    </MDBCol>
    </div>
  );
}