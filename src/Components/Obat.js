import Card from 'react-bootstrap/Card';



const Obat = (props) => {
    return (
        <Card style={{display: "flex", flexDirection: "row", cursor: "pointer"}}>
        <Card.Img variant="top" src={props.obat} style={{ width: "13%", height: "13%", margin: "10px"}}/>
        <Card.Body>
          <Card.Text style={{textAlign: "center", fontSize: ".875rem", fontWeight: "620", color: "#333", marginLeft: "-170px", marginTop: "5px"}}>
            {props.obt}
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default Obat;