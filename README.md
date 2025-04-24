# Remember - Application de gestion des événements et tâches

Remember est une application web permettant de gérer et organiser des événements tels que des concerts, festivals, conférences, anniversaires, etc. L'application offre un calendrier interactif, une liste d'événements organisés par catégories, et un système de profil utilisateur.

# Fonctionnalités Principales
### Authentification :

Connexion et inscription utilisateur

Validation des champs de formulaire

Protection des routes

### Calendrier :

Navigation entre mois/années

Ajout d'événements par clic sur une date

Affichage visuel des événements

### Gestion des Événements :

Création, modification et suppression d'événements

Filtrage par catégorie, date et recherche textuelle

Affichage sous forme de cartes avec images

### Profil Utilisateur :

Consultation des informations personnelles

Modification du profil et de l'avatar

Gestion des préférences

# Pages de l'Application

### Page d'Accueil (HomePage.jsx) :

Présentation de l'application

Liens vers les principales fonctionnalités

Connexion/Inscription (Connexion.jsx, Inscription.jsx) :

Formulaire de connexion avec validation

Formulaire d'inscription avec règles de mot de passe

### Calendrier (CalendarPage.jsx) :

Calendrier interactif avec navigation

Ajout d'événements par sélection de date

### Liste des Événements (List.jsx) :

Affichage sous forme de grille de cartes

Filtres par catégorie, période et recherche

Options de modification/suppression

### Ajout/Modification d'Événement (AddEventPage.jsx) :

Formulaire complet avec validation

Gestion des dates et heures

### Profil Utilisateur (Profile.jsx) :

Affichage et édition des informations

Changement d'avatar

### Navigation (Navbar.jsx) :

Barre de navigation responsive

Accès rapide aux principales pages

# Technologies Utilisées
## Frontend :

React.js

React Router pour la navigation

Bootstrap pour le styling

react-calendar pour le composant calendrier

# Améliorations Possibles
## Backend :

Implémenter un serveur Node.js/Express ou Django

Base de données MongoDB ou PostgreSQL pour le stockage persistant

Authentification sécurisée avec JWT

## Notifications :

Système de notifications par email 

Notifications push navigateur

Rappels configurables (30 min, 2h, 1j, 1 semaine avant)

## Fonctionnalités Utilisateur :

Réinitialisation de mot de passe par email

Connexion avec réseaux sociaux

Partage d'événements

## Améliorations UI/UX :

Thème sombre/clair

Drag & drop pour les événements

Vues alternatives (liste, agenda)

# Installation et Exécution
## Cloner le dépôt :

git clone https://github.com/safaa241/Remember-frontend.git

cd remember-app

## Installer les dépendances :

npm install

## Démarrer l'application :

npm start
