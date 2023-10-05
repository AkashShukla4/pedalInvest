"use client";

import React from "react";
import { Box, Flex, Grid, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

export default function StartupCard({ data }) {
    const [isMobile] = useMediaQuery("(max-width: 512px)");

    const container = !isMobile
        ? {
              width: "400px",
              borderRadius: "10px",
              background: "#fff",
              boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.1)",
              padding: "24px",
          }
        : {
              padding: "14px",
              width: "85%",
              boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
          };

    const operationalInfoStyle = {
        bg: "#1A7F37",
        color: "#DAFBE1",
        fontSize: "16px",
        fontWeight: 400,
        width: "110px",
        padding: "5px 10px",
        borderRadius: "4px",
        mb: "10px",
    };

    const companyImageStyles = {
        margin: "12px 0",
        objectFit: "contain",
    };

    const titleStyles = {
        color: "#000",
        fontSize: "24px",
        fontWeight: 700,
        mt: "20px",
    };

    const descriptionStyles = {
        color: "rgba(0,0,0,0.6)",
        fontSize: "16px",
        fontWeight: 400,
        margin: "16px 0 24px",
    };

    const gridStyles = {
        border: "1px solid rgba(0,0,0,0.2)",
        gridTemplateColumns: "1fr 1fr",
        borderRadius: "10px",
    };

    const gridItem = {
        padding: "16px 24px",
        textAlign: "left",
    };

    const gridItemTitle = {
        color: "#000",
        fontSize: "16px",
        fontWeight: "500",
    };

    const gridItemDescription = {
        color: "#000",
        fontSize: "24px",
        fontWeight: "600",
    };
    return (
        <Box {...container}>
            <Box {...operationalInfoStyle}>Operational</Box>
            <Flex justifyContent="center">
                <Image
                    width={data.imgWidth}
                    height={data.imgHeight}
                    style={{
                        width: data.imgWidth,
                        height: data.imgHeight,
                        ...companyImageStyles,
                    }}
                    src={data.img}
                    alt={data.title}
                />
            </Flex>
            <Text {...titleStyles}>{data.title}</Text>
            <Text {...descriptionStyles}>{data.description}</Text>
        </Box>
    );
}
