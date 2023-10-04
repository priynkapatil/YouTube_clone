import { Stack, Typography } from "@mui/material";
import React from "react";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import SerachBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} /> 
        <Typography variant="h6"
          sx={{
            color: "rgb(131, 58, 180)",
            backgroundImage:
              "linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 16%, rgba(252, 176, 69, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight:'bold',
            fontSize:{xs:'18px',sm:'30px'},
            display:{sm:'inline-block',xs:'none'}
          }}
          px={2}
        >
             YouTube
        </Typography>
      </Link>
      <SerachBar />
    </Stack>
  );
};

export default Navbar;
