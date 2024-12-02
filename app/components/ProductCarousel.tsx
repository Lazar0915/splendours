import { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from '@mui/material';

// Define the structure of each resource
interface Resource {
    title: string;
    imageUrl?: string;
}

// Import data (assuming it's a TypeScript module)
import data from "./ProductData.json";

// Carousel Component
const ProductCarousel = () => {
    const isMobile = useMediaQuery('(max-width: 768px)'); // Media query for mobile
    const maxScrollWidth = useRef<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const carousel = useRef<HTMLDivElement | null>(null);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction: "prev" | "next"): boolean => {
        if (direction === "prev") {
            return currentIndex <= 0;
        }

        if (direction === "next" && carousel.current) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel.current) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        if (carousel.current) {
            maxScrollWidth.current =
                carousel.current.scrollWidth - carousel.current.offsetWidth;
        }
    }, []);

    return (
        <div className="carousel space-y-2">
            <Box className="flex w-full justify-between">
                <Typography
                    className="flex"
                    variant="h3"
                    color="#283C28"
                    sx={{
                        fontWeight: 500,
                        fontFamily: 'Montserrat',
                        fontSize: '20px'
                    }}
                >
                    PRODUCT
                </Typography>
                <div className="flex justify-between">
                    <button
                        onClick={movePrev}
                        className="text-[#283C28] w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled("prev")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="text-[#283C28] w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled("next")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </Box>

            <div className="relative overflow-hidden">
                <div
                    ref={carousel}
                    className="carousel-container relative flex gap-5 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {data.resources.map((resource: Resource, index: number) => (
                        <div
                            key={index}
                            style={{ minWidth: isMobile?'45%':'30%' }}
                            className="carousel-item text-center relative snap-start aspect-[3.83/1] rounded-lg"
                        >
                            <a
                                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-2xl"
                                style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
                            >
                                <img
                                    src={resource.imageUrl || ""}
                                    alt={resource.title}
                                    className="w-full aspect-square hidden rounded-2xl"
                                />
                            </a>
                            <a
                                className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                            >
                                <h3 className="text-white py-6 px-3 mx-auto text-xl">
                                    {resource.title}
                                </h3>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;