import React from 'react';
import './VideoRow.css';

function VideoRow({image, channel, subs, description, timestamp, title, views
}) {
    return (
        <div className="videoRow">
            <img src={image} alt =""/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headLine">{channel} • {" "}
                <span className="videoRow__subs">
                <span className="videoRow__subsNumber">{subs}</span> 
                {" "}
                {views} views • {timestamp}
                </span>
                </p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
