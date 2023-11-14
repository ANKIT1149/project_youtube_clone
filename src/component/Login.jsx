/* eslint-disable no-sequences */
import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import "../../src/index.css"
// import { Password } from "@mui/icons-material";
import Show from "../assests/th7.jpeg";

const Login = ({ username, setUserName }) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [headtitle, setHeadTitle] = useState("Show Password");
  //  const { boy } = useContext(UserContext);
  const { setBoy } = useContext(UserContext);
  const handleSubmit = (e) => {
    if ((username === "", mail === "")) {
      navigate("");
      alert("Please fill full detail to Sign Up in Aryansh Media");

      e.preventDefault();
    } else {
      setTimeout(() => {
        navigate("Feed");
        e.preventDefault();
        setBoy({ username, mail });
      }, 3000);
    }
  };

  // For function of PAssword

  var change = document.getElementById("change");
  var rotate = document.getElementById("rotate");

  const showPassword = e => {
    e.preventDefault()
    if (change.type === "password") {
      change.type = "text";
      rotate.style.transform = "rotateX(360)";
      setHeadTitle("Hide Password");
      rotate.style.transition = "1.5s";
    } else {
      change.type = "password";
      setHeadTitle("Show Password");
    }
  };

  const passwordRef = useRef(null);
  return (
    <>
      <Typography
        variant="h6"
        fontWeight={"bold"}
        fontFamily={"serif"}
        color={"white"}
        className="heading-Profile"
        style={{ textAlign: "center", marginTop: "10px", fontSize: "32px" }}
      >
        Please SignUp To Continue
      </Typography>
      <Box
        className="form_box"
        padding="20px"
        bgcolor="red"
        sx={{
           width: {sm: "300px", md: "350px"}
        }}
        borderRadius="40px"
        position="relative"
        top={20}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <Typography
          variant="h4"
          color="white"
          fontWeight="bold"
          fontFamily="serif"
          textTransform="capitalize"
          lineHeight="normal"
        
        >
          Sign Up
        </Typography>
        <Stack direction="column" justifyContent="center" display="flex">
          <form style={{ textTransform: "capitalize", position: "relative" }}>
            <input
              type="text"
              name=""
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              id=""
              placeholder="Enter Your Name"
              required
              style={{
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px",
                marginTop: "20px",
                borderRadius: "20px",
                border: "none",
                outline: "none",
                fontWeight: "bold",
                color: "black",
                marginBottom: "15px",
              }}
            />
            <input
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              name=""
              id=""
              placeholder="Enter Your Email"
              required
              style={{
           
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px",
                marginTop: "20px",
                borderRadius: "20px",
                border: "none",
                outline: "none",
                fontWeight: "bold",
                color: "black",
                marginBottom: "15px",
              }}
            />
            <input
              type="password"
              name=""
              id="change"
              placeholder="Enter A Password"
              required
              style={{
            
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px",
                marginTop: "20px",
                borderRadius: "20px",
                border: "none",
                outline: "none",
                fontWeight: "bold",
                color: "black",
                position: "relative",
                marginBottom: "15px",
              }}
              ref={passwordRef}
            />
            <button
              disabled={passwordRef.current?.length === 0}
              onClick={showPassword}
              style={{ border: "none", outline: "none"}}
            >
              <img
                src={Show}
                id="rotate"
                title={headtitle}
                alt=""
                width={20}
                height={20}
              />
            </button>
          </form>
          <button
            onClick={handleSubmit}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              alignItems: "center",
              margin: "auto",
              width: "200px",
              padding: "8px",
              height: "auto",
              border: "none",
              outline: "none",
              backgroundColor: "purple",
              color: "white",
              borderRadius: "10px",
              fontSize: "23px",
              fontWeight: "bold",
              fontFamily: "serif",
            }}
          >
            Sign Up
          </button>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
