import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap'
import './Login.css'
import { useHistory } from 'react-router-dom'

const LoginPage = () => {

    const history = useHistory()

    function changePage(){
        history.push("/Panel")
    }

    return (
        <Container className="text-center">
            <Form className="form-size">

                <img src="/assets/gg-logo.png" width="250px" alt="GG Logo" />

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Digite seu Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Senha" />
                </Form.Group>

                <Button className="max-button" variant="primary" type="submit" onClick={changePage}>
                    Entrar
                </Button>
            </Form>
        </Container>
    )
}

export default LoginPage