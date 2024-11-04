import React, { useEffect, useState } from 'react';
import SpendingList from '../components/SpendingList';
import "../css/Home.css";

const Home = () => {
    const [spendingData, setSpendingData] = useState([]);

    const getSpending = async () => {
        const url = "https://raw.githubusercontent.com/caelenw/Budget/refs/heads/main/react-layout/src/json/example.json";
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
            <SpendingList spendingData={spendingData} />
        </div>
    );
};

export default Home;
