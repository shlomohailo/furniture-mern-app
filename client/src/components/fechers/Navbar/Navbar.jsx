
import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function Navbar() {
  return (
    <>
      <MDBNavbar light bgColor='dark'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <img
              src='/images/furniturelogo.jpg'
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}