"use client";
import {
  Carousel,
  CarouselControl,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselItemGroup,
} from "../core/carousel";

export const CarouselExample = () => {
  const images = [
    "https://tinyurl.com/5b6ka8jd",
    "https://tinyurl.com/7rmccdn5",
    "https://tinyurl.com/59jxz9uu",
  ];
  return (
    <div className="aspect-video">
      <Carousel>
        <CarouselControl />
        <CarouselIndicatorGroup itemCount={images.length} />
        <CarouselItemGroup>
          {images.map((image, index) => (
            <CarouselItem key={index} index={index}>
              <img src={image} alt={`Slide ${index}`} />
            </CarouselItem>
          ))}
        </CarouselItemGroup>
      </Carousel>
    </div>
  );
};
