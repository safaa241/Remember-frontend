import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1 className="display-4 mb-4 text-primary font-weight-bold">Bienvenu sur RememberMe</h1>
                <p className="lead text-muted">
                    RememberMe est une application de gestion des événements tels que des concerts, des festivals, des conférences, des Anniversaires , etc. Vous pouvez vous inscrire pour recevoir des notifications par mail concernant les événements qui vous intéressent.
                </p>
                <p className="mb-5 text-muted">
                    Consultez les événements à venir, gérez votre profil et bien plus !
                </p>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-5 mb-4">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title text-center">Accédez à votre compte</h5>
                            <p className="card-text text-center mb-4">Consulter votre profil et peut modifier</p>
                            <div className="d-flex justify-content-center">
                                <Link to="/profil" className="btn btn-primary btn-lg mx-2 w-100">Profil</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-5 mb-4">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title text-center">Explorez les fonctionnalités</h5>
                            <p className="card-text text-center mb-4">
                                Découvrez les événements, consultez le calendrier et modifiez votre profil.
                            </p>
                            <div className="d-flex justify-content-center flex-column">
                            <Link to="/calendar" className="btn btn-info btn-lg mb-3">Calendrier</Link>
                                <Link to="/list" className="btn btn-success btn-lg mb-3">Liste des Événements</Link>
                                <Link to="/add" className="btn btn-warning btn-lg">Ajouter Événements</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
