'use client';

import React from 'react';
import PageTitleArea from '../components/about/PageTitleArea';
import AboutUsArea from '../components/about/AboutUsArea';
import Gallery from '../components/courses/page';
import Subscribe from '../components/subscribe/subscribe';
import Navbar from '../components/Header/page';
import Footer from '../components/footer/page';

const About: React.FC = () => {
  return (
    <main>
        <Navbar />
      {/* page-title-area start */}
      <PageTitleArea />
      {/* page-title-area end */}
      
     
      
      {/* about-us-area start */}
      <AboutUsArea />
      {/* about-us-area end */}
      
      {/* about-section-wrapper start */}
      <Gallery />
      {/* about-section-wrapper end */}
      
      {/* subscribe-area start */}
      <Subscribe />
      {/* subscribe-area end */}
      <Footer />
      
    </main>
  );
};

export default About;