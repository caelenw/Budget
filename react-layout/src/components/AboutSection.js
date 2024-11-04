// AboutSection.js
import React from 'react';

const AboutSection = ({ title, content }) => {
    return (
        <div id="bwg">
            <div id="inner-bwg">
                <h4 >{title}:</h4>
            </div>
            <div id="inner-bwg2">
                <p2>{content}</p2>
            </div>
        </div>
    );
};

export default AboutSection;
