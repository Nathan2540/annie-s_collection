import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@chakra-ui/react';
import { MdVerified } from "react-icons/md";
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Box position={"sticky"} top={0} zIndex={2}>
    <Navbar collapseOnSelect expand="lg" className="white">
      <Container className='navcont'>
        <Navbar.Brand href="#home" className='brand'>aNNie<MdVerified />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Link to="/">
          <Nav.Link href="#features">Home</Nav.Link>
          </Link>
           
            <NavDropdown title="Shop" id="collapsible-nav-dropdown">
              <Link to='/Men'>
              <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
              </Link>
              <Link to='/Women'>
              <NavDropdown.Item href="#action/3.2">

                WoMen
              </NavDropdown.Item>
              </Link>
              <Link to="/Unisex">
              <NavDropdown.Item href="#action/3.3">Unisex</NavDropdown.Item>
              </Link>
            </NavDropdown>
          <Link to="/Reviews">
            <Nav.Link href="#features">Reviews</Nav.Link>
            </Link>
          <Link to="Contact">
            <Nav.Link href="#pricing">Contact US</Nav.Link>
            </Link>
          </Nav>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Box>
  );
}

export default CollapsibleExample;