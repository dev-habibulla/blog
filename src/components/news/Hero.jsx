"use client";

import Link from "next/link";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

const Hero = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container section-top">
      <div className="row">
        <div className="col-12">
          <Carousel
            id="carouselHero"
            activeIndex={index}
            onSelect={handleSelect}
            controls={false}
          >
            {props.slider.map((item, i) => {
              return (
                <Carousel.Item key={i}>
                  <Link href={`/details?id=${item["id"]}`}>
                    <img alt="img" className="w-100" src={item["img1"]} />
                    <Carousel.Caption className="caption">
                      <h4>{item["title"]}</h4>
                      <p>{item["short_des"]}</p>
                    </Carousel.Caption>
                  </Link>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
  
      </div>
    </div>
  );
};

export default Hero;
