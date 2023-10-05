"use client";

import { useState } from "react";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";

import Carousel from "@src/components/Home/Carousel";

const worksContent = [
    {
        id: "01",
        title: "Get Onboarded",
        description:
            "PedalInvest follows a 2-step onboarding process, involving first round of 1-to-1 interaction and a group discussion before onboarding any investor on the platform",
    },
    {
        id: "02",
        title: "Attend Pitch",
        description:
            "Once you get onboard, you get access to the live deals on the platform. Before every pitch onboarded investors receive detailed market research and PedalStart comments of all the startups",
    },
    {
        id: "03",
        title: "Pass Commitment",
        description:
            "After the pitch and Qna, Investors get access to share your commitments",
    },
    {
        id: "04",
        title: "Park Money In An Escrow",
        description:
            "After passing commitments, Investors receive an MOU with all the details of the investment deal. Acknowledge the MOU and park the money in the escrow account.",
    },
];

export default function HowItWorks() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile] = useMediaQuery("(max-width: 512px)");

    const howWorksWrapperStyles = isMobile
        ? {
              padding: "100px 50px",
              margin: "0 auto",
          }
        : {
              padding: "170px 0",
              maxWidth: "1400px",
              margin: "0 auto",
          };

    const contentBoxWrapperStyles = isMobile
        ? {
              flexDirection: "column",
              alignItems: "center",
          }
        : {
              padding: " 0 50px",
              justifyContent: "space-between",
          };

    const contentBoxStyles = isMobile
        ? {
              margin: "30px 0",
          }
        : {
              w: 250,
          };

    const sectionTitle = isMobile
        ? {
              color: "#000",
              fontSize: "35px",
              fontWeight: "800",
              textAlign: "center",
              mb: "50px",
          }
        : {
              color: "#000",
              fontSize: "52px",
              fontWeight: "800",
              textAlign: "center",
          };

    const unactiveContentIDStyles = {
        color: "#777",
        fontSize: "32px",
        fontWeight: "700",
    };

    const activeContentIDStyles = {
        ...unactiveContentIDStyles,
        color: "#007BFF",
    };

    const unactiveNotationBoxStyle = {
        h: "12px",
        margin: "16px 0 28px 0",
        borderRadius: "6px",
        background: "#D9D9D9",
    };
    const activeNotationBoxStyle = {
        ...unactiveNotationBoxStyle,
        background: "#007BFF",
    };

    const unactiveContentTitleStyle = {
        color: "#777",
        fontSize: "24px",
        fontWeight: "500",
    };
    const activeContentTitleStyle = {
        ...unactiveContentTitleStyle,
        color: "#000",
    };

    const unactiveContentDescriptionStyle = {
        marginTop: "16px",
        color: "#aaa",
        fontSize: "16px",
        fontWeight: "400",
    };
    const activeContentDescriptionStyle = {
        ...unactiveContentDescriptionStyle,
        color: "#000",
    };

    return (
        <Box {...howWorksWrapperStyles}>
            <Text {...sectionTitle}>How It Works ?</Text>
            <Box>
                {!isMobile && (
                    <Carousel
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                    />
                )}
            </Box>
            <Flex {...contentBoxWrapperStyles}>
                {worksContent.map((content, idx) =>
                    idx === currentIndex ? (
                        <Box key={idx} {...contentBoxStyles}>
                            <Text {...activeContentIDStyles}>{content.id}</Text>
                            <Box {...activeNotationBoxStyle} />
                            <Text {...activeContentTitleStyle}>
                                {content.title}
                            </Text>
                            <Text {...activeContentDescriptionStyle}>
                                {content.description}
                            </Text>
                        </Box>
                    ) : (
                        <Box key={idx} {...contentBoxStyles}>
                            <Text {...unactiveContentIDStyles}>
                                {content.id}
                            </Text>
                            <Box {...unactiveNotationBoxStyle} />
                            <Text {...unactiveContentTitleStyle}>
                                {content.title}
                            </Text>
                            <Text {...unactiveContentDescriptionStyle}>
                                {content.description}
                            </Text>
                        </Box>
                    )
                )}
            </Flex>
        </Box>
    );
}
