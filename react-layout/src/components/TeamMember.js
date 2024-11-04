import React from 'react';

const TeamMember = ({ name, image, bio }) => {
    return (
        <div className="home-section">
            <h3 >{name}</h3>
            <img src={image} alt={name} />
            <p id="dark">{bio}</p>
        </div>
    );
};

export default TeamMember;
