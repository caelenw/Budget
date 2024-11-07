import React from 'react';
import '../css/VideoContainer.css';
import Video from './Video'; // Adjust the import path if necessary
const VideoContainer = () => {
    return (
        
        <div id="vid">
            <div className='videos'>
            <Video
                title="Understanding Personal Finance"
                src="https://www.youtube.com/embed/UcAY6qRHlw0"
            />
            </div>
           
            <div className='videos'>
            <Video
                title="Saving for Your Future"
                src="https://www.youtube.com/embed/4Eh8QLcB1UQ"
            />
            </div>
            
            
            <div className='videos'>
             <Video
                title="Budgeting for Beginners"
                src="https://www.youtube.com/embed/7lHNMGoACdQ?si=UP_cewHHwZiv9M8W"
            />
            </div>
        </div>
    );
};

export default VideoContainer;
