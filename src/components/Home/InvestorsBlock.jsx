"use client";

import React from "react";
import { Flex, Box, useMediaQuery } from "@chakra-ui/react";

import Image from "next/image";

export default function InvestorsBlock() {
  const [isMobile] = useMediaQuery("(max-width: 512px)");

  const investorsBlockWrapperStyles = isMobile
    ? {
        padding: "1.5rem 1.5rem",
      }
    : {
        bg: "#FAFAFA",
        padding: "2rem 0",
      };

  const investorsBlockStyles = isMobile
    ? {
        wrap: "wrap",
        gap: "35px",
        justifyContent: "center",
      }
    : {
        justifyContent: "space-around",
        maxWidth: "1440px",
        margin: "0 auto",
      };

  const companyImages = [
    { img: "/your-story.svg", width: 100, height: 35 },
    { img: "/et.svg", width: 100, height: 32 },
    { img: "/entrepreneur-india.svg", width: 120, height: 40 },
    { img: "/apn.png", width: 200, height: 25 },
    { img: "/toi.svg", width: 100, height: 25 },
  ];

  return (
    <Box {...investorsBlockWrapperStyles}>
      <Flex {...investorsBlockStyles}>
        {companyImages.map((image, idx) => (
          <Image
            key={idx}
            width={image.width}
            height={image.height}
            style={{
              width: image.width,
              height: image.height,
            }}
            src={image.img}
            alt="company"
          />
        ))}
      </Flex>
    </Box>
  );
}
