"use client";

import React from "react";
import Image from "next/image";
import { Flex, Box, Text, useMediaQuery } from "@chakra-ui/react";

import Link from "next/link";

export default function Footer() {
  const [isMobile] = useMediaQuery("(max-width: 512px)");

  const footerContainer = {
    boxShadow: "0 0 5px 1px rgba(0, 0, 0, 0.05)",
  };

  const footerWrapperStyles = isMobile
    ? {
        flexDirection: "column",
        padding: "50px",
      }
    : {
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "80px 100px",
        gap: "150px",
      };

  const companyInfoWrapper = {
    width: "291px",
  };

  const pedalStartInfo = isMobile
    ? {
        color: "#000",
        fontSize: "16px",
        fontWeight: "400",
        margin: "28px 0",
      }
    : {
        color: "#000",
        fontSize: "16px",
        fontWeight: "400",
        margin: "28px 0 40px",
      };

  const copyrightTextStyles = {
    color: "#aaa",
    fontSize: "11px",
    fontWeight: "200",
  };

  const footerHeading = {
    color: "#000",
    fontSize: "20px",
    fontWeight: "800",
  };

  const footerLink = {
    color: "rgba(0, 0, 0, 0.60)",
    fontSize: "16px",
    fontWeight: "400",
  };
  const footerLastLink = {
    color: "#000",
    fontSize: "14px",
    fontWeight: "400",
  };

  const footerLinksWrapper = isMobile
    ? {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "24px",
        mt: "35px",
      }
    : {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "100px",
      };

  return (
    <Box {...footerContainer}>
      <Flex {...footerWrapperStyles}>
        <Box {...companyInfoWrapper}>
          <Image
            src="/pedalstart.svg"
            width={180}
            height={34}
            alt="pedal start"
          />
          <Text {...pedalStartInfo}>
            PedalStart is India’s fast growing startup founders’ community that
            works intensively with the startups in each phase of their journey.
            We have been transforming big ideas into high potential businesses.
          </Text>
          <Flex gap={isMobile ? "12px" : "24px"} mb="60px">
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/pedalstart/?originalSubdomain=in"
            >
              <Image
                style={{ cursor: "pointer" }}
                src="/linkedin.png"
                alt="linkedin"
                width={24}
                height={24}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/pedalstart?paipv=0&eav=AfYJ2nkTpbEa9f5rnsbzYWTPVKMCZMk6sACc2ToLkJuVMqHALFgr9UIJBROmzYwoSb0"
            >
              <Image
                style={{ cursor: "pointer" }}
                src="/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/pedalstart/?hl=en"
            >
              <Image
                style={{ cursor: "pointer" }}
                src="/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
            </Link>
          </Flex>
          <Text {...copyrightTextStyles}>
            {" "}
            &#169; 2022 - All Rights Reserved - PedalStart
          </Text>
        </Box>
        <Box {...footerLinksWrapper}>
          <Flex gap={isMobile ? "12px" : "24px"} flexDirection="column">
            <Text {...footerHeading}>SERVICE</Text>
            <Link
              target="_blank"
              href="https://pedalstart.com/startup/"
              {...footerLink}
            >
              Startup
            </Link>
            <Link
              target="_blank"
              href="https://invest.pedalstart.com/"
              {...footerLink}
            >
              Investors
            </Link>
            {/* <Link
                            href="https://pedalstart.substack.com/"
                            {...footerLink}
                        >
                            Learnings
                        </Link> */}
          </Flex>
          <Flex gap={isMobile ? "12px" : "24px"} flexDirection="column">
            <Text {...footerHeading}>COMPANY</Text>
            <Link
              target="_blank"
              href="https://pedalstart.com/"
              {...footerLink}
            >
              About Us
            </Link>
            {/* <Link href="https://pedalstart.com/contact/" {...footerLink}>
              Contact Us
            </Link> */}
            <Link
              target="_blank"
              href="https://zfrmz.in/kYkutP4GZKrNGj21mtuW"
              {...footerLink}
            >
              Join Us
            </Link>
            <Link
              target="_blank"
              href="https://pedalstart.com/privacy-policy-2"
              {...footerLink}
            >
              Privacy Policy
            </Link>
          </Flex>
          <Flex
            w="220px"
            gap={isMobile ? "16px" : "34px"}
            flexDirection="column"
          >
            <Text {...footerHeading}>COMPANY</Text>
            <Flex gap="12px" alignItems="center">
              <Image src="/Phone.svg" alt="" width={24} height={24} />
              <Link target="_blank" href="tel:9560346002" {...footerLastLink}>
                +91-9560346002
              </Link>
            </Flex>
            <Flex gap="12px" alignItems="center">
              <Image src="/mail.svg" alt="" width={24} height={24} />
              <Link
                target="_blank"
                href="mailto:connect@pedalstart.com"
                {...footerLastLink}
              >
                Connect@pedalstart.com
              </Link>
            </Flex>
            <Flex gap="12px" alignItems="center">
              <div style={{ width: 48 }}>
                <Image src="/location.png" alt="" width={30} height={30} />
              </div>
              <Link
                target="_blank"
                href="https://www.google.com/maps/place/Spring+House+Coworking/@28.4796894,77.0878974,17z/data=!3m1!4b1!4m5!3m4!1s0x390d19bf62bb3d39:0x6a67d328df6ea663!8m2!3d28.4796894!4d77.0900861"
                {...footerLastLink}
              >
                SpringHouse Coworking, Grand Mall, Sikandarpur, Gurgaon, Haryana
                122004, INDIA
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
