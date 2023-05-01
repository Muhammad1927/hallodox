import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const navArtikel = (props) => {
    return (
        <Navbar style={{marginTop: "40px", boxShadow: "none"}}>
      <Container>
        <Navbar.Brand href="#home" style={{fontWeight: "600", fontSize: "1.5rem", color: "black", marginLeft: '-30px'}}>Baca 100+ Artikel Baru</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login" style={{fontWeight: "600", fontSize: ".875rem", color: "#e0004d", textDecoration: "none", cursor: "pointer"}}>Lihat Semua</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default navArtikel;