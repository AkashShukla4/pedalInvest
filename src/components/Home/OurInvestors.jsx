"use client";

import React from "react";
import { Box, Button, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

import RunningContent from "@src/components/Home/RunningContent";

export default function OurInvestors() {
  const [isMobile] = useMediaQuery("(max-width: 512px)");

  const ourInvestorsSectionStyle = isMobile
    ? {
        margin: "100px auto",
        position: "relative",
      }
    : {
        margin: "150px auto",
        position: "relative",
      };

  const ourInvestorTextBoxStyle = isMobile
    ? {
        position: "relative",
        w: "100%",
        padding: "0 40px",
        textAlign: "center",
      }
    : {
        position: "absolute",
        bg: "#fff",
        w: "560px",
        top: 0,
        left: 0,
        p: "20px 10px 20px 80px",
        zIndex: 15,
        borderRadius: "80px",
        boxShadow: "0 0 40px 100px rgba(255, 255, 255, 1)",
      };

  const headingStyles = isMobile
    ? {
        color: "#000",
        fontSize: "35px",
        fontWeight: "800",
        textAlign: "center",
      }
    : {
        color: "#000",
        fontSize: "52px",
        fontWeight: "800",
      };

  const sectionDescription = isMobile
    ? {
        color: "#444",
        fontSize: "16px",
        fontWeight: "400",
        margin: "20px 0",
        textAlign: "center",
      }
    : {
        color: "#444",
        fontSize: "20px",
        fontWeight: "400",
        margin: "24px 0",
      };

  const buttonStyles = isMobile
    ? {
        marginBottom: "50px",
        color: "#007BFF",
        fontSize: "18px",
        fontWeight: "700",
        outline: "none",
        _hover: {
          textDecoration: "none",
        },
      }
    : {
        color: "#007BFF",
        fontSize: "20px",
        fontWeight: "700",
        outline: "none",
        _hover: {
          textDecoration: "none",
        },
      };
  const investors = [
    {
      img: "/mandeep.jpg",
      name: "Mandeep Manocha",
      type: "Cashify",
    },
    {
      img: "/rishav.jpeg",
      name: "Rishav Agarwal",
      type: "Picxele",
    },
    {
      img: "/priyesh.jpeg",
      name: "Priyesh Jaiswal",
      type: "Flipkart",
    },
    {
      img: "/dhruv.jpg",
      name: "Dhruv Kumar",
      type: "Angel Investor",
    },
    {
      img: "/neerav.jpg",
      name: "Neerav Jain",
      type: "Angel Investor",
    },
    {
      img: "/varun.jpeg",
      name: "Varun Miglani",
      type: "Angel Investor",
    },
    {
      img: "/vikas.jpeg",
      name: "Vikas Lakhani",
      type: "InstaOffice",
    },
    {
      img: "/alok.webp",
      name: "Alok Kohli",
      type: "Pepsico",
    },
    {
      img: "/ramakrishnan.jpg",
      name: "M Ramakrishnan",
      type: "Investor",
    },
    {
      img: "/sandeep.jpg",
      name: "Sandeep Nailwal",
      type: "Polygon",
    },
    {
      img: "/abhinav.jpeg",
      name: "Abhinav Kumar",
      type: "Paytm",
    },
    {
      img: "/alok.webp",
      name: "Nikhil Thomas",
      type: "Udaan",
    },
    {
      img: "/srini.jpeg",
      name: "Srini Sharma",
      type: "Trinkerr",
    },
    {
      img: "/Gurpreet.jpg",
      name: "Gurpreet Chugh",
      type: "Angel Investor",
    },
    {
      img: "/ankit.jpeg",
      name: "Ankit Tomar",
      type: "Bizongo",
    },
    {
      img: "/Mayank.jpeg",
      name: "Mayank Jain",
      type: "Snapdeal",
    },
    {
      img: "/vivek.webp",
      name: "Vivek Aggarwal",
      type: "Square Yards",
    },
    {
      img: "/Sarbojit.webp",
      name: "Sarbojit Mallick",
      type: "InstaHyre",
    },
  ];

  return (
    <Box {...ourInvestorsSectionStyle}>
      <Box {...ourInvestorTextBoxStyle}>
        <Text {...headingStyles}>Our Investors</Text>
        <Text {...sectionDescription}>
          PedalStart has more than 40+ investment partners onboarded on the
          platform, including major Tier-1 VCs like Prime Ventures, Waterbridge,
          LightSpeed, etc.
        </Text>
        <Button
          variant="link"
          rightIcon={
            <Image width={22} height={14} src="/arrow-right.svg" alt="arrow" />
          }
          {...buttonStyles}
        >
          View All Mentors
        </Button>
      </Box>
      <Flex flexDirection="column" gap="32px">
        <RunningContent direction="ltr" items={investors} />
        <RunningContent direction="rtl" items={[...investors.reverse()]} />
        <RunningContent direction="ltr" items={investors} />
      </Flex>
    </Box>
  );
}
