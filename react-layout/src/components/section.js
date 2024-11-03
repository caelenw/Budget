import React from 'react';

const Section = ({ spendingItem }) => {
    return (
        <section key={spendingItem.Item}>
            <img src={spendingItem.logo} alt="Restaurant Logo" />
            <h3>{spendingItem.Item}</h3>
            <p>Price: {spendingItem.Price}</p>
            <p>Account: {spendingItem.Account}</p>
            <p>Date: {spendingItem.Date}</p>
            <p>Category: {spendingItem.Categorie}</p>
            <p>Status: {spendingItem.Status}</p>
            <p>Comments: {spendingItem.Comments}</p>
        </section>
    );
};

export default Section;
