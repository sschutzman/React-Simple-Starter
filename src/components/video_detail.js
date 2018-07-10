import React from 'react';

const VideoDetail = ({video}) => {
    //this is a check to make sure a video has been loaded before anything else runs
    if(!video){
        return <div>Loading!</div>;
    }
    //this line is our own embed url
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}>
                </iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );

};

export default VideoDetail;