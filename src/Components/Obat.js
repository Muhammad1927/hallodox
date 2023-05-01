import Card from 'react-bootstrap/Card';



const Obat = (props) => {
    return (
        <Card style={{display: "flex", flexDirection: "row", cursor: "pointer"}}>
          <Card.Img variant="top" src={props.obat} style={{ width: "13%", height: "13%", margin: "10px", marginLeft: "10px", marginRight: "0"}}/>
        <Card.Body>
          <Card.Text style={{ fontSize: ".875rem", fontWeight: "600",}}>
            {props.obt}
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default Obat;