// AutoPlayCarousel.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const AutoPlayCarousel = ({ items }) => (
  <Carousel
    responsive={responsive}
    autoPlay
    autoPlaySpeed={3000}
    infinite
    arrows={false}
    ssr

  >
    {items.map((item, index) => (
      <div key={index} className="slidesImg">
        <img src={item.image} alt={`Item ${index + 1}`} width={450} height={300} className="carouselCardImg" style={{ verticalAlign: 'middle' }} />
      </div>
            ))}
  </Carousel>
    );

export default AutoPlayCarousel;
