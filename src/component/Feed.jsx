

import { useState, useEffect } from "react";

import { Box, Stack, Typography } from "@mui/material";

import SideBar from "./SideBar";

import Video from "./Video";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [CategoryList, setSelectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${CategoryList}`).then((data) =>
      setvideos(data.items)
    );
  }, [CategoryList]);


  return (
    <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "100vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <SideBar
            CategoryList={CategoryList}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            Copyright 2023@ Ankit Media
          </Typography>
        </Box>

        <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            sx={{ color: "#fff" }}
            mb={2}
          >
            {CategoryList} <span style={{ color: "#F31503" }}>Videos</span>
            <Video videos={videos} />
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Feed;
