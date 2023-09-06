import React from "react";
import "tailwindcss/tailwind.css"; // Import your Tailwind CSS file here
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import dell_img from '../assest/dell_img.jpg'
import mac_img from '../assest/mac.jpg'
import hp_img from '../assest/hp_img.jpg'

function ImageSlider() {
    return (
      <div className="max-w-screen-lg mx-auto mt-8">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
        >
          <div className="relative h-80">
            <img src={dell_img} alt="Product 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-semibold">Dell</h2>
              <p className="text-lg"></p>
            </div>
          </div>
          <div className="relative h-80">
            <img src={mac_img} alt="Product 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-semibold">Mac Book Pro</h2>
              <p className="text-lg"></p>
            </div>
          </div>
          <div className="relative h-80">
            <img src={hp_img} alt="Product 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-semibold">HP Laptop</h2>
              <p className="text-lg"></p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
  
  export default ImageSlider;