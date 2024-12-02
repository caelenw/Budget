import React from 'react';
import '../css/Section.css';
const Section = ({ spendingItem, onEdit, onDelete }) => {
    return (
        <section className="section">
          
            
            <img src={spendingItem.logo} alt={spendingItem.Item} />
            <h3>{spendingItem.Item}</h3>
            <p>Price: {spendingItem.Price}</p>
            <p>Account: {spendingItem.Account}</p>
            <p>Date: {spendingItem.Date}</p>
            <p>Category: {spendingItem.Categorie}</p>
            <p>Status: {spendingItem.Status}</p>
            <p>Comments: {spendingItem.Comments.join(', ')}</p>
        </section>
    );
};

export default Section;
