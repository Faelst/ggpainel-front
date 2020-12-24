import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Navbar, Card, Button } from 'react-bootstrap'


const PanelPage = () => {
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img alt="" src="logo192.png" width="30" height="30" className="d-inline-block align-top"/>
                    React Bootstrap
                </Navbar.Brand>
            </Navbar>

            <Col>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </Col>
            
        <Col>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </Col>

        </Container>



    )
}

export default PanelPage