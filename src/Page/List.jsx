import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { useState } from 'react';

function List() {
    const [events, setEvents] = [  
        {  
            "id": 1,  
            "title": "Concert de rock",  
            "description": "Un concert de rock dans le parc.",  
            "date": "2025-05-01T20:00:00Z"  
        },  
        {  
            "id": 2,  
            "title": "Atelier de peinture",  
            "description": "Un atelier pour apprendre à peindre.",  
            "date": "2025-06-15T10:00:00Z" 
        },
        {
            "id": 3,
            "title": "Exposition d'art",  
            "description": "Une exposition présentant des artistes locaux.",
            "date": "2025-07-20T18:00:00Z"
        }
    ]
    const categories = ['tout', 'aujourd\'hui', 'après'];  
        const selectedCategory = useState(categories[0]);  
    
          
        const handleDelete = (id) => {
            const updatedEvents = events.filter(event => event.id !== id);
            setEvents(updatedEvents);
        }
        const handleEdit = (id) => {
            // Logic for editing the event will go here
            // This function will handle the logic for editing the event with the given id.
            const eventToEdit = events.find(event => event.id === id);
            console.log('Editing event:', eventToEdit);
            setEvents(events.map(event => event.id === id ? { ...eventToEdit, title: 'New Title' } : event));
            console.log('Event edited:', { ...eventToEdit, title: 'New Title' });
        }
        const handleAdd = (newEvent) => {
            setEvents([...events, newEvent]);
            console.log('Event added:', newEvent);
            console.log('Current events:', events);
        }

      
        const filteredEvents = events.filter(event => {  
            const eventDate = new Date(event.date);  
            const today = new Date();   
    
            if (selectedCategory === 'tout') {  
                return true;  
            } else if (selectedCategory === 'aujourd\'hui' && eventDate.toDateString() === today.toDateString()) {  
                return true; 
            } else if (selectedCategory === 'après' && eventDate > today) {  
                return true; 
            }  
            return false;  
        });

        return(
            <div className="container">
                <ul className="list-group">
                    {filteredEvents.map(event => (
                        <li key={event.id} className="list-group-item">
                            <strong>{event.title}</strong>: {event.description} on {new Date(event.date).toLocaleDateString()}
                            <button className="btn btn-info">View Details</button>
                            <button className="btn btn-secondary" onClick={() => handleAdd(event)}>Add to Calendar</button>
                            <button className="btn btn-danger" onClick={() => handleDelete(event.id)}>Delete</button>
                            <button className="btn btn-warning" onClick={() => handleEdit(event.id)}>Edit</button>
                        </li>
                        ))}
                </ul>

            </div>
        )
}
export default List;