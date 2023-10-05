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
              margin: "150px 0 180px",
          };

    const pedalInvestHeadingStyles = {
        color: "#000",
        textAlign: "center",
        fontSize: "52px",
        fontWeight: "800",
    };

    const pedalInvestDescriptionStyles = {
        color: "#666;",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "400",
        maxWidth: "1000px",
        margin: "12px auto 80px",
    };

    const pedalInvestAboutBlocksStyles = isMobile
        ? {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "45px",
          }
        : {
              justifyContent: "space-between",
              maxWidth: "1200px",
              margin: "0 auto",
          };

    const aboutBoxWrapper = {
        width: "280px",
        textAlign: "center",
    };

    const aboutImageStyles = {
        w: "100px",
        h: "100px",
    };

    const aboutTitle = {
        marginTop: "24px",
        color: "#000",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "600",
    };

    const aboutDescription = {
        marginTop: "8px",
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
