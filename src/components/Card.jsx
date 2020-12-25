import React from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'

const CardComponent = (props) => {

    const history = useHistory()
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`/assets/panel/${props.img}.jpg`} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button variant="primary" onClick={() => { history.push(`/${props.route}`) }}>Acessar</Button>
            </Card.Body>
        </Card>
    )
}

export default CardComponent