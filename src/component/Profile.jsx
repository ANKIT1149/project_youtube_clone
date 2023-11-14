// import { Stack } from '@mui/material'
import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import img from "../assests/people02.png";

const Profile = ({ username }) => {
  const { boy } = useContext(UserContext);
  // const Navigate = useNavigate()

  const handle = () => {

      alert("Please Wait 2 Second and To Log Out");
      localStorage.removeItem("user", JSON.stringify(boy));
      window.location.reload(true);
  };

  if (!boy)
    return (
      <Link to="login">
        <button
          type="submit"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            width: "200px",
            padding: "8px",
            height: "auto",
            border: "none",
            outline: "none",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "10px",
            fontSize: "23px",
            fontWeight: "bold",
            fontFamily: "serif",
          }}
        >
          Sign Up
        </button>
      </Link>
    );
  return (
    <Stack
      className="main_profile"
    >
      <img
        src={img}
        className="Profile_img"
        alt=""
        width={"40px"}
        style={{ cursor: "pointer" }}
        onClick={handle}
      />
      <Typography
        variant="subtitle"
        color="white"
        fontWeight="bold"
        className="profile_title"
        fontFamily={"serif"}
        textTransform="capitalize"
      >
        {boy.username}
      </Typography>
    </Stack>
  );
};

export default Profile;
