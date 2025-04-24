import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container, Row, Col, Card, Button, Badge,
  Form, InputGroup, Alert, ButtonGroup
} from 'react-bootstrap';
import { FaEdit, FaTrash, FaCalendarPlus, FaSearch } from "react-icons/fa";

function List() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [selectedOption, setSelectedOption] = useState('tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('toutes');

  const categories = ['toutes', 'Musique', 'Art', 'Culture', 'Conférence', 'Anniversaire'];
  const dateFilters = [
    { value: 'tous', label: 'Tous' },
    { value: 'aujourdhui', label: "Aujourd'hui" },
    { value: 'semaine', label: 'Cette semaine' },
    { value: 'futur', label: 'Futurs' }
  ];

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(savedEvents.sort((a, b) => new Date(a.date) - new Date(b.date)));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) {
      const updatedEvents = events.filter(event => event.id !== id);
      setEvents(updatedEvents);
      localStorage.setItem('events', JSON.stringify(updatedEvents));
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = searchTerm === '' ||
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'toutes' || event.category === selectedCategory;

    const eventDate = new Date(event.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + 7 - today.getDay());

    let matchesDate = true;
    switch (selectedOption) {
      case 'aujourdhui':
        matchesDate = eventDate.toDateString() === today.toDateString();
        break;
      case 'semaine':
        matchesDate = eventDate >= today && eventDate <= endOfWeek;
        break;
      case 'futur':
        matchesDate = eventDate > today;
        break;
      default:
        matchesDate = true;
    }

    return matchesSearch && matchesCategory && matchesDate;
  });

  const getCategoryVariant = (category) => {
    const variants = {
      'Musique': 'primary',
      'Art': 'warning',
      'Culture': 'success',
      'Conférence': 'info',
      'Anniversaire': 'danger'
    };
    return variants[category] || 'secondary';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('fr-FR', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Container className="py-4">
      <Row className="align-items-center mb-4">
        <Col>
          <h1 className="h2 text-primary mb-0">📅 Agenda Événements</h1>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={() => navigate('/add')}>
            <FaCalendarPlus className="me-2" /> Nouvel Événement
          </Button>
        </Col>
      </Row>

      <Card className="mb-4 shadow-sm sticky-top bg-white">
        <Card.Body>
          <Row className="g-3">
            <Col md={8}>
              <InputGroup>
                <InputGroup.Text><FaSearch /></InputGroup.Text>
                <Form.Control
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={4}>
              <ButtonGroup className="w-100">
                {dateFilters.map(filter => (
                  <Button
                    key={filter.value}
                    variant={selectedOption === filter.value ? 'primary' : 'outline-primary'}
                    onClick={() => setSelectedOption(filter.value)}
                  >
                    {filter.label}
                  </Button>
                ))}
              </ButtonGroup>
            </Col>
          </Row>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? getCategoryVariant(cat) : `outline-${getCategoryVariant(cat)}`}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </Card.Body>
      </Card>

      {filteredEvents.length === 0 ? (
        <Alert variant="info" className="text-center">
          Aucun événement trouvé
        </Alert>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredEvents.map(event => (
            <Col key={event.id}>
              <Card className={`h-100 shadow-sm ${new Date(event.date) < new Date() ? 'border border-2 border-light' : ''}`}>
                {event.image && <Card.Img variant="top" src={event.image} />}
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Badge bg={getCategoryVariant(event.category)}>{event.category}</Badge>
                    <small className="text-muted">📆 {formatDate(event.date)}</small>
                  </div>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{event.description}</Card.Text>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => navigate('/add', { state: { event } })}
                    >
                      <FaEdit className="me-1" /> Modifier
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(event.id)}
                    >
                      <FaTrash className="me-1" /> Supprimer
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default List;
