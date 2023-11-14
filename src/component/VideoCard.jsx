import React from "react";

import { Link } from "react-router-dom";

import { Typography, Card, CardContent, CardMedia,  } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";


const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {


  // console.log(snippet);
  return (
    <>
      <Card
        sx={{
          width: { md: "350px", xs: "100%" },
          boxShadow: "none",
          borderRadius: "20px",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: 358, height: 200 }}
          />
        </Link>

        <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 12)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" color="gray">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Link>
     
        </CardContent>
      </Card>
    </>
  );
};
export default VideoCard;
