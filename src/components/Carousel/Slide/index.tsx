import React from "react";

interface ICarouselSlide {
  children: React.ReactNode[];
}

function CarouselSlide(props: ICarouselSlide) {
  const childrenArray = React.Children.toArray(props.children);

  return (
    <>
      {childrenArray.map((child, index) => {
        return (
          <div
            key={index}
            id={`slide${index + 1}`}
            className={`carousel-item relative w-full min-h-full bg-blue-300`}
          >
            {child}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide${index}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${index + 2}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CarouselSlide;
