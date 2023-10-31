import React from "react";
import { Box } from "@chakra-ui/react";

import Hero from "@src/components/Home/Hero";
import InvestorsBlock from "@src/components/Home/InvestorsBlock";
import About from "@src/components/Home/AboutPedalInvest";
import Portfolio from "@src/components/Home/Portfolio";

import HowItWorks from "@src/components/Home/HowItWorks";
// import Testimonials from '@src/components/Home/Testimonials'
import StartupFilterationProcess from "@src/components/Home/StartupFilterationProcess";
import OurInvestors from "@src/components/Home/OurInvestors";
import FAQSection from "@src/components/Home/FAQSection";
import FundedStartups from "@src/components/Home/FundedStartups";

const aboutPedalInvestProps = {
  title: "What Is PedalInvest ?",
  description:
    "A platform for retail investors to invest in early-stage startups with the potential of getting exponential returns. All the startups listed on the platform are the ones backed and accelerated by PedalStart.",
  content: [
    {
      id: "1",
      title: "Exponential Returns",
      description:
        "Early-stage startup investment offers high return opportunities in long term",
      image: "/interest.svg",
    },
    {
      id: "2",
      title: "Risk Mitigation",
      description:
        "Listed opportunities are only the ones vetted and accelerated by PedalStart",
      image: "/risk.svg",
    },
    {
      id: "3",
      title: "Portfolio Diversification",
      description:
        "Opportunity to invest in a startup pool containing multiple startups with a minimum ticket size of INR 50K, hence diversifying the portfolio.",
      image: "/vetted.svg",
    },
  ],
};

// export const metadata = {
//     title: "Pedalstart - Fast Growing Founder's Community",
//     icons: {
//         icon: "/favicon.ico",
//     },
// };

export default function Page() {
  return (
    <>
      <Box
        style={{
          maxWidth: "100%",
          overflowX: "hidden",
          margin: "0 auto",
        }}
      >
        <Hero />
        <InvestorsBlock />
        <About {...aboutPedalInvestProps} />
        <FundedStartups />
        <Portfolio />
        <HowItWorks />
        <StartupFilterationProcess />
        <OurInvestors />
        {/* <Testimonials /> */}
        <FAQSection />
      </Box>
    </>
  );
}
