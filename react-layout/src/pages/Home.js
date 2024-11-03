// Home.js
import React, { useEffect, useState } from 'react';
import Section from '../components/section';
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
            console.error("Problem Pulling Transactions", error);
        }
    };

    useEffect(() => {
        getSpending();
    }, []);

    return (
        <div id="spend">
            <div id="spending-section">
                {spendingData.map(spendingItem => (
                    <Section key={spendingItem.Item} spendingItem={spendingItem} />
                ))}
            </div>
        </div>
    );
};

export default Home;
