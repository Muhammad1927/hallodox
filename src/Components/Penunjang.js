import Card from 'react-bootstrap/Card';




const Penunjang = (props) => {
    return(
        <Card style={{ display:"flex", flexDirection:"column",  alignItems:"center", borderRadius:"5px", boxShadow: "none", paddingbottom:"5px"}}>
          <Card.Img src={props.penunjang} style={{width:"40px", marginTop:"10px"}}/>
          <Card.Body>
            <Card.Title style={{fontSize:".875rem", textAlign:"center", fontWeight:"400"}}>{props.tulis}</Card.Title>
          </Card.Body>
        </Card>
    )
}


export default Penunjang;