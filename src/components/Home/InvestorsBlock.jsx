import React from "react";
import { Flex, Box, useMediaQuery } from "@chakra-ui/react";

import yourStoryImg from "@src/assets/your-story.svg";
import etImg from "@src/assets/et.svg";
import entrepreneurImg from "@src/assets/entrepreneur-india.svg";
import apnImg from "@src/assets/apn.png";
import toiImg from "@src/assets/toi.svg";
import Image from "next/image";

export default function InvestorsBlock() {
    const [isMobile] = useMediaQuery("(max-width: 512px)");

    const investorsBlockWrapperStyles = isMobile
        ? {
              padding: "2.5rem 1.5rem",
          }
        : {
              bg: "#FAFAFA",
              padding: "2.5rem 0",
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
        { img: yourStoryImg, width: "", height: "" },
        { img: etImg, width: "", height: "" },
        { img: entrepreneurImg, width: "", height: "" },
        { img: apnImg, width: "200px", height: "30px" },
        { img: toiImg, width: "", height: "" },
    ];

    return (
        <Box {...investorsBlockWrapperStyles}>
            <Flex {...investorsBlockStyles}>
                {companyImages.map((image, idx) => (
                    <Image
                        key={idx}
                        style={{
                            width: image.width,
                            height: image.height,
                        }}
                        src={image.img}
                        alt="company"
                    />
                ))}
            </Flex>
        </Box>
    );
}
