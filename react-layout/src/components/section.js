import React from 'react';
import '../css/Section.css';

const Section = ({ spendingItem, onEdit, onDelete }) => {
    const comments = Array.isArray(spendingItem.Comments) ? spendingItem.Comments : [];
    const status = spendingItem.Status || "No status available";
    const commentText = comments.length > 0 ? comments.join(', ') : "No comments available";

    return (
        <section className="section">
            <img src={spendingItem.logo} alt={spendingItem.Item} />
            <p>{spendingItem.item}</p>
            <p>item:{spendingItem.item}</p>
            <p>Price: {spendingItem.Price}</p>
            <p>Account: {spendingItem.Account}</p>
            <p>Date: {spendingItem.Date}</p>
            <p>Category: {spendingItem.Categorie}</p>
            <p>Status: {spendingItem.Status || 'No status available'}</p> 
            <p>Comments: {spendingItem.Comment}</p> 
        </section>
    );
};

export default Section;
