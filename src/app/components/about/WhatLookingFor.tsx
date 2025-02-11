'use client';

import React from 'react';
import CourseInstructor from './CourseInstructor';
import Image from 'next/image';

const WhatLookingFor: React.FC = () => {
  return (
    <div className="about-section-wrapper pos-rel gradient-bg">
      <div className="what-blur-shape-one"></div>
      <div className="what-blur-shape-two"></div>
      
      {/* what-looking-for start */}
      <section className="what-looking-for pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55">
                <h5 className="bottom-line mb-25">Teachers & Students</h5>
                <h2>What you Looking For?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="what-box text-center mb-3">
                <div className="what-box__icon mb-30">
                  <Image 
                    src="/assets/img/icon/phone-operator.svg" 
                    alt="Phone Operator Icon" 
                    width={50} 
                    height={50} 
                  />
                </div>
                <h3>Do you want to teach here?</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.</p>
                <a href="contact.html" className="theme_btn border_btn">Register Now</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="what-box text-center mb-3">
                <div className="what-box__icon mb-30">
                  <Image 
                    src="/assets/img/icon/graduate.svg" 
                    alt="Graduate Icon" 
                    width={50} 
                    height={50} 
                  />
                </div>
                <h3>Do you want to learn here?</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.</p>
                <a href="contact.html" className="theme_btn border_btn active">Register Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* what-looking-for end */}
      
      {/* course-instructor start */}
      <CourseInstructor />
      {/* course-instructor end */}
    </div>
  );
};

export default WhatLookingFor;
