import React, {useState, useEffect} from 'react';
import SuggestionCard from '../components/Card.js';
import { Stack } from 'react-bootstrap';



function Listeidee() {
    const [suggestions, setSuggestions] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect( ()=> {
        fetch('https://exemple-api.herokuapp.com/api/apprenants')
            .then( res => res.json())
            .then( data => {
                setSuggestions(data);
                setIsLoaded(true);
            })
    });
    return (
        <Stack direction="horizontal" gap={3} className="p-5">{
            isLoaded && suggestions.map(
                suggestion => <SuggestionCard suggestion={suggestion}/>
            )
        }</Stack>
    );

}
export default Listeidee