"use client";

import React from "react";
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";

const AccordianData = [
    {
        id: "1",
        title: "How PedalInvest charge?",
        description: "We charge a 10% carry (commission on profits)",
    },
    {
        id: "2",
        title: "How do exits work?",
        description:
            "Once the startup is going for a future fundraise, or if there is some other investor interested in purchasing the shares, the initial investors get an exits.",
    },
    {
        id: "3",
        title: "How is the money routed?",
        description:
            "If you are investing through the pool, or going for a smaller ticket size(INR 50k) the money is routed through an SPV(LLP)",
    },
    {
        id: "4",
        title: "How secure is it?",
        description:
            "Startup Investing comes with a high risk and high return opportunity",
    },
    {
        id: "5",
        title: "How secure is it?",
        description:
            "It takes atleast 2-4 years time to start getting exists from  early stage startups",
    },
];

export default function FAQAccordian() {
    const [isMobile] = useMediaQuery("(max-width: 512px)");

    const accordianItemStyles = isMobile
        ? {
              borderRadius: "10px",
              background: "#F5F5F5",
              margin: "1rem 0",
              border: "none",
              padding: "20px 24px",
          }
        : {
              borderRadius: "10px",
              background: "#F5F5F5",
              margin: "1rem 0",
              border: "none",
              padding: "20px 24px",
          };

    const accordianButtonStyles = {
        _hover: {
            bg: "transparent",
        },
    };

    const accordianTitleStyles = {
        fontSize: "20px",
        color: "#000",
        textAlign: "left",
        fontWeight: "500",
    };

    const accordianDescriptionStyles = {
        fontSize: "16px",
        color: "rgba(0, 0, 0, 0.80)",
        fontWeight: "400",
    };

    return (
        <Accordion>
            {AccordianData.map((accordian, idx) => {
                return (
                    <AccordionItem key={idx} {...accordianItemStyles}>
                        <AccordionButton {...accordianButtonStyles}>
                            <Text {...accordianTitleStyles} flex="1">
                                {accordian.title}
                            </Text>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel {...accordianDescriptionStyles}>
                            {accordian.description}
                        </AccordionPanel>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
