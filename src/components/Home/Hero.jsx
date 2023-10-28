"use client";

import React from "react";
import Image from "next/image";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import CTAButton from "@src/components/CTAButton";

export default function Hero() {
  const [isMobile] = useMediaQuery("(max-width: 512px)");

  const heroContainerGridStyles = isMobile
    ? {
        templateColumns: "1fr",
        textAlign: "center",
      }
    : {
        templateColumns: "repeat(2, 1fr)",
        minHeight: "calc(100vh - 200px)",
        maxWidth: "1440px",
        margin: "0 auto",
      };

  const heroHeadingText = {
    fontSize: "52px",
    fontWeight: "800",
    color: "#000",
    lineHeight: "120%",
    marginTop: "50px",
  };
  const heroDescriptionText = {
    fontSize: "20px",
    fontWeight: "300",
    color: "#555",
    marginTop: "16px",
  };

  const heroContentStyles = isMobile
    ? {
        padding: "15% 5%",
      }
    : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10% 20% 0 80px",
      };

  const ctaButtonWrapperStyles = {
    marginTop: "46px",
  };

  const heroGraphicsSection = isMobile
    ? {
        display: "none",
      }
    : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "50px",
        marginLeft: "150px",
      };
  const heroImage = {
    w: "500px",
  };

  const handleCTAClick = () => {
    const link = "https://zfrmz.in/kYkutP4GZKrNGj21mtuW";
    window.location.href = link;
  };

  return (
    <Grid {...heroContainerGridStyles}>
      <GridItem {...heroContentStyles}>
        <Flex>
          <Text {...heroHeadingText}>
            Maximize <span style={{ color: "#007BFF" }}>Returns</span> Minimize
            Risks
          </Text>
        </Flex>
        <Text {...heroDescriptionText}>
          Get a chance to invest in high-growth early-stage startups vetted and
          accelerated by PedalStart. Offering attractive risk-adjusted returns.
        </Text>
        <Box {...ctaButtonWrapperStyles}>
          <CTAButton onClick={handleCTAClick}>Join the Waitlist</CTAButton>
        </Box>
      </GridItem>
      <GridItem backgroundImage='url("/mesh.svg")' {...heroGraphicsSection}>
        <Image
          width={500}
          height={500}
          {...heroImage}
          src="/hero-img.svg"
          alt="hero img"
        />
      </GridItem>
    </Grid>
  );
}
