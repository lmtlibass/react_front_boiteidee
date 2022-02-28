import { Card } from 'react-bootstrap';


export default function SuggestionCard({suggestion}){

    return (
        <div >     
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{suggestion.titre} {suggestion.nom}</Card.Title>
                    <Card.Text>{suggestion.description}</Card.Text>
                    <Card.Link href="#">approuvée</Card.Link>
                    <Card.Link href="#">refusée</Card.Link>
                </Card.Body>
                </Card>
        </div>
    );
}

/* <Card style={{ width: '18rem' }}>
<Card.Body>
    <Card.Title>{props.dool}</Card.Title>
    <Card.Text>{props.dool}</Card.Text>
    <Card.Link href="#">approuvée</Card.Link>
    <Card.Link href="#">refusée</Card.Link>
</Card.Body>
</Card> */