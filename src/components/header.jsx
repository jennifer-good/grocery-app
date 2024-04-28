import React from "react";
import { Box } from "@mui/material";
import Logo from '../assets/cootie-logo.svg';

export default function Header() {
    return (
    <>
        <Box className="header">
           <a href='/'> <img src={Logo} alt="Logo" className="logo"/> </a>
        </Box>
    </>
    )
  }