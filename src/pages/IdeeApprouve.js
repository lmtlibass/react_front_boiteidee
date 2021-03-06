import React, {useState, useEffect} from 'react';
import SuggestionCard from '../components/Card.js';
import { Stack } from 'react-bootstrap';

function IdeeApprouve() {
    const [suggestions, setSuggestions] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect( ()=> {
        fetch('https://api-boite-idee.herokuapp.com/api/idee')
            .then( res => res.json())
            .then( data => {
                setSuggestions(data);
                setIsLoaded(true);
            })
    });
    return (
        <Stack direction="horizontal" gap={3} className="p-5">{
            isLoaded && suggestions.filter( suggestion => suggestion.email === "alaldjilibs@gmail.com")
                .map(suggestion => <SuggestionCard suggestion={suggestion}/>)
        }</Stack>
    );
}
export default IdeeApprouve