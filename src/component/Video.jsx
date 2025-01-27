// import React from 'react'

import { Stack, Box } from "@mui/material";

import VideoCard from "./VideoCard";

import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const Video = ({ videos, direction }) => {
    if (!videos?.length) return <Loader />;
   return(
    <>
    <Stack direction={direction || "row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
        
        {videos.map((item, idx) => (
           <Box key={idx}>
               {item.id.videoId && <VideoCard video={item}/>}
               {item.id.channelId && <ChannelCard channel={item}/>}
           </Box>
        ))}
    </Stack>
 </>
   )
}

export default Video;
