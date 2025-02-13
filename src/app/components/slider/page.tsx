"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Slider: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="slider-area pt-180 pt-xs-150 pt-150 pb-xs-35">
      <Image className="sl-shape shape_01" src="/assets/img/icon/01.svg" alt="Shape 1" width={100} height={100} />
      <Image className="sl-shape shape_02" src="/assets/img/icon/02.svg" alt="Shape 2" width={100} height={100} />
      <Image className="sl-shape shape_03" src="/assets/img/icon/03.svg" alt="Shape 3" width={100} height={100} />
      <Image className="sl-shape shape_04" src="/assets/img/icon/04.svg" alt="Shape 4" width={100} height={100} />
      <Image className="sl-shape shape_05" src="/assets/img/icon/05.svg" alt="Shape 5" width={100} height={100} />
      <Image className="sl-shape shape_06" src="/assets/img/icon/06.svg" alt="Shape 6" width={100} height={100} />
      <Image className="sl-shape shape_07" src="/assets/img/shape/dot-box-5.svg" alt="Dot Box 5" width={100} height={100} />
      
      <div className="main-slider pt-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 order-last order-lg-first">
              <div className="slider__img__box mb-50 pr-30">
                <Image className="img-one mt-55 pr-70" src="/assets/img/slider/01.png" alt="Slider Image 1" width={500} height={500} />
                
                
                <Image className="slide-shape img-four" src="/assets/img/shape/dot-box-1.svg" alt="Dot Box 1" width={100} height={100} />
                <Image className="slide-shape img-five" src="/assets/img/shape/dot-box-2.svg" alt="Dot Box 2" width={100} height={100} />
                <Image className="slide-shape img-six" src="/assets/img/shape/zigzg-1.svg" alt="Zigzag Shape" width={100} height={100} />

                {isClient && (
                  <Image 
                    className="slide-shape img-seven wow fadeInRight animated" 
                    data-delay="1.5s" 
                    src="/assets/img/icon/dot-plan-1.svg" 
                    alt="Chose-img" 
                    width={100} 
                    height={100} 
                  />
                )}
                <Image className="slide-shape img-eight" src="/assets/img/slider/earth-bg.svg" alt="Earth Background" width={500} height={500} />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="slider__content pt-15">
                <h1 className="main-title mb-40 wow fadeInUp2 animated" data-wow-delay='.1s'>
                  Empowering talent, celebrating heritage <span className="vec-shape">delivering excellence.</span>
                </h1>
                <h5 className="mb-35 wow fadeInUp2 animated" data-wow-delay='.2s'>
                  Our mission is to empower hidden talents, celebrate cultural heritage, and provide top-quality services in the fashion and events industry.
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