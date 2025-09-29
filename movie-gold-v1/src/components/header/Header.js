import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { Container, Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
  return (
    <Navbar bg="dark" varient="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{color:"gold"}}>
                <FontAwesomeIcon icon={faVideoSlash}/>Gold
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav 
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight:'100px'}}
                    navbarScroll>
                        <NavLink className='nav-link' to = "/" >Home</NavLink>
                        <NavLink className='nav-link' to = "/watchList">Watch List</NavLink>
                </Nav>
                <Button varient="outline-info" className="me-2">Login</Button>
                <Button varient="outline-info" className="me-2">Register</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header