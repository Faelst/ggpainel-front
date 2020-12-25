import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import NavbarComponent from '../../components/Navbar'
import DatePickerComponent from '../../components/DatePicker'

const TournamentPage = () => {
    return (
        <Container>
            <NavbarComponent />
            <DatePickerComponent></DatePickerComponent>
        </Container>
    )
}

export default TournamentPage