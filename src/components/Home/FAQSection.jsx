"use client";

import { Box, Grid, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import FAQAccordian from "@src/components/Home/FAQAccordian";

export default function FAQSection() {
    const [isMobile] = useMediaQuery("(max-width: 512px)");

    const faqSectionWrapper = isMobile
        ? {
              margin: "50px auto",
          }
        : {
              maxWidth: "1440px",
              margin: "100px auto",
          };

    const sectionHeading = isMobile
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
              textAlign: "center",
          };
    const sectionSubHeading = isMobile
        ? {
              color: "#444",
              fontSize: "18px",
              fontWeight: "400",
              textAlign: "center",
              marginTop: "15px",
          }
        : {
              color: "#444",
              fontSize: "24px",
              fontWeight: "400",
              textAlign: "center",
          };

    const faqBoxWrapperStyles = isMobile
        ? {
              margin: "20px 0",
              gridTemplateColumns: "1fr",
              alignItems: "center",
          }
        : {
              margin: "100px 0",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "center",
          };

    return (
        <Box {...faqSectionWrapper}>
            <Text {...sectionHeading}>Frequently Asked Question</Text>
            <Text {...sectionSubHeading}>
                We&apos;re making headlines all over India
            </Text>

            <Grid {...faqBoxWrapperStyles}>
                <Image width={400} height={400} src="/faq.svg" alt="faq" />
                <Box p={isMobile ? "0 30px" : "0 80px"}>
                    <FAQAccordian />
                </Box>
            </Grid>
        </Box>
    );
}
