import React from "react";
import CarouselSlide from "./Slide";
import HeroCenteredComponent from "../Hero/CenteredHero";
interface ICarouselComponentProps {
  type: "slide";
  children: React.ReactNode[];
}

function CarouselComponent(props: ICarouselComponentProps) {
  return (
    <div className="carousel w-full">
      {props.type === "slide" && (
        <CarouselSlide>{props.children}</CarouselSlide>
      )}
    </div>
  );
}

export default CarouselComponent;
