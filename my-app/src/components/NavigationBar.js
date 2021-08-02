import { Navbar, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar sticky = "top" bg="primary" variant="dark">
    
    <Navbar.Brand href="/">
    <img  
    src='#' 
    className='img-fluid' alt='Arnav Nath Misra' />
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link  href="#">Resume</Nav.Link>
    </Nav>
  
  </Navbar>

        </div>
    )
}

export default NavigationBar
