import React from "react";
import { useSpring, animated } from "react-spring";
import Footer from "../components/Footer";
import image from "../assest/about_image.jpg";

const AboutUs = () => {
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 800 },
  });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 800, delay: 300 },
  });

  return (
    <div>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
            About Us
          </h1>
          <div className="lg:flex lg:justify-between">
            <animated.div
              style={imageAnimation}
              className="lg:w-1/2 mb-8 lg:mb-0"
            >
              <img
                className="mx-auto h-auto max-w-full rounded-lg shadow-lg"
                src={image}
                alt="About Us"
              />
            </animated.div>
            <animated.div style={textAnimation} className="lg:w-1/2">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At our company, we are passionate about delivering
                  high-quality products and exceptional service to our valued
                  customers. Our journey began 2000 when our visionary founder,
                  started this company with a simple mission - to provide
                  top-notch products that make our customers' lives better.
                </p>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                We believe in offering only the best products. Each item in our
                store is carefully curated, tested, and selected to ensure it
                meets the highest standards of quality.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Honesty and integrity are at the heart of everything we do. You
                can trust us to provide accurate product information and
                transparent pricing.
              </p>
            </animated.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
