// About.js
import React from 'react';
import AboutSection from '../components/AboutSection';
import TeamMember from '../components/TeamMember';
import '../css/About.css';
import katie from '../images/images1/images (1).jpeg';
import craig from '../images/images1/images (2).jpeg';
import kyle from '../images/images1/images (3).jpeg';
import josh from '../images/images1/images (4).jpeg';

const About = () => {
    return (
        <div id="hold">
            <AboutSection 
                title="Budget Within Goal" 
                content="The goal at Budget Within is to guide and inform our users on their spending while providing visual demonstrations of where every penny is going. We strive to create an easy-to-use platform that empowers individuals to take control of their finances. With our comprehensive yearly graphs, users can easily track their financial progress over time, identify trends, and make informed adjustments to their budgets." 
            />
            <AboutSection 
                title="Mission Statement" 
                content="Our mission is to empower individuals to take charge of their financial well-being by providing intuitive tools and insightful visualizations. We strive to cultivate a deeper understanding of personal finance through easy-to-use features that simplify budgeting and spending analysis. Together, we can transform financial management into a rewarding journey." 
            />

            <div id="bwg1">
                <div id="mtt">
                    <h2 id="dark">Meet The Team</h2>
                </div>
                <div id="mtt-content">
                    <TeamMember 
                        name="Josh" 
                        image={josh} 
                        bio="I’m dedicated to helping individuals navigate their financial journeys at Budget Within. I believe that understanding your finances is key to achieving your goals, and I focus on creating intuitive tools that empower our users to visualize their spending and make informed decisions."
                    />
                    <TeamMember 
                        name="Kyle" 
                        image={kyle} 
                        bio="As a finance enthusiast at Budget Within, I’m dedicated to helping people understand and manage their money better. My background in financial planning allows me to provide valuable insights that simplify budgeting and empower users to reach their financial goals."
                    />
                    <TeamMember 
                        name="Craig" 
                        image={craig} 
                        bio="I’m thrilled to be part of the Budget Within team, where I focus on creating user-friendly features that make financial management easier for everyone. With a background in software development and a keen interest in personal finance, I’m passionate about building tools that empower users to take charge of their spending."
                    />
                    <TeamMember 
                        name="Katie" 
                        image={katie} 
                        bio="I’m excited to be part of the Budget Within team, where my focus is on enhancing user experience and ensuring that our platform is intuitive and engaging. With a background in user experience design, I’m passionate about creating seamless interactions that empower users to manage their finances with ease."
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
