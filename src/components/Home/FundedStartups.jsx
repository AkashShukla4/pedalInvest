import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import StartupCard from "./StartupCard";

import ohLocalImg from "@src/assets/ohlocal.webp";
import newtralImg from "@src/assets/newtral.svg";
import rupidImg from "@src/assets/rupid.png";
import betterspaceImg from "@src/assets/betterspace.png";
import procialImg from "@src/assets/procial.jpeg";
import zeboImg from "@src/assets/zebo.png";
import nemaImg from "@src/assets/nema.png";
import healspanImg from "@src/assets/healspan.svg";
import bullagritechImg from "@src/assets/bullagritech.svg";
import curomatesImg from "@src/assets/curomates.png";
import bildifyImg from "@src/assets/bildify.png";

const startupCards = [
    {
        id: 1,
        img: ohLocalImg,
        imgWidth: "100px",
        imgHeight: "100px",
        title: "Ohlocal ",
        description:
            "India’s local marketplace connects brands with merchants, merchants with consumers and consumers with brands in their city via an AI-enabled smart real-time bidding platform.",
        link: "",
    },
    {
        id: 2,
        img: newtralImg,
        imgWidth: "150px",
        imgHeight: "90px",
        title: "Newtral",
        description:
            "AI-enabled carbon accounting platform for sustainable companies. Industry-leading integrations ",
        link: "",
    },
    {
        id: 3,
        img: rupidImg,
        imgWidth: "150px",
        imgHeight: "40px",
        title: "Rupid",
        description:
            "Rupid is a fintech solution that allows employees to access a portion of their earned wages but not paid before their regular payday.",
        link: "",
    },
    {
        id: 4,
        img: betterspaceImg,
        imgWidth: "190px",
        imgHeight: "50px",
        title: "BetterSpace",
        description:
            "BetterSpace is Mental Health, Sexuality & Disability healthcare Startup. We provide safe-inclusive spaces online that are affordable, regional, and accessible for all! BetterSpace is a Women-Led and run by Mental Health Professionals.",
        link: "",
    },
    {
        id: 5,
        img: procialImg,
        imgWidth: "100px",
        imgHeight: "100px",
        title: "Procial",
        description:
            "Pioneer Labs is developing the framework that will enable developers and companies to deploy customized rollups with inbuilt security and privacy for all use cases on EVM compatible chains.",
        link: "",
    },
    {
        id: 6,
        img: zeboImg,
        imgWidth: "100px",
        imgHeight: "100px",
        title: "Zebo Live",
        description:
            "ZeboLive helps any user with a talent to monetize their creativity and increase their fanbase in the shortest time unlike YT, IG & FB Made in India, Made by Indians and Made for Everyone",
        link: "",
    },
    {
        id: 7,
        img: nemaImg,
        imgWidth: "180px",
        imgHeight: "50px",
        title: "Nema AI",
        description:
            "NEMA AI is a startup based in India that uses neuroscience and artificial intelligence (AI) to provide solutions for education, employability, and marketing. The company aims to identify brain patterns to understand consumer behavior and provide insights to help businesses make data-driven decisions.",
        link: "",
    },
    {
        id: 8,
        img: healspanImg,
        imgWidth: "200px",
        imgHeight: "60px",
        title: "Healspan",
        description:
            "Healspan makes purpose-built cloud software(SaaS) for hospitals to file, track, and manage their health insurance claims. It is the simplest-to-use platform that works with all insurers and TPAs and has a host of convenience features that drastically reduce the time to file and payment settlement.",
        link: "",
    },
    {
        id: 9,
        img: bullagritechImg,
        imgWidth: "180px",
        imgHeight: "100px",
        title: "Bull Agritech",
        description:
            "Bull Agritech is a platform that handles tech, logistics, quality assessment, and payment protection and thus aims to help both farmers and commodity processors connect and conduct trade through a more efficient process.",
        link: "",
    },
    {
        id: 10,
        img: curomatesImg,
        imgWidth: "180px",
        imgHeight: "60px",
        title: "Curomates",
        description:
            "Curomates allows you to find relevant mental health communities, have free private chats with empathetic listeners, find affordable therapy, and more.",
        link: "",
    },
    {
        id: 11,
        img: bildifyImg,
        imgWidth: "180px",
        imgHeight: "50px",
        title: "Bildify",
        description:
            "Bildify is the first fintech solution specifically focused on the MSME sector companies in the Construction industry. The Bildify App is a comprehensive expense management tool specifically designed for businesses in the construction industry.",
        link: "",
    },
];

export default function FundedStartups() {
    const [isMobile] = useMediaQuery("(max-width: 512px)");

    const fundedStartupsContainerStyles = {
        maxWidth: "1440px",
        margin: "150px auto",
        textAlign: "center",
    };

    const sectionHeading = {
        color: "#000",
        fontSize: "52px",
        fontWeight: 800,
    };

    return (
        <Box {...fundedStartupsContainerStyles}>
            <Text {...sectionHeading}> Our Portfolio Startups </Text>
            <Flex gap="24px" m="80px 0" wrap="wrap" justify="center">
                {startupCards.map((startup) => (
                    <StartupCard key={startup.id} data={startup} />
                ))}
            </Flex>
        </Box>
    );
}
