import Card from 'react-bootstrap/Card';

const Bawah = (props) => {
    return (
        <Card className='px-4 my-3' style={{display: "flex", flexDirection: "row", width: "380px"}}>
        <Card.Img variant="top" src={props.image} style={{width: "10%", height: "10%", marginTop: "30px"}}/>
        <Card.Body>
            <Card.Title style={{fontWeight: "700", fontSize: "16px"}}>
                {props.title}
            </Card.Title>
            <Card.Text style={{fontSize: "12px", marginTop: "4px", color: "#616161"}}>
                {props.text}
            </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Bawah;