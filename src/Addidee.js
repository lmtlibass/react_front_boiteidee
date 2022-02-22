import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React ,{useState} from 'react';

function Addidee(){
    const [titre, setTitre]=useState("");
    const [description, setDescription]=useState("");

    async function add()
    {   
        let idees = {titre, description}; 
        console.log(idees);

        let result = await fetch("http://127.0.0.1:8000/api/addidee", {
            method: 'POST',
            body:JSON.stringify(idees),
            headers:{
                "Content-Type" : 'application/json',
                "Acept" : 'application/json'
            }
        });
        result = await result.json();
        console.warn("result",result);
    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <form>
                <h1 className='mb-5 mt-3'>ajouter votre idée</h1>
                <input type="text" value={titre} onChange={(e)=>setTitre(e.target.value)} className="form-control mb-4" placeholder='sur quoi porte votre idée'  />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" value={description} onChange={(e)=>setDescription(e.target.value)} rows={5} placeholder='expliquez en détail votre idée ici' />
                </Form.Group>
            </form>
            <Button onClick={add}>Envoyer</Button>
        </div>
        
    );
}
export default Addidee;