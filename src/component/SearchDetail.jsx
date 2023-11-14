import React from "react";

import { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";

import { useParams } from "react-router-dom";

import Video from "./Video";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchDetail = () => {

  const {searchTerm} = useParams();

  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setvideos(data.items)
    );
  }, [searchTerm]);

  return (
    <>
     
     <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            sx={{ color: "#fff" }}
            mb={2}
          >
            New Result found for:  <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
            <Video videos={videos} />
          </Typography>
        </Box>
    </>
  );
};

export default SearchDetail;

