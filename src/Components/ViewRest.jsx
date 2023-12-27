import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';

function ViewRest() {
  const [restDetails, setrestDetails] = useState({})
  //useParams - Used to get parameter from the url
  // const paraId=useParams()
  // console.log(paraId.id); //object -> id-3

  //Destruct
  const { id } = useParams()
  console.log(id);

  //API call to get details of the particular restaurant using the path parameter
  const base_url = 'https://restaurant-backend-25ek.onrender.com/restaurants'

  const fetchRest = async () => {
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setrestDetails(result.data)
  }
  useEffect(() => {
    fetchRest()
  }, [])

  return (
    <div>
      <Row style={{ margin: '30px' }}>
        <Col xl={6} sm={12}>
          <img src={restDetails.photograph} fluid alt="" style={{ width: '100%', height: '510px' }} />
        </Col>
        <Col>
          <h1>{restDetails.name}</h1>
          <ListGroup>
            <ListGroup.Item>Address: {restDetails.address}</ListGroup.Item>
            <ListGroup.Item>Neighborhood: {restDetails.neighborhood}</ListGroup.Item>
            <ListGroup.Item>Cuisine Type: {restDetails.cuisine_type}</ListGroup.Item>
            <ListGroup.Item><RestOp op={restDetails.operating_hours}/></ListGroup.Item>  
            <ListGroup.Item><RestReview rev={restDetails.reviews}/> </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest