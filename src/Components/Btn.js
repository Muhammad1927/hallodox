import Card from 'react-bootstrap/Card';



const Btno = (props) => {
    return (
        <Card style={{display: "flex", flexDirection: "row", cursor: "pointer"}}>
        <Card.Body>
          <Card.Text style={{textAlign: "center", color: "#e0004d", fontWeight: "640", fontSize: ".875rem", marginTop: "4px"}}>
            LIHAT SEMUA
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default Btno;