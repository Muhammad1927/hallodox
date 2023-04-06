import Nav from 'react-bootstrap/Nav';

const buttonArtikel = (props) => {
    return (
        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="#" style={{border: "1px solid #e0004d", background: "#fce6ed", fontWeight: "500", fontSize: ".875rem", color: "#e0004d", marginRight: "10px", marginLeft: "-10px"}}>Terbaru</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#"  style={{border: "1px solid #333", fontWeight: "500", fontSize: ".875rem", color: "#333",marginRight: "10px"}}>Populer</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" style={{border: "1px solid #333", fontWeight: "500", fontSize: ".875rem", color: "#333", marginRight: "10px"}}>Kanker</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" style={{border: "1px solid #333", fontWeight: "500", fontSize: ".875rem", color: "#333", marginRight: "10px"}}>Cacar Monyet</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" style={{border: "1px solid #333", fontWeight: "500", fontSize: ".875rem", color: "#333", marginRight: "10px"}}>Hepatitis</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" style={{border: "1px solid #333", fontWeight: "500", fontSize: ".875rem", color: "#333", marginRight: "10px"}}>Kehamilan</Nav.Link>
            </Nav.Item>
      
        </Nav>
    )
} 

export default buttonArtikel;