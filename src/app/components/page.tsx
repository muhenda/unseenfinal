"use client";
import React from 'react';
import Slider from "./slider/page";
import Looking from "./looking/Looking";
import Courses from "./courses/page";
import Whychoose from "./whychose/pages";
// import Testimonial from "./testimonial"; // Uncomment when needed
import Blog from "./blog/page";
import Subscribe from "./subscribe/subscribe";
import Header from './Header/page';
import Footer from './footer/page';

const Main: React.FC = () => {
  return (
    <main>
      <Header />
      {/* slider-area start */}
      <Slider />
      {/* slider-area end */}
      
      {/* what-looking-for start */}
      <Looking />
      {/* what-looking-for end */}

      {/* case-gallery start */}
      <Courses />
      {/* case-gallery end */}

      {/* why-chose-section-wrapper start */}
      <Whychoose />
      {/* why-chose-section-wrapper end */}

      {/* testimonial-area start */}
      {/* <Testimonial /> */}
      {/* testimonial-area end */}

      {/* blog-area start */}
      <Blog />
      {/* blog-area end */}

      {/* subscribe-area start */}
      <Subscribe />
      {/* subscribe-area end */}
      <Footer />
    </main>
  );
};

export default Main;