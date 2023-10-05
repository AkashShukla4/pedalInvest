"use client";

import React from "react";
import { Box, Button, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

import arrow from "@src/assets/arrow-right.svg";
import mandeepImg from "@src/assets/mandeep.jpg";
import rishavImg from "@src/assets/rishav.jpeg";
import priyeshImg from "@src/assets/priyesh.jpeg";
import dhruvImg from "@src/assets/dhruv.jpg";
import neeravImg from "@src/assets/neerav.jpg";
import varunImg from "@src/assets/varun.jpeg";
import vikasImg from "@src/assets/vikas.jpeg";
import alokImg from "@src/assets/alok.webp";
import ramakrishnanImg from "@src/assets/ramakrishnan.jpg";
import sandeepImg from "@src/assets/sandeep.jpg";
import abhinavImg from "@src/assets/abhinav.jpeg";
import sriniImg from "@src/assets/srini.jpeg";
import gurpreetImg from "@src/assets/Gurpreet.jpg";
import ankitImg from "@src/assets/ankit.jpeg";
import mayankImg from "@src/assets/Mayank.jpeg";
import vivekImg from "@src/assets/vivek.webp";
import sarbojitImg from "@src/assets/Sarbojit.webp";

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
            img: mandeepImg,
            name: "Mandeep Manocha",
            type: "Cashify",
        },
        {
            img: rishavImg,
            name: "Rishav Agarwal",
            type: "Picxele",
        },
        {
            img: priyeshImg,
            name: "Priyesh Jaiswal",
            type: "Flipkart",
        },
        {
            img: dhruvImg,
            name: "Dhruv Kumar",
            type: "Angel Investor",
        },
        {
            img: neeravImg,
            name: "Neerav Jain",
            type: "Angel Investor",
        },
        {
            img: varunImg,
            name: "Varun Miglani",
            type: "Angel Investor",
        },
        {
            img: vikasImg,
            name: "Vikas Lakhani",
            type: "InstaOffice",
        },
        {
            img: alokImg,
            name: "Alok Kohli",
            type: "Pepsico",
        },
        {
            img: ramakrishnanImg,
            name: "M Ramakrishnan",
            type: "Investor",
        },
        {
            img: sandeepImg,
            name: "Sandeep Nailwal",
            type: "Polygon",
        },
        {
            img: abhinavImg,
            name: "Abhinav Kumar",
            type: "Paytm",
        },
        {
            img: alokImg,
            name: "Nikhil Thomas",
            type: "Udaan",
        },
        {
            img: sriniImg,
            name: "Srini Sharma",
            type: "Trinkerr",
        },
        {
            img: gurpreetImg,
            name: "Gurpreet Chugh",
            type: "Angel Investor",
        },
        {
            img: ankitImg,
            name: "Ankit Tomar",
            type: "Bizongo",
        },
        {
            img: mayankImg,
            name: "Mayank Jain",
            type: "Snapdeal",
        },
        {
            img: vivekImg,
            name: "Vivek Aggarwal",
            type: "Square Yards",
        },
        {
            img: sarbojitImg,
            name: "Sarbojit Mallick",
            type: "InstaHyre",
        },
    ];

    return (
        <Box {...ourInvestorsSectionStyle}>
            <Box {...ourInvestorTextBoxStyle}>
                <Text {...headingStyles}>Our Investors</Text>
                <Text {...sectionDescription}>
                    PedalStart has more than 40+ investment partners onboarded
                    on the platform, including major Tier-1 VCs like Prime
                    Ventures, Waterbridge, LightSpeed, etc
                </Text>
                <Button
                    variant="link"
                    rightIcon={
                        <Image
                            width="22px"
                            height="14px"
                            src={arrow}
                            alt="arrow"
                        />
                    }
                    {...buttonStyles}
                >
                    View All Mentors
                </Button>
            </Box>
            <Flex flexDirection="column" gap="32px">
                <RunningContent direction="ltr" items={investors} />
                <RunningContent
                    direction="rtl"
                    items={[...investors.reverse()]}
                />
                <RunningContent direction="ltr" items={investors} />
            </Flex>
        </Box>
    );
}
