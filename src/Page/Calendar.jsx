
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { useNavigate } from "react-router-dom";

function CalendarPage() {
    const navigate = useNavigate();
    const [date, setDate] = useState(null);
        const [ events, setEvents] = React.useState([]);
    
        const handleEventAdd = (event) => {
            // ...: opérateur de propagation: copier tout ou partie d'un objet existant dans un autre objet
            // opérateur de propagation met à jour l'objet events en modifiant ou ajoutant la clé event 
            setEvents([...events, event]); 
            navigate('/add');
        }

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
            <button onClick={ handleEventAdd}> AddEventPage</button>
        </div>

    )
}
export default CalendarPage;
        