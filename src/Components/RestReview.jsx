import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Toast from 'react-bootstrap/Toast';
import './Review.css';

function RestReview({ rev }) {
    console.log(rev); //array

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <p variant="dark" onClick={handleShow} style={{ color: 'white' }}>
                Reviews
            </p>

            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Dive into Customer Feedback</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        {
                            rev?.map(item=>(
                                <Toast className='my-4'>
                                <Toast.Header>
                                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                    <strong className="me-auto">{item.name}</strong>
                                    <small>{item.date}</small>
                                </Toast.Header>
                                <Toast.Body>
                                    <p style={{textAlign:'justify'}}>{item.comments}</p>
                                    <hr />
                                    <p style={{fontWeight:'bold'}}>Rating: {item.rating}</p>
                                </Toast.Body>
                            </Toast>
                            ))
                        }
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default RestReview