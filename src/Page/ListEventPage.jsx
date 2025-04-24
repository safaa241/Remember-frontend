import React from "react";
import events from "events";
import { useState } from "react";

function ListEventPage(){
    const categories = ["tous", "Ce mois",  "Proche", "longtemps"]
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); 
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    }
    return (
        <div>
            <h1>Events {events}</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category} onClick={() => handleCategoryChange(category)}
                    className ={selectedCategory === category ? 'active' : ''}
                    
                />))}
                </ul>
    </div>
);
}
export default ListEventPage;