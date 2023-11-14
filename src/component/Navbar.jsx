import React from "react";
import { Stack } from "@mui/material";

import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import FindBar from "./FindBar";
import Profile from "./Profile";

const Navbar = ({username}) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    px={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} height={45} alt="" />
    </Link>

    <FindBar />
    <Profile username={username}/>
  </Stack>
);

export default Navbar;
