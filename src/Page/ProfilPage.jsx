import React, { useState } from "react";

function ProfilPage() {
    const [user, setUser] = React.useState(null);
    const email = useState();
    React.useEffect(() => {
        // Fetch user data from API
        const fetchUser = async () => {
            const response = await fetch('/api/user');
            const data = await response.json();
            setUser(data);
        };
        fetchUser();
        }, []);
        // return  user ? <div>{user.name}</div> : <div>Loading...</div>;
        return(
            <div>
                {user ? user.name : 'Loading...'}
                {email ? user.email : 'Email not available'}
                <button onClick={() => setUser(null)}>Logout</button>
            </div>
        )

    }
export default ProfilPage;