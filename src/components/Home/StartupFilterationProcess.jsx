"use client";

import Image from "next/image";
import { Text, Box, Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";

export default function StartupFilterationProcess() {
    const [isMobile] = useMediaQuery("(max-width: 512px)");

    const sectionHeading = isMobile
        ? {
              color: "#000",
              fontSize: "32px",
              fontWeight: "800",
              textAlign: "center",
          }
        : {
              color: "#000",
              fontSize: "52px",
              fontWeight: "800",
              textAlign: "center",
          };
    const sectionHeadingDescription = isMobile
        ? {
              margin: "16px auto 30px",
              color: "#444",
              fontSize: "16px",
              fontWeight: "400",
              textAlign: "center",
          }
        : {
              maxWidth: "1020px",
              margin: "16px auto 80px",
              color: "#444",
              fontSize: "20px",
              fontWeight: "400",
              textAlign: "center",
          };

    const processFlexWrapperStyles = isMobile
        ? {
              flexDirection: "column",
              margin: "50px 0",
          }
        : {
              maxWidth: "1200px",
              margin: "0 auto",
              justifyContent: "space-between",
              gap: "100px",
          };

    const contentTitleTextStyle = {
        fontWeight: "800",
        fontSize: "24px",
        color: "#000",
    };

    const contentDescriptionTextStyle = isMobile
        ? {
              fontWeight: "400",
              fontSize: "14px",
              color: "#444",
              marginTop: "15px",
          }
        : {
              fontWeight: "400",
              fontSize: "16px",
              color: "#444",
              marginTop: "20px",
          };

    const contentBoxStyle = isMobile
        ? {
              width: "100%",
          }
        : {
              width: "333px",
          };

    const Content = ({ icon, title, description }) => {
        return (
            <Flex gap={isMobile ? "24px" : "96px"} alignItems="center">
                <Image
                    width={isMobile ? 90 : 130}
                    height={100}
                    src={icon}
                    alt="number"
                />
                <Box {...contentBoxStyle}>
                    <Text {...contentTitleTextStyle}>{title}</Text>
                    <Text {...contentDescriptionTextStyle}>{description}</Text>
                </Box>
            </Flex>
        );
    };

    return (
        <Box p={isMobile && "20px 35px"}>
            <Text {...sectionHeading}>Process Of Startup Filtration</Text>
            <Text {...sectionHeadingDescription}>
                A platform for retail investors to invest in high-growth
                startups with the potential to grow their wealth 10x. PedalStart
                accelerates these startups, ensuring their high potential for
                success.
            </Text>
            <Flex {...processFlexWrapperStyles}>
                <Image
                    width={400}
                    height={400}
                    src="/process1.svg"
                    alt="process"
                />
                <Content
                    icon="/number1.svg"
                    title="Wishlist"
                    description="PedalStart follows a wishlist-based model. Interested founders can join the wishlist, based on their priority we promote the startups for the selection process"
                />
            </Flex>
            <Flex
                {...processFlexWrapperStyles}
                flexDirection={isMobile && "column-reverse"}
            >
                <Content
                    icon="/number2.svg"
                    title="Community"
                    description="After a 3-step selection process, startups get 3 months of exclusive access to the community. Community majorly focuses on bridging the knowledge gap of the startup founders. "
                />
                <Image
                    width={400}
                    height={400}
                    src="/process2.svg"
                    alt="process"
                />
            </Flex>
            <Flex {...processFlexWrapperStyles}>
                <Image
                    width={400}
                    height={400}
                    src="/process3.svg"
                    alt="process"
                />
                <Content
                    icon="/number3.svg"
                    title="Acceleration"
                    description="Based on the execution of the startups in the community, PedalStart selects the startups for acceleration, where we focus majorly on the growth of the startups with ex-founders, mentors, and investment support"
                />
            </Flex>
            <Flex
                {...processFlexWrapperStyles}
                flexDirection={isMobile && "column-reverse"}
            >
                <Content
                    icon="/number4.svg"
                    title="Funding"
                    description="Once the startup reaches a stage of investments, PedalStart validates the model from future potential investors, post that PedalStart passes commitment from their side before opening up the opportunity to other investors(ensuring skin in the game)"
                />
                <Image
                    width={400}
                    height={400}
                    src="/process4.svg"
                    alt="process"
                />
            </Flex>
        </Box>
    );
}
