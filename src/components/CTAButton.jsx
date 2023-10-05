import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

import rightChevron from "@src/assets/chevron-right.svg";

const ctaButtonStyles = {
    height: "56px",
    bg: "#007BFF",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: 0,
    padding: "0 2.5rem",
    _hover: {
        bg: "#0267d3",
    },
};

const rightChevronStyles = {
    w: "20px",
    h: "20px",
};

export default function CTAButton({ children, onClick }) {
    return (
        <Button
            {...ctaButtonStyles}
            rightIcon={
                <Image
                    {...rightChevronStyles}
                    src={rightChevron}
                    alt="right chevron"
                />
            }
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
