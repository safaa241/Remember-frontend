import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Connexion() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!values.email.trim()) {
            newErrors.email = "Ce champ est obligatoire.";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            newErrors.email = "L'adresse email est incorrecte.";
        }

        if (!values.password.trim()) {
            newErrors.password = "Ce champ est obligatoire.";
        } else if (values.password.length < 6) {
            newErrors.password = "Le mot de passe doit contenir au moins 6 caractères.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            navigate('/home');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="card p-4" style={{ width: "100%", maxWidth: "400px" }}>
                <h2 className="text-center mb-4">Connexion</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <div className="input-group">
                            <input
                                type="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="votre@email.com"
                            />
                        </div>
                        {errors.email && <div className="text-danger mt-1">{errors.email}</div>} 
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <div className="input-group">
                            <input
                                type="password"
                                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                            />
                        </div>
                        {errors.password && <div className="text-danger mt-1">{errors.password}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100"> <Link to="/home">Se connecter </Link></button>

                    <p className="text-center mt-3">
                        Pas de compte ? <Link to="/inscription">S'inscrire</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Connexion;