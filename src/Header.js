import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div>
           <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home" className='ms-4'>Boite à idées</Navbar.Brand>
                <Nav className="me-auto navbar-warapper">
                    <Link to="/add">Ajouter idee</Link>
                    <Link to="/approuve">Idées Approuvées</Link>
                    <Link to="/liste">Liste idées</Link>
                </Nav>
            </Navbar>
        </div>
    );
}
export default Header
