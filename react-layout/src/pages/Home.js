import React, { useEffect, useState } from 'react';
import "../css/Home.css";
const Home = () => {
    const [spendingData, setSpendingData] = useState([]);

    const getSpending = async () => {
        const url = "https://caelenw.github.io/csce242/project/part6/example.json";
        try {
            const response = await fetch(url);
            const data = await response.json();
            setSpendingData(data); 
        } catch (error) {
            console.error("Problem Pullint Transactions", error);
        }
    };

    useEffect(() => {
        getSpending();
    }, []);

    const getSpendingSection = (spendingItem) => {
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

    return (
        <div id="spend">
            <div id="spending-section">
                {spendingData.map(spendingItem => getSpendingSection(spendingItem))}
            </div>
        </div>
    );
};

export default Home;