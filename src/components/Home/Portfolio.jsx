"use client";

import Image from "next/image";
import { Box, Flex, Grid, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

export default function Portfolio() {
  const [isMobile] = useMediaQuery("(max-width: 512px)");

  const wrapper = isMobile
    ? {
        bg: "#000",
        padding: "50px 20px",
      }
    : {
        bg: "#000",
        // padding: "10px 10px",
        // border: "1px solid rgba(0, 244, 255, 0.90)",
        zIndex: "23",
        position: "relative",
        overflowY: "scroll",
        maxHeight: "650px",
        cursor: "s-resize",
      };

  const portfolioInfoWrapper = isMobile
    ? {
        position: "relative",
        gap: "10px",
        marginTop: "50px",
      }
    : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        marginTop: "20px",
      };

  const portfolioText = isMobile
    ? {
        color: "#fff",
        fontSize: "35px",
        fontWeight: "800",
        textAlign: "center",
        width: "100%",
      }
    : {
        width: "60%",
        color: "#fff",
        fontSize: "44px",
        fontWeight: "800",
      };

  const portfolioDescription = isMobile
    ? {
        color: "#fff",
        fontSize: "16px",
        fontWeight: "400",
        marginTop: "24px",
        textAlign: "center",
      }
    : {
        width: "60%",
        color: "#fff",
        fontSize: "22px",
        fontWeight: "400",
        marginTop: "24px",
      };

  const portfolioContent = isMobile
    ? {
        margin: "20px auto",
        textAlign: "center",
      }
    : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      };

  const gradientText = !isMobile
    ? {
        fontSize: "250px",
        fontWeight: "800",
        lineHeight: "250px",
        background:
          "linear-gradient(180deg, rgba(0, 244, 255, 0.90)    -13.64%, rgba(1, 224, 234, 0.00) 100%)",
        backgroundClip: "text",
      }
    : {
        // marginBottom: "20px",
        // fontSize: "60px",
        // fontWeight: "800",
        // lineHeight: "80px",
        // background:
        //   "linear-gradient(180deg, rgba(0, 244, 255, 0.90)    -13.64%, rgba(1, 224, 234, 0.00) 100%)",
        // backgroundClip: "text",
        display: "none",
      };

  const portfolioContentInfo = isMobile
    ? {
        // color: "#FFF",
        // fontSize: "15px",
        display: "none",
      }
    : {
        color: "#FFF",
        fontSize: "24px",
        fontWeight: "700",
        letterSpacing: "2.4px",
        marginLeft: "15px",
      };

  const portfolioGridInfoStyles = isMobile
    ? {
        templateColumns: "1fr",
        margin: "3rem 0",
      }
    : {
        templateColumns: "1fr 1fr",
        margin: "16rem 0",
      };

  return (
    <Box {...wrapper}>
      <Grid {...portfolioGridInfoStyles}>
        <Box {...portfolioContent}>
          <Text {...gradientText}>2K+</Text>
          <Text {...portfolioContentInfo}>Founders Community</Text>
        </Box>
        <Box {...portfolioInfoWrapper}>
          <Text {...portfolioText}>Founders Community</Text>
          <Text {...portfolioDescription}>
            Within our vibrant ecosystem, we&apos;ve cultivated a dynamic
            founder community consisting of over 2000 passionate visionaries,
            united by their drive to innovate and reshape industries.
          </Text>
        </Box>
      </Grid>
      <Grid {...portfolioGridInfoStyles}>
        <Box {...portfolioInfoWrapper}>
          <Text {...portfolioText}>Mentor Tools</Text>
          <Text {...portfolioDescription}>
            Our dedicated team of 50+ mentors brings a wealth of knowledge and
            expertise across various fields, ensuring you have access to a wide
            range of valuable guidance and support.
          </Text>
        </Box>
        <Box {...portfolioContent}>
          <Text {...gradientText}>50+</Text>
          <Text {...portfolioContentInfo}>Mentor Pool</Text>
        </Box>
      </Grid>
      <Grid {...portfolioGridInfoStyles}>
        <Box {...portfolioContent}>
          <Text {...gradientText}>80+</Text>
          <Text {...portfolioContentInfo}>Startups Accelerated</Text>
        </Box>
        <Box {...portfolioInfoWrapper}>
          <Text {...portfolioText}>Our Accelerated Startups</Text>
          <Text {...portfolioDescription}>
            We&apos;ve turbocharged over 80 startups on their journey to
            success, propelling them forward with our support and expertise.
          </Text>
        </Box>
      </Grid>
      <Grid {...portfolioGridInfoStyles}>
        <Box {...portfolioInfoWrapper}>
          <Text {...portfolioText}>Raised Funds</Text>
          <Text {...portfolioDescription}>
            We&apos;ve successfully secured over a dozen funding rounds to fuel
            the growth of our high-velocity startups.
          </Text>
        </Box>
        <Box {...portfolioContent}>
          <Text {...gradientText}>12+</Text>
          <Text {...portfolioContentInfo}>Raised Funds</Text>
        </Box>
      </Grid>
    </Box>
  );
}

