import React, { useState, useEffect } from 'react';
import { 
  Container, Form, Button, Card, Row, Col, 
  Alert, InputGroup, FloatingLabel 
} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function AddEventPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [eventData, setEventData] = useState({
        id: '',
        title: '',
        type: '',
        description: '',
        date: '',
        time: ''
    });
    const [errors, setErrors] = useState({});

    const eventTypes = ['Musique', 'Art', 'Culture', 'Conférence', 'Anniversaire'];

    useEffect(() => {
        if (location.state?.event) {
            const { event } = location.state;
            const eventDate = new Date(event.date);
            setEventData({
                id: event.id,
                title: event.title,
                type: event.category,
                description: event.description,
                date: eventDate.toISOString().split('T')[0],
                time: eventDate.toTimeString().substring(0, 5)
            });
        } else {
            const now = new Date();
            setEventData({
                ...eventData,
                date: now.toISOString().split('T')[0],
                time: now.toTimeString().substring(0, 5)
            });
        }
    }, [location.state]);

    const validate = () => {
        const newErrors = {};
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(`${eventData.date}T${eventData.time}:00`);

        if (!eventData.title) newErrors.title = "Le titre est requis";
        if (!eventData.type) newErrors.type = "Le type est requis";
        if (!eventData.date) newErrors.date = "La date est requise";
        if (!eventData.time) newErrors.time = "L'heure est requise";
        
        if (selectedDate < today && !eventData.id) {
            newErrors.date = "La date ne peut pas être dans le passé";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validate()) return;

        const event = {
            id: eventData.id || Date.now().toString(),
            title: eventData.title,
            description: eventData.description,
            date: `${eventData.date}T${eventData.time}:00`,
            category: eventData.type
        };

        const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
        const updatedEvents = eventData.id
            ? existingEvents.map(ev => ev.id === eventData.id ? event : ev)
            : [...existingEvents, event];

        localStorage.setItem('events', JSON.stringify(updatedEvents));
        navigate('/events');
    };

    return (
        <Container className="py-4" style={{ maxWidth: '800px' }}>
            <Row className="align-items-center mb-4">
                <Col xs="auto">
                    <Link to="/events" className="btn btn-outline-secondary">
                        ← Retour
                    </Link>
                </Col>
                <Col>
                    <h2 className="mb-0">
                        {eventData.id ? 'Modifier Événement' : 'Nouvel Événement'}
                    </h2>
                </Col>
            </Row>

            <Card className="shadow">
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <FloatingLabel controlId="title" label="Titre de l'événement *" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Titre"
                                value={eventData.title}
                                onChange={(e) => setEventData({...eventData, title: e.target.value})}
                                isInvalid={!!errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel controlId="type" label="Type d'événement *" className="mb-3">
                            <Form.Select
                                value={eventData.type}
                                onChange={(e) => setEventData({...eventData, type: e.target.value})}
                                isInvalid={!!errors.type}
                            >
                                <option value="">Sélectionnez...</option>
                                {eventTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.type}
                            </Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel controlId="description" label="Description" className="mb-3">
                            <Form.Control
                                as="textarea"
                                placeholder="Description"
                                style={{ height: '120px' }}
                                value={eventData.description}
                                onChange={(e) => setEventData({...eventData, description: e.target.value})}
                            />
                        </FloatingLabel>

                        <Row className="g-3 mb-4">
                            <Col md={6}>
                                <FloatingLabel controlId="date" label="Date *">
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="date"
                                            value={eventData.date}
                                            onChange={(e) => setEventData({...eventData, date: e.target.value})}
                                            isInvalid={!!errors.date}
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.date}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </FloatingLabel>
                            </Col>
                            <Col md={6}>
                                <FloatingLabel controlId="time" label="Heure *">
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="time"
                                            value={eventData.time}
                                            onChange={(e) => setEventData({...eventData, time: e.target.value})}
                                            isInvalid={!!errors.time}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.time}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <div className="d-grid">
                            <Button variant="primary" type="submit" size="lg">
                                {eventData.id ? 'Mettre à jour' : 'Enregistrer'}
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default AddEventPage;