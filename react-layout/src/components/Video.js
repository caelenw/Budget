import React from 'react';

const Video = ({ title, src }) => {
    return (
        <div className="video-container">
            <h2 className="video-title">{title}</h2>
            <iframe
                className="video-iframe"
                src={src}
                title={title}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Video;
