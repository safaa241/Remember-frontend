import React from "react";

function ListEvenement(){
    const [activeTab, setActiveTab] = React.useState("home");
    const handleTabChange = (tab) => {
        setActiveTab(tab);  
            console.log(`Tab changed to: ${tab}`);
            };
            React.useEffect(() => {
        console.log(`Active tab is: ${activeTab}`);
        }, [activeTab]);

    return (
        <div>
            <button onClick={() => handleTabChange("home")}>Home</button>
            <button onClick={() => handleTabChange("about")}>About</button>
            <button onClick={() => handleTabChange("contact")}>Contact</button>
            <div>Current Active Tab: {activeTab}</div>
            </div>
    );
}

export default ListEvenement;