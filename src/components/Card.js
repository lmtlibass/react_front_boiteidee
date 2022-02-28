import { Card } from 'react-bootstrap';

export default function SuggestionCard({suggestion}){
    const approved = () => {
        console.log("approuved!");
    }
    const refused = (id) => {
        fetch('https://api-boite-idee.herokuapp.com/api/idee')
        .then(res => res.json())
        .then(data => {
            data[id].statut = true
            
        })
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{suggestion.titre} {suggestion.nom}</Card.Title>
                <Card.Text>{suggestion.description}</Card.Text>
                <Card.Link href="#" onClick={approved}>approuvée</Card.Link>
                <Card.Link href="#" onClick={()=>refused(suggestion.id)}>refusée</Card.Link>
            </Card.Body>
            </Card>
        </div>
    );
}

{/* <Card style={{ width: '18rem' }}>
<Card.Body>
    <Card.Title>{props.dool}</Card.Title>
    <Card.Text>{props.dool}</Card.Text>
    <Card.Link href="#">approuvée</Card.Link>
    <Card.Link href="#">refusée</Card.Link>
</Card.Body>
</Card> */}