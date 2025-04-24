import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Inscription() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('')
    const handleEmailExiste = () => {
        if (email) {
            navigate (`/`);
        } else {
            alert('Veuillez entrer un email valide.');
            navigate (`/signup`); // navigate (`/Inscription`);
        }
        setEmail('');
        // email ? navigate(`/`) : navigate(`/inscription`)
    }

    return(
        <form>
            <h2> Connexion </h2>
            <div className="mb-3">
                <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                <input type="text" className="form-control" id="exampleInputUsername" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleEmailExiste}>Submit</button>
            <p> tu as déjà un compte ?<Link to="/">Connexion</Link></p>
        </form>
    )
}
export default Inscription;