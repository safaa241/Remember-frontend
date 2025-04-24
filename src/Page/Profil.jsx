import React from "react";

function Profil() {
    return (
    <form>
        <h2>Profile Information</h2>
        <div className="mb-3">
        <label htmlFor="profile-pic">Profile Picture:</label>
        <input type="file" id="profile-pic" name="profile-pic" />
        </div>
        <div className="mb-3">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username"  />
        </div>
        <div className="mb-3">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        </div>
        <div className="mb-3">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" />
        </div>
        <div className="mb-3">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"  />
        </div>
        <div className="mb-3">
            <label htmlFor="age">Age:</label>
            <input type="number" id ="age" name="age" />
        </div>
        <div className="mb-3">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="mb-3">
        <label htmlFor="bio">Biography:</label>
        <textarea id="bio" name="bio" rows="4" cols="50" placeholder="Tell us about yourself..."></textarea>
        </div>
        
        <button type="submit">Submit</button>
        
    </form>
);
}
export default Profil;