import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";

function CalendarPage() {
    const navigate = useNavigate();

    const calendarClass = `
        bg-white 
        border-0 
        rounded-3 
        shadow-sm 
        p-2 p-md-3 
        w-100
    `;

    const tileClass = ({ view }) => {
        let classes = 'btn btn-sm border-0 ';
        if (view === 'month') {
            classes += 'rounded-circle ';
        }
        return classes;
    };

    const handleDateClick = (date) => {
        navigate('/add', { 
            state: { 
                selectedDate: date 
            } 
        });
    };

    return (
        <div className="container py-3 py-md-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-3 p-md-4">
                            <h2 className="text-center mb-3 mb-md-4 text-primary">Mon Calendrier</h2>
                            
                            <div className="mb-3 mb-md-4">
                                <Calendar 
                                    className={calendarClass}
                                    tileClassName={tileClass}
                                    onClickDay={handleDateClick}
                                    navigationLabel={({ label }) => (
                                        <span className="fw-bold text-dark">{label}</span>
                                    )}
                                />
                            </div>
                            
                            <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 gap-md-3">
                                <button 
                                    className="btn btn-primary px-3 px-md-4 py-2 rounded-pill fw-medium"
                                    onClick={() => navigate('/add')}
                                >
                                    Ajouter événement
                                </button>
                                <button 
                                    className="btn btn-outline-primary px-3 px-md-4 py-2 rounded-pill fw-medium"
                                    onClick={() => navigate('/events')}
                                >
                                    Voir événements
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarPage;