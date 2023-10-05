"use client";

import React from "react";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";

import yourStoryImg from "@src/assets/your-story-red.svg";
import etImg from "@src/assets/et-red.svg";
import entrepreneurImg from "@src/assets/entrepreneur-india.svg";
import toiImg from "@src/assets/toi-red.svg";

const headlineSectionWrapperStyles = {
    maxWidth: "1320px",
    margin: "200px auto",
    textAlign: "center",
};

const sectionHeading = {
    color: "#000",
    fontSize: "52px",
    fontWeight: "800",
};

const sectionSubHeading = {
    color: "#444",
    fontSize: "24px",
    fontWeight: "400",
};

const blockStyles = {
    justifyContent: "space-between",
    marginTop: "100px",
};

const companyImages = [
    yourStoryImg,
    etImg,
    entrepreneurImg,
    entrepreneurImg,
    toiImg,
];

export default function Headline() {
    return (
        <Box {...headlineSectionWrapperStyles}>
            <Text {...sectionHeading}>Headline We Made With</Text>
            <Text {...sectionSubHeading}>
                We&apos;re making headlines all over India
            </Text>
            <Flex {...blockStyles}>
                {companyImages.map((image, idx) => (
                    <Image key={idx} src={image} alt="company" />
                ))}
            </Flex>
        </Box>
    );
}
