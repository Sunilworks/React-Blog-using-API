import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./ImageSlide.css";

const images = [
    { url: "https://images.pexels.com/photos/715414/pexels-photo-715414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { url: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { url: "https://images.pexels.com/photos/8337433/pexels-photo-8337433.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { url: "https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { url: "https://images.pexels.com/photos/236148/pexels-photo-236148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { url: "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  ];

const ImageSlide = () => {
  return (
    <div className="imageSlide">
      
      <div className="slider">
        <SimpleImageSlider
          width={800}
          height={450}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          slideDuration={2}
          loop
        />
      </div>
      <div className="slider-mobile">
        <SimpleImageSlider
          width={400}
          height={250}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
          slideDuration={2}
          loop
        />
      </div>
    </div>
  );
};

export default ImageSlide;