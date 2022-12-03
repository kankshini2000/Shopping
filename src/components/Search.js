

import React from 'react';
import { MDBCol } from "mdbreact";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import '../css/search.css'
import Decorlogo from '../assets/decorlogo.PNG'
import '../css/logo1.css'

export default function App() {
  return (
    <div>
        <div className='sideimg'>
        <img src={Decorlogo}  alt="img"  className='img'/>
        </div>
        <MDBCol md="6">
      <div className="search">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBCol>
         
</div>
  );
}