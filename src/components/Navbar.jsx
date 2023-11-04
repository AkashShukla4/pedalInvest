"use client";

import React from "react";
import Image from "next/image";
import { Box, Button, Flex, useMediaQuery } from "@chakra-ui/react";

const navWrapperStyles = {
  padding: "1rem 2rem",
  background: "#fff",
  boxShadow: "0 0 2px 4px rgba(0, 0, 0, 0.1)",
  position: "fixed",
  width: "100%",
  zIndex: "20",
  // right: "10px",
};

const navResWrapperStyles = {
  justifyContent: "space-between",
  alignItems: "center",
  // maxWidth: "1446px",
  width: "100%",
  // margin: "10 auto",
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
  height: "45px",
  width: "fit-content", // Adjust button width
  _hover: {
    bg: "#0267d3",
  },
};

export default function Navbar() {
  const [isMobile] = useMediaQuery("(max-width: 512px)");
  return (
    <Box {...navWrapperStyles}>
      <Flex {...navResWrapperStyles}>
        <Box {...imageWrapperStyles}>
          <Image
            width={150}
            height={50}
            src="/pedalinvest-logo.png"
            alt="logo"
          />
        </Box>

        <Flex gap={10} direction={["column", "row"]} alignItems="center">
          <Button
            onClick={() =>
              (window.location.href = "https://zfrmz.in/kYkutP4GZKrNGj21mtuW")
            }
            {...solidButtonStyles}
            variant="solid"
          >
            Join the Waitlist
          </Button>

          {!isMobile && (
            <Button
              onClick={() => (window.location.href = "https://pedalstart.com/")}
              {...solidButtonStyles}
              variant="solid"
            >
              Learn More
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
