import React, { useEffect, useState } from 'react';
import "../css/Home.css";
const Home = () => {
    const [spendingData, setSpendingData] = useState([]);

    // Function to fetch spending data
    const getSpending = async () => {
        const url = "https://caelenw.github.io/csce242/project/part6/example.json";
        try {
            const response = await fetch(url);
            const data = await response.json();
            setSpendingData(data); // Update state with fetched data
        } catch (error) {
            console.error("Error fetching spending data:", error);
        }
    };

    // Effect hook to run getSpending on component mount
    useEffect(() => {
        getSpending();
    }, []);

    // Function to render spending section for each item
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
