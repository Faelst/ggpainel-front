import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import AllCardsComponent from '../../components/AllCards'
import NavbarComponent from '../../components/Navbar'

const PanelPage = () => {
    return (
        <Container>
            <NavbarComponent />
            <AllCardsComponent />
        </Container>
    )
}

export default PanelPage