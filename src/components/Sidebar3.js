import React from 'react';
import { MDBBtn,MDBIcon } from 'mdb-react-ui-kit';
import '../css/text.css'
import '../css/img1.css'
import Cart from '../assets/cart.jpg'
import User from '../assets/user.jpg'


export default function App() {
  return (
    <div>
      <div>
      <img src={User}  alt="img"  className='img1'/>
      </div>  
    <p className='text'>Hey! Log in or Sign up</p>
    <div>
    </div>
    <img src={Cart}  alt="img"  className='img2'/>
    </div>
  );
}

