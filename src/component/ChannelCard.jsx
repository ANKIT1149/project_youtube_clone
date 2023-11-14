import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channeldetail, marginTop }) => { 
  console.log()
    return( 
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "356px", md: "250px" },
      height: "326px",
      margin: "auto",
      marginTop,
    }}
  >

    <Link to={`/channel/${channeldetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >

        <CardMedia
          image={channeldetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channeldetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />

        <Typography variant="h6">
          {channeldetail?.snippet?.channelTitle}{" "}
          <CheckCircleIcon
            sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
          />

        </Typography>

        {channeldetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
            {parseInt(channeldetail?.statistics?.subscriberCount).toLocaleString(
              "en-US"
            )}{" "}
            Subscribers

          </Typography>
        )}

      </CardContent>
    </Link>
  </Box>
    );
};

export default ChannelCard;
