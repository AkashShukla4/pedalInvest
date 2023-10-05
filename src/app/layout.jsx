/* eslint-disable @next/next/inline-script-id */
"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "@src/components/Navbar";
import Footer from "@src/components/Footer";

import Script from "next/script";

import { Providers } from "./provider";

// Default theme
import "@splidejs/react-splide/css";
// or only core styles
import "@splidejs/react-splide/css/core";

const boxStyles = {
    bg: "#fff",
    minHeight: "100vh",
    fontFamily: "Inter",
};

export default function RootLayout({ children }) {
    return (
        <>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-3L4ZLPL9Y5"
            ></Script>
            <Script>
                {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-3L4ZLPL9Y5');
    `}
            </Script>
            <html lang="en">
                <body>
                    <Providers>
                        <Box {...boxStyles}>
                            <Navbar />
                            {children}
                            <Footer />
                        </Box>
                    </Providers>
                </body>
            </html>
        </>
    );
}
