import React from 'react';


function ListEvent(){
    const events = []; 
const selectOptions = {
  0: 'tous ',
  1: 'longtemps',
  2: 'ce mois',
  3: 'aujourd\'hui',
  5: 'cette semaine',
  4: 'prochainement',
  6: 'dernierement ajouter'
};
{/* 
    .map : executer chaque key de selectOptions sur selectOptions[key]
    .map est une boucle pour chaque clé de l'objet selectOptions
    renvoie un tableau des noms de propriétés à clé de chaîne énumérables d'un objet donné
*/}

const optionsList = Object.keys(selectOptions).map(key => ( 
    <option key={key} value={key}>{selectOptions[key]}</option>
    ));
    return (
    <>
        <select>{optionsList}</select>
        <div className="mb-3">
            <ul>
                {events.map(event => <li key={event.id}>{event.name}</li>)}
                {events.length === 0 && <li>No events available</li>}  {/* si le nbre d'éléments de ce tableau(length) == 0, alors(&&) afficher ce message  */}
            </ul>
        </div>
    </>   
    )
}
export default ListEvent;

