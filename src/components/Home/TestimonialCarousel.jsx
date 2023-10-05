"use client";

import Image from "next/image";
import React from "react";
import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const items = [
    {
        company: "/deloitte.png",
        comment:
            "“ Join the pitch call along with other potential investors or partners. This gives you the opportunity to gain a deeper understanding of the startup, its vision, and its team ”",
        username: "Paras Botadra",
        userImg: "/user1.png",
        userPosition: "CEO & FOUNDER, Unbox Innovation",
        color: "#E6F2FE",
    },
    {
        company: deloitteImg,
        comment:
            "“ Join the pitch call along with other potential investors or partners. This gives you the opportunity to gain a deeper understanding of the startup, its vision, and its team ”",
        username: "Paras Botadra",
        userImg,
        userPosition: "CEO & FOUNDER, Unbox Innovation",
        color: "#EAF5E4",
    },
    {
        company: deloitteImg,
        comment:
            "“ Join the pitch call along with other potential investors or partners. This gives you the opportunity to gain a deeper understanding of the startup, its vision, and its team ”",
        username: "Paras Botadra",
        userImg,
        userPosition: "CEO & FOUNDER, Unbox Innovation",
        color: "#EFF0FE",
    },
    {
        company: deloitteImg,
        comment:
            "“ Join the pitch call along with other potential investors or partners. This gives you the opportunity to gain a deeper understanding of the startup, its vision, and its team ”",
        username: "Paras Botadra",
        userImg,
        userPosition: "CEO & FOUNDER, Unbox Innovation",
        color: "#E6F2FE",
    },
    {
        company: deloitteImg,
        comment:
            "“ Join the pitch call along with other potential investors or partners. This gives you the opportunity to gain a deeper understanding of the startup, its vision, and its team ”",
        username: "Paras Botadra",
        userImg,
        userPosition: "CEO & FOUNDER, Unbox Innovation",
        color: "#EAF5E4",
    },
    {
        company: deloitteImg,
        comment:
            "“ Join the pitch call along with other potential investors or partners. This gives you the opportunity to gain a deeper understanding of the startup, its vision, and its team ”",
        username: "Paras Botadra",
        userImg,
        userPosition: "CEO & FOUNDER, Unbox Innovation",
        color: "#EAF5E4",
    },
];

function TestimonialCarousel() {
    const [isMobile] = useMediaQuery("(max-width: 512px)");

    const carouselContainer = {};

    const carousel = isMobile
        ? {
              display: "flex",
              flexWrap: "nowrap",
              gap: "35px",
          }
        : {
              display: "flex",
              flexWrap: "nowrap",
              gap: "52px",
          };

    const wrapper = {
        overflow: "hidden",
    };

    const carouselItem = isMobile
        ? {
              width: "90%",
              minWidth: "90%",
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              padding: "40px 20px",
              borderRadius: "30px",
          }
        : {
              width: "880px",
              maxWidth: "880px",
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
              justifyContent: "space-between",
              alignItems: "center",
              gap: "80px",
              padding: "80px 0",
              borderRadius: "30px",
          };

    const button = {
        borderRadius: "50%",
        background: "#FFF",
        boxShadow: "0px 1px 10px 0px rgba(54, 54, 54, 0.13)",
        cursor: "pointer",
        width: "50px",
        height: "50px",
        border: "none",
        outline: "none",
        position: "absolute",
        top: "45%",
        zIndex: 100,
    };

    const commentStyles = isMobile
        ? {
              color: "rgba(0, 0, 0, 0.80)",
              width: "80%",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "700",
          }
        : {
              color: "rgba(0, 0, 0, 0.80)",
              width: "80%",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "700",
          };

    const userBoxStyle = {
        alignItems: "center",
        gap: "16px",
    };

    const userNameStyles = isMobile
        ? {
              color: "#0053A6",
              fontSize: "18px",
              fontWeight: "700",
          }
        : {
              color: "#0053A6",
              fontSize: "24px",
              fontWeight: "700",
          };

    const userPositionStyles = isMobile
        ? {
              color: "#000",
              fontSize: "11px",
              fontWeight: "600",
          }
        : {
              color: "#000",
              fontSize: "16px",
              fontWeight: "600",
          };

    return (
        <Box css={{}} {...carouselContainer}>
            <Splide
                options={{
                    rewind: true,
                    type: "loop",
                    start: 1,
                    padding: isMobile ? 0 : "21rem",
                    easing: "linear",
                    autoplay: true,
                    pauseOnHover: false,
                    resetProgress: false,
                    pagination: false,
                }}
            >
                {items.map((item, index) => (
                    <SplideSlide
                        key={index}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <Box {...carouselItem} bg={item.color}>
                            <Image
                                width={isMobile && "80%"}
                                height={isMobile ? "15px" : "26px"}
                                src={item.company}
                                alt="company"
                            />
                            <Text {...commentStyles}>{item.comment}</Text>
                            <Flex {...userBoxStyle}>
                                <Image
                                    width={isMobile ? 50 : 80}
                                    height={isMobile ? 50 : 80}
                                    src={item.userImg}
                                    alt={item.username}
                                />
                                <Box>
                                    <Text {...userNameStyles}>
                                        {item.username}
                                    </Text>
                                    <Text {...userPositionStyles}>
                                        {item.userPosition}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    </SplideSlide>
                ))}
            </Splide>
        </Box>
    );
}

export default TestimonialCarousel;
