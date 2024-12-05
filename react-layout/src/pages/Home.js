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
import foodLogo from '../images/images1/restaurant.png';
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
        food: foodLogo,
    };

    const getSpending = async () => {
        const url = "http://localhost:3003/api/spending/";
        try {
            const response = await fetch(url);
            const data = await response.json();

            const updatedData = data.map(item => ({
                ...item,
                logo: logoMap[item.logo] || null,
            }));

            setSpendingData(updatedData);
        } catch (error) {
            console.error("Problem with fetching transactions", error);
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
