
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Listeidee() {

    const [loading, setLoading] = useState(true);
    const [idee, setIdeas] = useState([]);

    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/listeidee`).then(res=>{
            
                setIdeas(res.data.idee)
                setLoading(false);
            
        });

    }, []);


    if(loading)
    {
        return <h4 className='mt-4'>Chargement des idées...</h4>
    }
    else
    {
        var idee_HTMLTABLE = "";
       
        idee_HTMLTABLE = idee.map( (item, index) => {
            return (
                <tr key={index}>
                    <td>{item.titre}</td>
                    <td>{item.description}</td>
                    <td>{item.statut}</td>
                </tr>
            );
        });
    }
console.warn(idee);
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
             
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Titre</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {idee_HTMLTABLE}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Listeidee