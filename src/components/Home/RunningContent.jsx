"use client";

import React from "react";
import Image from "next/image";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function RunningContent({ items, direction }) {
  const [isMobile] = useMediaQuery("(max-width: 512px)");

  const cardStyles = {
    flexDirection: direction === "rtl" && "row-reverse",
    margin: "0 20px",
    minWidth: "280px",
    borderRadius: "10px",
    bg: "#fff",
    alignItems: "center",
    gap: "16px",
    boxShadow: "0px 1px 6px 0px rgba(0, 0, 0, 0.15)",
  };

  const cardName = {
    color: "#000",
    fontSize: "20px",
    fontWeight: "700",
  };
  const cardType = {
    color: "#444",
    fontSize: "16px",
    fontWeight: "400",
  };

  function InvestorInfoCard({ img, name, type }) {
    return (
      <Flex
        css={{
          img: {
            objectFit: "cover",
          },
        }}
        {...cardStyles}
      >
        <Image
          width={80}
          height={80}
          style={{
            borderRadius: "10px 0 0 10px",
            width: "80px",
            height: "80px",
          }}
          src={img}
          alt="name"
        />
        <Box>
          <Text {...cardName}>{name}</Text>
          <Text {...cardType}>{type}</Text>
        </Box>
      </Flex>
    );
  }

  return (
    <Splide
      options={{
        speed: 25000,
        arrows: false,
        rewind: true,
        type: "loop",
        easing: "linear",
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        perPage: isMobile ? 1 : 5,
        pagination: false,
        direction,
      }}
    >
      {items.map((item, idx) => (
        <SplideSlide key={idx}>
          <InvestorInfoCard img={item.img} name={item.name} type={item.type} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default RunningContent;
