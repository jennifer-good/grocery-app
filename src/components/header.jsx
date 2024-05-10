import React from "react";
import { Box } from "@mui/material";
import Logo from '../assets/cootie-logo.svg';
import { Link } from 'react-router-dom';

//main header for each page with logo that links to the homepage to start over
export default function Header() {
    return (
    <>
        <Box className="header" padding="100">
           <Link to={'/'}> <img src={Logo} alt="Logo" className="logo"/> </Link>
        </Box>
    </>
    )
  }