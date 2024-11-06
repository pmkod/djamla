import React from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselItemGroup,
} from "../../react/components/core/carousel";

const CarouselPage = () => {
  const images = [
    "https://tinyurl.com/5b6ka8jd",
    "https://tinyurl.com/7rmccdn5",
    "https://tinyurl.com/59jxz9uu",
  ];
  return (
    <div className="p-20">
      <div className="w-96 h-52">
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
    </div>
  );
};

export default CarouselPage;
