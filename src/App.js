import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import { Box } from "@mui/material";


import {
  Navbar,
  Feed,
  ChannelDetail,
  VideoDetail,
  SearchDetail,
} from "./component";
import ClassComponent from "./component/ClassComponent";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./component/Login";
import UserContext from "./Context/UserContext";
// import Profile from "./component/Profile";
// import Image from "./component/Null";



const App = () => {
const [username, setUsername] = useState("");
// const { boy} = useContext(UserContext);
  return (
  <Router>
    <Box sx={{ backgroundColor: "#000" }}>
      <UserContextProvider>
        <Navbar username={username}/>
        <Routes>
          <Route path="Feed" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchDetail />} />

          <Route path="/" element={<Login username={username} setUserName={setUsername}/>} />
          
        </Routes>

        <ClassComponent />
      </UserContextProvider>
    </Box>
  </Router>
  )
};

export default App;
