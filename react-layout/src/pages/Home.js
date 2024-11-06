import React, { useEffect, useState } from 'react';
import SpendingList from '../components/SpendingList';
import "../css/Home.css";
import carLogo from '../images/images1/car.png';
import debtLogo from '../images/images1/debt.png';
import healthLogo from '../images/images1/health.png';
import insuranceLogo from '../images/images1/insurance.png';
import kidsLogo from '../images/images1/kids.png';
import otherLogo from '../images/images1/other.png';
import petsLogo from '../images/images1/pets.png';
import rentLogo from '../images/images1/rent.png';
import savingsLogo from '../images/images1/savings.png';

const Home = () => {
    const [spendingData, setSpendingData] = useState([]);

    const logoMap = {
        insurance: insuranceLogo,
        health: healthLogo,
        rent: rentLogo,
        pets: petsLogo,
        car: carLogo,
        savings: savingsLogo,
        other: otherLogo,
        kids: kidsLogo,
        debt: debtLogo,
    };

    const getSpending = async () => {
        const url = "https://raw.githubusercontent.com/caelenw/Budget/refs/heads/main/react-layout/src/json/example.json";
        try {
            const response = await fetch(url);
            const data = await response.json();

            
            const updatedData = data.map(item => ({
                ...item,
                logo: logoMap[item.logo] || null, 
            }));

            setSpendingData(updatedData);
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
