'use client';

import React from 'react';
import Image from 'next/image';

const AboutUsArea: React.FC = () => {
  return (
    <section className="about-us-area pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
      <div className="container">
        <div className="row align-items-center mb-120">
          <div className="col-lg-7">
            <div className="about__img__box mb-60">
              <Image
                className="about-main-thumb pl-110"
                src="/assets/img/slider/01.png"
                alt="about-img"
                width={600}
                height={400}
              />
              
             
              
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-wrapper">
              <div className="section-title section-title-4 mb-60">
                <h5 className="bottom-line mb-25">About Us</h5>
                <h2 className="mb-20">Unseen Model Agency: Empowering Talent and Celebrating Cultural Heritage</h2>
                <p className="mb-20">Unseen Model Agency, founded in 2022 in Fort Portal, Uganda, is a leading platform for nurturing talent and creativity.</p>
                <p>We specialize in modeling, fashion, and event management, with a focus on empowering youth, preserving cultural heritage, and supporting communities.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pl-75 pr-75 pr-lg-0 pr-md-0 pr-xs-0 pl-lg-0 pl-md-0 pl-xs-0">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counters text-center mb-30">
              <h2><span className="counter">100</span>+</h2>
              <h5>Ushers</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counters count-1 text-center mb-30">
              <h2><span className="counter">1000</span>+</h2>
              <h5>Done Events</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counters count-2 text-center mb-30">
              <h2><span className="counter">794</span>+</h2>
              <h5>Clients</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counters count-3 text-center mb-30">
              <h2><span className="counter">35</span>+</h2>
              <h5>Special Awards Winning</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsArea;
