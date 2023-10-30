"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import StartupCard from "./StartupCard";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const startupCards = [
  {
    id: 1,
    img: "/newtral.svg",
    imgWidth: 100,
    imgHeight: 50,
    title: "Newtral",
    description:
      "AI-enabled carbon accounting platform for sustainable companies. Industry-leading integrations.",
    link: "",
  },
  {
    id: 2,
    img: "/rupid.png",
    imgWidth: 100,
    imgHeight: 50,
    title: "Rupid",
    description:
      "Rupid is a fintech solution that allows employees to access a portion of their earned wages but not paid before their regular payday.",
    link: "",
  },
  {
    id: 3,
    img: "/betterspace.png",
    imgWidth: 100,
    imgHeight: 50,
    title: "BetterSpace",
    description:
      "BetterSpace is Mental Health, Sexuality & Disability healthcare Startup. We provide safe-inclusive spaces online that are affordable, regional, and accessible for all! BetterSpace is a Women-Led and run by Mental Health Professionals.",
    link: "",
  },
  {
    id: 4,
    img: "/ohlocal.webp",
    imgWidth: 100,
    imgHeight: 50,
    title: "Ohlocal ",
    description:
      "India’s local marketplace connects brands with merchants, merchants with consumers and consumers with brands in their city via an AI-enabled smart real-time bidding platform.",
    link: "",
  },
  {
    id: 5,
    img: "/procial.jpeg",
    imgWidth: 100,
    imgHeight: 50,
    title: "Procial",
    description:
      "Pioneer Labs is developing the framework that will enable developers and companies to deploy customized rollups with inbuilt security and privacy for all use cases on EVM compatible chains.",
    link: "",
  },
  {
    id: 6,
    img: "/zebo.png",
    imgWidth: 100,
    imgHeight: 50,
    title: "Zebo Live",
    description:
      "ZeboLive helps any user with a talent to monetize their creativity and increase their fanbase in the shortest time unlike YT, IG & FB Made in India, Made by Indians and Made for Everyone.",
    link: "",
  },
  {
    id: 7,
    img: "/nema.png",
    imgWidth: 100,
    imgHeight: 50,
    title: "Nema AI",
    description:
      "NEMA AI uses neuroscience and artificial intelligence to provide solutions for education, employability, and marketing. The company aims to identify brain patterns to understand consumer behavior and provide insights to help businesses make data-driven decisions.",
    link: "",
  },
  {
    id: 8,
    img: "/healspan.svg",
    imgWidth: 100,
    imgHeight: 50,
    title: "Healspan",
    description:
      "Healspan designs cloud software for hospitals to process, track, and manage insurance claims. This user-friendly platform works with all insurers and TPAs, offering features that greatly speed up filing and payment settlement.",
    link: "",
  },
  {
    id: 9,
    img: "/bullagritech.svg",
    imgWidth: 100,
    imgHeight: 50,
    title: "Bull Agritech",
    description:
      "Bull Agritech is a platform that handles tech, logistics, quality assessment, and payment protection and thus aims to help both farmers and commodity processors connect and conduct trade through a more efficient process.",
    link: "",
  },
  {
    id: 10,
    img: "/curomates.png",
    imgWidth: 100,
    imgHeight: 50,
    title: "Curomates",
    description:
      "Curomates allows you to find relevant mental health communities, have free private chats with empathetic listeners, find affordable therapy, and more.",
    link: "",
  },
  {
    id: 11,
    img: "/bildify.png",
    imgWidth: 100,
    imgHeight: 50,
    title: "Bildify",
    description:
      "Bildify is the first fintech solution specifically focused on the MSME sector companies in the Construction industry. The Bildify App is a comprehensive expense management tool specifically designed for businesses in the construction industry.",
    link: "",
  },
];

export default function FundedStartups() {
  const [isHovered, setIsHovered] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  const [isMobile] = useMediaQuery("(max-width: 512px)");

  const fundedStartupsContainerStyles = isMobile
    ? {
        // maxWidth: "512px",
        // margin: "0 auto",
        textAlign: "center",
        // marginBottom: "50px",
      }
    : {
        maxWidth: "1440px",
        margin: "0 auto",
        textAlign: "center",
        marginBottom: "100px",
      };

  const sectionHeading = isMobile
    ? {
        fontSize: "24px",
        fontWeight: 700,
        marginBottom: "1.5rem",
      }
    : {
        color: "#000",
        fontSize: "52px",
        fontWeight: 800,
        marginBottom: "3rem",
      };

  const cardStyle = isMobile
    ? {
        width: "400px",
        maxHeight: "500px",
        margin: "20px 10px 30px 10px",
        // paddingBottom: "1rem",
      }
    : {
        width: "300px",
        height: "400px",
        padding: "1rem",
        cursor: "not-allowed",
      };

  const CustomPrevArrow = (props) => (
    <div
      {...props}
      onClick={props.onClick}
      style={
        isMobile
          ? {
              display: "none",
            }
          : {
              backgroundColor: "#d0d0d0",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "10px",
              cursor: "pointer",
              zIndex: 10,
            }
      }
    ></div>
  );

  const CustomNextArrow = (props) => (
    <div
      {...props}
      onClick={props.onClick}
      style={
        isMobile
          ? {
              display: "none",
            }
          : {
              position: "absolute",
              backgroundColor: "#d0d0d0",
              top: "50%",
              borderRadius: "50%",
              right: "10px",
              cursor: "pointer",
              zIndex: 10,
            }
      }
    ></div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 500,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    beforeChange: (currentSlide, nextSlide) => {
      if (isHovered) {
        setAutoplay(false);
        cursor(pointer);
      }
    },
  };

  useEffect(() => {
    if (!isHovered) {
      setAutoplay(true);
    }
  }, [isHovered]);

  return (
    <Box {...fundedStartupsContainerStyles}>
      <Text {...sectionHeading}>Our Portfolio Startups</Text>
      <Slider
        {...settings}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {startupCards.map((startup) => (
          <div key={startup.id}>
            <div style={cardStyle}>
              <StartupCard data={startup} />
            </div>
          </div>
        ))}
      </Slider>
    </Box>
  );
}
