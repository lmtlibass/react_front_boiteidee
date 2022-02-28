import { Card } from 'react-bootstrap';

export default function SuggestionCard({suggestion}){
    const approved = () => {
        console.log("approuved!");
    }
    const refused = () => {
        console.log("refused!");
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{suggestion.prenom} {suggestion.nom}</Card.Title>
                <Card.Text>{suggestion.email}</Card.Text>
                <Card.Link href="#" onClick={approved}>approuvée</Card.Link>
                <Card.Link href="#" onClick={refused}>refusée</Card.Link>
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