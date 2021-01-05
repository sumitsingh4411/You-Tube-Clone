import React from 'react'
import "./VideoRow.css"
function VideoRow({views,image,channel,subs,timestamp,description,title}) {
    return (
        <div className="videorow">
            <img
                src={image}
                alt="image"
            />
            <div className="videorow_text">
            <h3>{title}</h3>
            <p className="videorow_headline">{channel} {" "}
            <span className="videorow_subs">
            <span className="videorow_span">{subs} subscribers</span>
            </span>{" "} {views} views . {timestamp} </p>
            <p className="videorow_description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
