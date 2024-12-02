// carousel.tsx
'use client'
import { Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'


const Carousel = ({
    data,
}: {
    data: {
        image: string
    }[]
}) => {
    // State and Ref initialization
    const [currentImg, setCurrentImg] = useState(0)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    const carouselRef = useRef(null)

    // useEffect to get the initial carousel size
    useEffect(() => {
        const elem = carouselRef.current as unknown as HTMLDivElement
        const { width, height } = elem.getBoundingClientRect()
        if (carouselRef.current) {
            setCarouselSize({
                width,
                height,
            })
        }
    }, [])

    return (
        <div>
            {/* Carousel container */}
            <div className="relative flex aspect-[1/1] max-w-1/2 min-w-1/4 w-[400px] mt-[-350px] overflow-hidden rounded-md">
                {/* Image container */}
                <div
                    ref={carouselRef}
                    style={{
                        left: -currentImg * carouselSize.width,
                    }}
                    className="absolute flex w-full h-full transition-all duration-300"
                >
                    {/* Map through data to render images */}
                    {data.map((v, i) => (
                        <div key={i} className="relative w-full h-full shrink-0">
                            <Image
                                className="pointer-events-none"
                                alt={`carousel-image-${i}`}
                                fill
                                src={v.image || '/images/carousel_interactive/image1.png'}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Navigation buttons */}
            <div className="flex justify-between w-full mt-3">
                <button
                    disabled={currentImg === 0}
                    onClick={() => setCurrentImg((prev) => prev - 1)}
                    className={`px-4 py-2 font-normal ${currentImg === 0 && 'opacity-50'}`}
                >
                    {'< P R E V'}
                </button>
                <Typography
                    className="font-medium"
                    variant="h3"
                    color="#283C28"
                    sx={{
                        fontWeight: 400,
                        alignContent: 'flex-start',
                        fontFamily: 'Chronicle Display',
                        fontSize: {
                            xs: "10px",
                            sm: "15px",  // Small screens
                            md: "25px",  // Medium screens
                            lg: "30px"
                        }
                    }}
                >
                    STAIRS
                </Typography>
                <button
                    disabled={currentImg === data.length - 1}
                    onClick={() => setCurrentImg((prev) => prev + 1)}
                    className={`px-4 py-2 font-normal ${currentImg === data.length - 1 && 'opacity-50'}`}
                >
                    {'N E X T >'}
                </button>
            </div>
        </div>
    )
}

export default Carousel
