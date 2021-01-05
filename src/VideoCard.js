import { Avatar } from '@material-ui/core'
import React from 'react'
import "./VideoCard.css"
function VideoCard({image,title,channel,views,timestamp,channelimage}) {
    return (
        <div className="videocard">
            <img 
            className="videocard_thumb"
            src={image} alt="image"/>
            <div className="video_info">
                <Avatar
                className="videocard_avatar"
                 src={channelimage}
                     alt={channel}
                 />
                 <div className="videocard_text">
                     <h4>{title}</h4>
                     <p>{channel}</p>
                     <p>{views}  . {timestamp}</p>
                 </div>
            </div>
        </div>
    )
}

export default VideoCard