// export default function Portfolio() {
//   const [isMobile] = useMediaQuery('(max-width: 512px)')

//   const wrapper = {
//     bg: '#000'
//   }

//   const portfolioGridWrapper = isMobile
//     ? {
//         padding: '50px 35px',
//         templateColumns: '1fr'
//       }
//     : {
//         maxWidth: '1440px',
//         margin: '0 auto',
//         templateColumns: '1fr 1fr',
//         position: 'relative',
//         alignItems: 'start'
//       }

//   const portfolioInfoWrapper = isMobile
//     ? {
//         position: 'relative',
//         marginTop: '50px'
//       }
//     : {
//         margin: '35% 12%',
//         position: 'sticky',
//         top: '25%'
//       }

//   const portfolioText = isMobile
//     ? {
//         color: '#fff',
//         fontSize: '35px',
//         fontWeight: '800',
//         textAlign: 'center'
//       }
//     : {
//         color: '#fff',
//         fontSize: '52px',
//         fontWeight: '800'
//       }

//   const portfolioDescription = isMobile
//     ? {
//         color: '#fff',
//         fontSize: '16px',
//         fontWeight: '400',
//         marginTop: '24px',
//         textAlign: 'center'
//       }
//     : {
//         color: '#fff',
//         fontSize: '24px',
//         fontWeight: '400',
//         marginTop: '24px'
//       }

//   const portfolioContentWrapper = isMobile
//     ? {
//         padding: '0'
//       }
//     : {
//         padding: '0 0 0 80px'
//       }

//   const portfolioContent = isMobile
//     ? {
//         margin: '20px auto',
//         textAlign: 'center'
//       }
//     : {
//         margin: '15rem 0'
//       }

//   const gradientText = !isMobile
//     ? {
//         fontSize: '250px',
//         fontWeight: '800',
//         lineHeight: '250px',
//         background:
//           'linear-gradient(180deg, rgba(0, 244, 255, 0.90)    -13.64%, rgba(1, 224, 234, 0.00) 100%)',
//         backgroundClip: 'text'
//       }
//     : {
//         fontSize: '60px',
//         fontWeight: '800',
//         lineHeight: '80px',
//         background:
//           'linear-gradient(180deg, rgba(0, 244, 255, 0.90)    -13.64%, rgba(1, 224, 234, 0.00) 100%)',
//         backgroundClip: 'text'
//       }

//   const portfolioContentInfo = isMobile
//     ? {
//         color: '#FFF',
//         fontSize: '15px'
//       }
//     : {
//         color: '#FFF',
//         fontSize: '24px',
//         fontWeight: '700',
//         letterSpacing: '2.4px',
//         marginLeft: '15px'
//       }

//   return (
//     <Box {...wrapper}>
//       <Grid {...portfolioGridWrapper}>
//         <Box {...portfolioInfoWrapper}>
//           <Text {...portfolioText}>Our Portfolio</Text>
//           <Text {...portfolioDescription}>
//             A platform for retail investors to invest in high-growth startups
//             with the potential to grow their wealth 10x. PedalStart accelerates
//             these startups, ensuring their high potential for success.
//           </Text>
//         </Box>
//         <Box {...portfolioContentWrapper}>
//           <Box {...portfolioContent}>
//             <Text {...gradientText}>2k+</Text>
//             <Text {...portfolioContentInfo}>Founders Community</Text>
//           </Box>
//           <Box {...portfolioContent}>
//             <Text {...gradientText}>50+</Text>
//             <Text {...portfolioContentInfo}>Mentor Pool</Text>
//           </Box>
//           <Box {...portfolioContent}>
//             <Text {...gradientText}>80+</Text>
//             <Text {...portfolioContentInfo}>Startups Accelerated</Text>
//           </Box>
//           <Box {...portfolioContent}>
//             <Text {...gradientText}>12+</Text>
//             <Text {...portfolioContentInfo}>Raised Funds</Text>
//           </Box>
//         </Box>
//       </Grid>
//     </Box>
//   )
// }
