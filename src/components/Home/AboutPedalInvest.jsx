"use client";

import React from "react";
import Image from "next/image";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";

export default function AboutPedalInvest({ title, description, content }) {
  const [isMobile] = useMediaQuery("(max-width: 512px)");

  const pedalInvestAboutStyles = isMobile
    ? {
        margin: "100px 25px",
      }
    : {
        margin: "140px 0 160px",
      };

  const pedalInvestHeadingStyles = {
    color: "#000",
    textAlign: "center",
    fontSize: "52px",
    fontWeight: "800",
  };

  const pedalInvestDescriptionStyles = {
    color: "#666",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "400",
    maxWidth: "1000px",
    margin: "30px auto 80px",
  };

  const pedalInvestAboutBlocksStyles = isMobile
    ? {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
      }
    : {
        justifyContent: "space-between",
        maxWidth: "1200px",
        margin: "0 auto",
      };

  const aboutBoxWrapper = {
    width: "350px",
    textAlign: "center",
    padding: "20px 10px",
    boxShadow: "0 0 6px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "15px",
  };

  const aboutImageStyles = {
    w: "250px",
    h: "250px",
  };

  const aboutTitle = {
    marginTop: "8px",
    color: "#000",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "600",
  };

  const aboutDescription = {
    margin: "12px 0",
    color: "#666",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "400",
  };

  return (
    <Box {...pedalInvestAboutStyles}>
      <Text {...pedalInvestHeadingStyles}>{title}</Text>
      <Text {...pedalInvestDescriptionStyles}>{description}</Text>
      <Flex {...pedalInvestAboutBlocksStyles}>
        {content?.map((info) => (
          <Box key={info.id} {...aboutBoxWrapper}>
            <Flex justifyContent="center">
              <Image
                {...aboutImageStyles}
                src={info.image}
                alt={info.title}
                width={100}
                height={100}
              />
            </Flex>
            <Text {...aboutTitle}>{info.title}</Text>
            <Text {...aboutDescription}>{info.description}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
