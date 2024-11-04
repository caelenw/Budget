import React from 'react';
import Section from './section';

const SpendingList = ({ spendingData }) => {
    return (
        <div id="spending-section">
            {spendingData.map(spendingItem => (
                <Section key={spendingItem.Item} spendingItem={spendingItem} />
            ))}
        </div>
    );
};

export default SpendingList;
