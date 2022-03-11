import React from 'react'
import {Navbar,Nav,Container, Button,} from 'react-bootstrap'
import {Link} from'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header() {

    const navigate=useNavigate();
    
    const loggingOut=()=>{
        window.localStorage.clear();
        navigate('/login_page');
    }

    let word="Webskitters"
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            
            <Navbar.Brand as={Link} to ="/" ><img class="logo" src={"../../../image/logofp.jpg"} alt="logofp"/></Navbar.Brand> {/*Default path setup*/}
            <Nav className="me-auto">
            <Nav.Link as={Link} to ="/">Home</Nav.Link>
            <Nav.Link as={Link} to ="/about_page">About</Nav.Link>
            <Nav.Link as={Link} to ={`/contact_page/${word}`}>Contact</Nav.Link>
            <Nav.Link as={Link} to ="/feedback_page">Feedback</Nav.Link>
            {/* <Nav.Link as={Link} to="/p_catagory">Product</Nav.Link> */}
            <Nav.Link as={Link} to ="/topics">Courses</Nav.Link>
            
            </Nav>
            </Container>
            <Nav.Link as={Link} to ="/register_page">Register</Nav.Link>
            <Nav.Link as={Link} to ="/login_page">Login</Nav.Link>
            {/* <Nav.Link as={Link} to ="/profile_page">Profile</Nav.Link> */}
            <button onClick={loggingOut}>logout</button>
            </Navbar>
            
        </div>
        
    )
}


