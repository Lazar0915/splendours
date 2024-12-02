import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import styles from "./Carousel.module.css";

interface TouchCarouselProps {
  images: { src: string; alt: string }[];
  options?: EmblaOptionsType;
}

const TouchCarousel: React.FC<TouchCarouselProps> = ({ images, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Set initial state
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {images.map((image, index) => (
            <div className={styles.emblaSlide} key={index}>
              {/* <img
                src={image.src}
                alt={image.alt}
                className={styles.emblaImage}
              /> */}
              <Image
                src={image.src}
                width={1136}
                height={461}
                alt={image.alt}
                className={styles.emblaImage}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <button
        className={`${styles.emblaButton} ${styles.emblaButtonPrev}`}
        onClick={() => scrollTo((selectedIndex - 1 + images.length) % images.length)}
      >
        &#8249;
      </button>
      <button
        className={`${styles.emblaButton} ${styles.emblaButtonNext}`}
        onClick={() => scrollTo((selectedIndex + 1) % images.length)}
      >
        &#8250;
      </button> */}
    </div>
  );
};

export default TouchCarousel;
