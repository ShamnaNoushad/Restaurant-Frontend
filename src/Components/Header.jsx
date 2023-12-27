import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='light' style={{height:'70px'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            {/* <img
              src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
              height='30'
              alt=''
              loading='lazy'
            /> */}
            <i class="fa-solid fa-utensils fa-2xl mx-2"></i>
            Easy-Dining
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header