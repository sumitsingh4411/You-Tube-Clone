import { Avatar } from '@material-ui/core'
import React from 'react'
import "./ChannelRow.css"
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
function ChannelRow({image,channel,subs,noOfVideos,description,verified}) {
    return (
        <div className="channelrow">
           <Avatar 
               className="channelrow_logo"
               alt=""
               src={image}
           />
           <div className="channelrow_text">
               <h4>{channel}{verified && <CheckCircleOutlineOutlinedIcon/>}</h4>
               <p>{subs} subscribers {noOfVideos} videos</p>
               <p>{description}</p>

           </div>
        </div>
    )
}

export default ChannelRow
