

import React from 'react';

const VideoListItem = (props) => {
    const imageUrl = props.video.snippet.thumbnails.default.url;
    const title = props.video.snippet.title;

    return (
        <li className="list-group-item">
        <div className="video-list media">
            <div className="media-body">
                <div className="media-heading">{title}</div>
            </div>
            <img className="media-object" src={imageUrl} alt="" />
        </div>
    </li>
    );
}

export default VideoListItem;