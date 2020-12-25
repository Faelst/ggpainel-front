import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap'

const NavbarComponent = () => {
    return(
        <Navbar bg = "dark" variant = "dark" className = "justify-content-center" >
            <Navbar.Brand href="/panel" > 
                <img alt="" src="/assets/gg.png" width="30" height="30" className="d-inline-block align-top" />
                </Navbar.Brand>
        </Navbar >
    )
}

export default NavbarComponent