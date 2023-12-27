import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import RestCard from './RestCard'


function Allrest() {
  const base_url = 'https://restaurant-backend-25ek.onrender.com/restaurants'

  const [AllrestData, setAllrestData] = useState([])

  //API Fteching
  const fetchData = async () => {
    const result = await axios.get(base_url)
    console.log(result.data);
    setAllrestData(result.data)
    console.log(AllrestData);
  }

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <div>
      <Row>
        {
          AllrestData.map(item => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <RestCard restaurants={item}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Allrest