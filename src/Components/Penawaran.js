import Card from 'react-bootstrap/Card';



const Penawaran = (props) => {
    return (
      <Card style={{ boxShadow: "none" , width: "300px", marginTop: "10px", margin: "15px", display: "flex", flexDirection: "row"}}>
        <Card.Img variant="top" src={props.penawaran} style={{ width: "300px", marginTop: "10px", borderRadius: "7px"}}/>
      </Card>
    );
}

export default Penawaran;