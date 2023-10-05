"use client";

import React from "react";
import Image from "next/image";
import { Box, Button, Flex } from "@chakra-ui/react";

import pedalInvestLogo from "@src/assets/pedalinvest-logo.png";

const navWrapperStyles = {
    padding: "1rem 2rem",
    boxShadow: "0 0 2px 4px rgba(0, 0, 0, 0.1)",
};

const navResWrapperStyles = {
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1440px",
    margin: "0 auto",
};

const imageWrapperStyles = {
    width: "150px",
    height: "50px",
};

const linkButtonStyles = {
    color: "#000",
    _hover: {
        textDecoration: "none",
    },
};
const solidButtonStyles = {
    bg: "#007BFF",
    color: "#fff",
    borderRadius: 0,
    height: "46px",
    _hover: {
        bg: "#0267d3",
    },
};

export default function Navbar() {
    return (
        <Box {...navWrapperStyles}>
            <Flex {...navResWrapperStyles}>
                <Box {...imageWrapperStyles}>
                    <Image src={pedalInvestLogo} alt="logo" />
                </Box>

                <Flex gap={10}>
                    <Button
                        onClick={() =>
                            (window.location.href = "https://pedalstart.com/")
                        }
                        {...solidButtonStyles}
                        variant="solid"
                    >
                        Learn More
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}
