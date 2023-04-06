import Card from 'react-bootstrap/Card';



const Kartu = (props) => {
    return (
        <Card style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Card.Img variant="top" src={props.image} style={{ width: "45%", height: "38%", paddingTop: "20px"}}/>
        <Card.Body>
          <Card.Text style={{textAlign: "center", fontSize: "13px"}}>
            {props.deskripsi}
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default Kartu;