/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useEffect } from "react";
import { Box, Button, useMediaQuery } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

import img1 from "@src/assets/onboarded.jpeg";
import img2 from "@src/assets/attend.jpeg";
import img3 from "@src/assets/commitment.jpeg";
import img4 from "@src/assets/money.jpeg";
import macbook from "@src/assets/macbook.svg";
import leftChevron from "@src/assets/chevron-left.svg";
import rightChevron from "@src/assets/chevron-right-black.svg";

const items = [img1, img2, img3, img4];

function Carousel({ currentIndex, setCurrentIndex }) {
    const controls = useAnimation();
    const [isMobile] = useMediaQuery("(max-width: 512px)");
    const [isSmallDesktop] = useMediaQuery("(max-width: 1025px)");

    useEffect(() => {
        const autoplayInterval = 3000;

        const autoplay = setInterval(() => {
            nextItem();
        }, autoplayInterval);

        return () => {
            clearInterval(autoplay);
        };
    }, []);

    useEffect(() => {
        controls.start({ x: -currentIndex * 613 });
    }, [currentIndex, controls]);

    const carouselContainer = {
        padding: "0 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
    };

    const carousel = isSmallDesktop
        ? {
              position: "absolute",
              top: "114px",
              left: "205px",
              display: "flex",
          }
        : {
              position: "absolute",
              top: "114px",
              left: "394px",
              display: "flex",
          };

    const carouselItem = {
        width: "613px",
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
    };

    const macImageWrapperStyle = {
        margin: "-80px 0",
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const nextItem = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Box {...carouselContainer}>
            <Button {...button} onClick={prevItem}>
                <Image width={24} height={24} src={leftChevron} alt="left" />
            </Button>
            <Box {...macImageWrapperStyle}>
                <Image src={macbook} alt="macbook" />
            </Box>
            <motion.div
                style={{ ...carousel }}
                animate={controls}
                initial={{ x: 0 }}
                transition={{ type: "linear", stiffness: 120 }}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        {...carouselItem}
                        opacity={index === currentIndex ? "1" : "0"}
                        css={{
                            img: {
                                objectFit: "cover",
                            },
                        }}
                    >
                        <Image
                            style={{
                                height: "390px",
                                width: "613px",
                            }}
                            alt="carousel image"
                            src={item}
                        />
                    </Box>
                ))}
            </motion.div>
            <Button {...button} onClick={nextItem}>
                <Image width={24} height={24} src={rightChevron} alt="right" />
            </Button>
        </Box>
    );
    //   return (
    //     <Box {...carouselContainer}>
    //       <Button {...button} onClick={prevItem}>
    //         <Image width={24} height={24} src={leftChevron} alt="left" />
    //       </Button>
    //       <Box {...macImageWrapperStyle}>
    //         <Image src={macbook} alt="macbook" />
    //       </Box>
    //       <motion.div
    //         style={{ ...carousel }}
    //         animate={controls}
    //         initial={{ x: 0 }}
    //         transition={{ type: 'linear', stiffness: 120 }}
    //       >
    //         {items.map((item, index) => (
    //           <Box
    //             key={index}
    //             {...carouselItem}
    //             opacity={index === currentIndex ? '1' : '0'}
    //             css={{
    //               img: {
    //                 objectFit: 'cover'
    //               }
    //             }}
    //           >
    //             <Image height={390} width={613} alt="carousel image" src={item} />
    //           </Box>
    //         ))}
    //       </motion.div>
    //       <Button {...button} onClick={nextItem}>
    //         <Image width={24} height={24} src={rightChevron} alt="right" />
    //       </Button>
    //     </Box>
    //   )
}

export default Carousel;
