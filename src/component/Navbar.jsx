import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <div className="container-fluid fixed-top px-0"> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand d-lg-none" to="/Home">Remember</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/calendar">Calendrier</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add">Ajouter Événements</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Liste des Événements</Link>
                            </li>
                            <li className="nav-item d-lg-none">
                                <Link className="nav-link" to="/profil">Profil</Link>
                            </li>
                        </ul>
                        
                        <div className="d-none d-lg-flex align-items-center">
                            <Link className="nav-link me-3" to="/profil">
                                <img   
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"   
                                    alt="avatar"  
                                    className="rounded-circle img-fluid"  
                                    style={{ width: '30px' }}   
                                />
                            </Link>
                            <Link className="nav-link" to="/inscription">Logout</Link>
                        </div>
                    </div>
                    
                    {/* Pour les petits écrans, afficher l'avatar et logout dans le menu déroulant */}
                    <div className="d-lg-none ms-auto">
                        <Link className="nav-link" to="/profil">
                            <img   
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"   
                                alt="avatar"  
                                className="rounded-circle img-fluid"  
                                style={{ width: '30px' }}   
                            />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;