"use client";

import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

import TestimonialCarousel from "@src/components/Home/TestimonialCarousel";

export default function Testimonials() {
    const [isMobile] = useMediaQuery("(max-width: 512px)");

    const testimonialsContainerStyles = {
        margin: "180px auto",
    };
    const testimonialsHeaderStyles = isMobile
        ? {
              textAlign: "center",
              color: "#000",
              fontSize: "35px",
              fontWeight: "800",
          }
        : {
              textAlign: "center",
              color: "#000",
              fontSize: "52px",
              fontWeight: "800",
          };
    const testimonialsHeaderDescriptionStyles = isMobile
        ? {
              marginTop: "16px",
              textAlign: "center",
              color: "#666",
              fontSize: "20px",
              fontWeight: "400",
          }
        : {
              marginTop: "16px",
              textAlign: "center",
              color: "#666",
              fontSize: "24px",
              fontWeight: "400",
          };

    const testimonialsCarouselWrapper = {
        margin: "100px 0",
    };
    return (
        <Box {...testimonialsContainerStyles}>
            <Text {...testimonialsHeaderStyles}>What Client Say</Text>
            <Text {...testimonialsHeaderDescriptionStyles}>
                Don’t Believe me Check What Client Think Of Us
            </Text>
            <Box {...testimonialsCarouselWrapper}>
                <TestimonialCarousel />
            </Box>
        </Box>
    );
}
