import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Character } from 'components/Character';

function Carousel({ settings, items }) {
  function getClass({ status }) {
    return status === 'Alive' ? 'Character__image-alive':
      'Character__image-dead';
  }
  return (
    <div>
      <Slider {...settings}>
        {items.map((item) => (
          <Character
            key={item.id}
            image={item.image}
            name={item.name}
            cssClass={getClass(item)}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
