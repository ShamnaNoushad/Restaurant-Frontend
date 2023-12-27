import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function RestCard({ restaurants }) {
    console.log(restaurants);
    return (
        <div>
            <Link to={`view/${restaurants.id}`} style={{textDecoration:'none'}}>
                <MDBCard className='mx-3 my-4'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={restaurants.photograph} fluid alt='...' style={{ height: '350px', width: '100%' }} />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>{restaurants.name}</MDBCardTitle>
                        <MDBCardText>
                            {restaurants.address}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </Link>
        </div>
    )
}

export default RestCard