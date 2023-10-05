import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "@src/components/Navbar";
import Footer from "@src/components/Footer";

// Default theme
import "@splidejs/react-splide/css";
// or only core styles
import "@splidejs/react-splide/css/core";

const boxStyles = {
    bg: "#fff",
    minHeight: "100vh",
    fontFamily: "Inter",
};

export default function Layout({ children }) {
    return (
        <Box {...boxStyles}>
            <Navbar />
            {children}
            <Footer />
        </Box>
    );
}
