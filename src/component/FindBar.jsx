import React from "react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";

import { Search } from "@mui/icons-material";

const FindBar = () => {

  const navigate = useNavigate();
 
  const handleSubmit = (e) =>{
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`)
    }

    setSearchTerm("");
  }

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Paper
      component={"form"}
      sx={{
        borderRadius: "20px",
        pl: 2,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
      }}
      onSubmit={handleSubmit}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ pl: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default FindBar;
