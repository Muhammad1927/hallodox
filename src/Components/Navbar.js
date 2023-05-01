import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Navigation = (props) => {
    return (
        <Navbar bg="light" expand="lg" className='px-5' style={{ borderBottom: "1px solid gray" }}>
      <Container className='p-0'>
        <Navbar.Brand href="#"><img style={{ width: "181px", marginLeft: "-50px", marginRight: "20px" }} src={props.image} alt='logo1'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{ color: "black" }} href="#action1">Beranda</Nav.Link>
            <Nav.Link href="#action2">Article</Nav.Link>
            <Nav.Link href="#action2">Aplikasi</Nav.Link>
            <Nav.Link href="#action2">Riwayat</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant='danger' style={{ fontWeight: "500", marginRight: "-50px" }}>Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}


export default Navigation;