import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const cardArtikel = (props) => {
    return (
        <Card style={{ width: '18rem',display:"flex", flexDirection:"column",  alignItems:"center", borderRadius:"5px", paddingbottom:"5px" }}>
             <Card.Img variant="top" src={props.crd} style={{width: "286px"}}/>
             <Card.Body>
                <Card.Text style={{marginLeft: "-10px"}}>
                    <h3 style={{fontSize: ".875rem", fontWeight: "600", color: "#333"}}>{props.cartu}</h3>
                    <Button variant="outline-secondary" disabled style={{cursor: "pointer", padding: "5px", fontSize: ".6875rem", color: "#135773", background: "#e9f4f9"}}>{props.btnk}</Button>{' '}
                    <p style={{fontSize: ".75rem", fontWeight: "400", color: "#333", marginBottom: "8px", marginTop: "10px"}}>{props.p}</p>
                </Card.Text>
        
            </Card.Body>
        </Card>
        
    )
}

export default cardArtikel;