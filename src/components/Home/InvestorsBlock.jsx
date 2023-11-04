"use client";
import React from "react";
import { Flex, Box, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

export default function InvestorsBlock() {
  const [isMobile] = useMediaQuery("(max-width: 512px)");

  const investorsBlockWrapperStyles = isMobile
    ? {
        padding: "1.5rem 1.5rem",
      }
    : {
        bg: "#FAFAFA",
        padding: "2rem 0",
        margin: "2.5rem 0",
      };

  const investorsBlockStyles = isMobile
    ? {
        wrap: "wrap",
        gap: "35px",
        justifyContent: "center",
      }
    : {
        justifyContent: "space-around",
        maxWidth: "1440px",
        margin: "0 auto",
      };

  const companyImages = [
    {
      img: "/entrepreneur-india.svg",
      width: 120,
      height: 40,
      link: "https://entm.ag/WofBvQ",
    },
    {
      img: "/entrackr.png",
      width: 130,
      height: 30,
      link: "https://entrackr.com/2023/07/pedalstart-leads-pre-seed-round-in-climate-tech-startup-newtral-io/ ",
    },
    {
      img: "/your-story.svg",
      width: 100,
      height: 35,
      link: "https://yourstory.com/2023/11/startup-news-and-updates-november-3-2023",
    },
    {
      img: "/toi.svg",
      width: 100,
      height: 25,
      link: "https://timesofindia.indiatimes.com/pedalstart-launches-an-internal-company-fund-of-2-5-cr-for-early-stagestartups/articleshow/91760833.cms",
    },

    {
      img: "/apn.png",
      width: 160,
      height: 25,
      link: "https://www.apnnews.com/pedalstart-launches-zero-to-one-cohort-for-early-stage-startup-founders-with-1-5cr-investment-commitment/",
    },
  ];

  return (
    <Box {...investorsBlockWrapperStyles}>
      <Flex {...investorsBlockStyles}>
        {companyImages.map((image, idx) => (
          <a
            key={idx}
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={image.width}
              height={image.height}
              style={{
                width: image.width,
                height: image.height,
                cursor: "pointer",
                objectFit: "contain",
              }}
              src={image.img}
              alt="company"
            />
          </a>
        ))}
      </Flex>
    </Box>
  );
}
