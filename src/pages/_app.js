/* eslint-disable @next/next/inline-script-id */
import Script from "next/script";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "@src/components/Layout";
import theme from "@src/libs/theme";

import "@src/styles/globals.css";

export default function App({ Component, pageProps, router }) {
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
            <CacheProvider>
                <ChakraProvider theme={theme}>
                    <Layout router={router}>
                        <Component {...pageProps} />
                    </Layout>
                </ChakraProvider>
            </CacheProvider>
        </>
    );
}
