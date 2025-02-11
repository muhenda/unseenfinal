"use client";
import React, { useEffect, useState } from 'react';

const Slider: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  // Trigger client-specific logic after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="slider-area pt-180 pt-xs-150 pt-150 pb-xs-35">
      <img className="sl-shape shape_01" src="assets/img/icon/01.svg" alt="" />
      <img className="sl-shape shape_02" src="assets/img/icon/02.svg" alt="" />
      <img className="sl-shape shape_03" src="assets/img/icon/03.svg" alt="" />
      <img className="sl-shape shape_04" src="assets/img/icon/04.svg" alt="" />
      <img className="sl-shape shape_05" src="assets/img/icon/05.svg" alt="" />
      <img className="sl-shape shape_06" src="assets/img/icon/06.svg" alt="" />
      <img className="sl-shape shape_07" src="assets/img/shape/dot-box-5.svg" alt="" />
      
      <div className="main-slider pt-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 order-last order-lg-first">
              <div className="slider__img__box mb-50 pr-30">
                <img className="img-one mt-55 pr-70" src="assets/img/slider/01.png" alt="" />
                <img className="slide-shape img-two" src="assets/img/slider/02.png" alt="" />
                <img className="slide-shape img-three" src="assets/img/slider/03.png" alt="" />
                <img className="slide-shape img-four" src="assets/img/shape/dot-box-1.svg" alt="" />
                <img className="slide-shape img-five" src="assets/img/shape/dot-box-2.svg" alt="" />
                <img className="slide-shape img-six" src="assets/img/shape/zigzg-1.svg" alt="" />

                {/* Only apply animation on the client */}
                {isClient && (
                  <img 
                    className="slide-shape img-seven wow fadeInRight animated" 
                    data-delay="1.5s" 
                    src="assets/img/icon/dot-plan-1.svg" 
                    alt="Chose-img" 
                  />
                )}
                <img className="slide-shape img-eight" src="assets/img/slider/earth-bg.svg" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="slider__content pt-15">
                <h1 className="main-title mb-40 wow fadeInUp2 animated" data-wow-delay='.1s'>
                  Empowering talent, celebrating heritage <span className="vec-shape">delivering excellence.</span>
                </h1>
                <h5 className="mb-35 wow fadeInUp2 animated" data-wow-delay='.2s'>
                  Our mission is to empower hidden talents, celebrate cultural heritage, and provide top-quality services in the fashion and events industry
                </h5>
                <ul className="search__area d-md-inline-flex align-items-center justify-content-between mb-30">
                  <li>
                    <button className="theme_btn search_btn ml-35">Trust us</button>
                  </li>
                </ul>
                <p className="highlight-text"><span>#1</span> Worldwide Learning & Skills Development Platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
