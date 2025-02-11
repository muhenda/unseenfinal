"use client";
import React from 'react';
import Image from 'next/image';  // Import the Image component

const Looking: React.FC = () => {
  return (
    <section className="what-looking-for pos-rel">
      <div className="what-blur-shape-one"></div>
      <div className="what-blur-shape-two"></div>
      <div className="what-look-bg gradient-bg pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55">
                <h5 className="bottom-line mb-25">Reservations</h5>
                <h2>What are you Looking For?</h2>
              </div>
            </div>
          </div>
          <div className="row mb-85">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="what-box text-center mb-35 wow fadeInUp2 animated" data-wow-delay=".3s">
                <div className="what-box__icon mb-30">
                  <Image
                    src="assets/img/icon/phone-operator.svg"
                    alt="Phone Operator"
                    width={100}  // Specify the width
                    height={100} // Specify the height
                  />
                </div>
                <h3>Do you want to book?</h3>
                <p>
                  View our pricing here.
                </p>
                <a href="/pricing" className="theme_btn border_btn">Book Now</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="what-box text-center mb-35 wow fadeInUp2 animated" data-wow-delay=".3s">
                <div className="what-box__icon mb-30">
                  <Image
                    src="assets/img/icon/graduate.svg"
                    alt="Graduate"
                    width={100}
                    height={100}
                  />
                </div>
                <h3>Do you want to learn here?</h3>
                <p>
                  Apply here
                </p>
                <a href="/apply" className="theme_btn border_btn active">Apply Now</a>
              </div>
            </div>
          </div>
          <div className="categoris-container">
            <div className="col-xl-12">
              <div className="section-title text-center mb-55">
                <h5 className="bottom-line mb-25">Services</h5>
                <h2>Explore our services</h2>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5">
              <div className="col">
                <div className="single-category text-center mb-30 wow fadeInUp2 animated" data-wow-delay=".1s">
                  <Image
                    className="mb-30"
                    src="assets/img/category-icon/atom.svg"
                    alt="Ushering"
                    width={80}
                    height={80}
                  />
                  <h4 className="sub-title mb-10">Ushering</h4>
                  <p>Providing professional ushers for corporate functions and events.</p>
                </div>
              </div>
              <div className="col">
                <div className="single-category text-center mb-30 wow fadeInUp2 animated" data-wow-delay=".2s">
                  <Image
                    className="mb-30"
                    src="assets/img/category-icon/web-development.svg"
                    alt="Model Training"
                    width={80}
                    height={80}
                  />
                  <h4 className="sub-title mb-10">Model Training</h4>
                  <p>Comprehensive training programs for aspiring models.</p>
                </div>
              </div>
              <div className="col">
                <div className="single-category text-center mb-30 wow fadeInUp2 animated" data-wow-delay=".3s">
                  <Image
                    className="mb-30"
                    src="assets/img/category-icon/atom.svg"
                    alt="Event Management"
                    width={80}
                    height={80}
                  />
                  <h4 className="sub-title mb-10">Event Management</h4>
                  <p>Organizing and managing both fashion and other types of events.</p>
                </div>
              </div>
              <div className="col">
                <div className="single-category text-center mb-30 wow fadeInUp2 animated" data-wow-delay=".4s">
                  <Image
                    className="mb-30"
                    src="assets/img/category-icon/career-path.svg"
                    alt="Model Management"
                    width={80}
                    height={80}
                  />
                  <h4 className="sub-title mb-10">Model Management</h4>
                  <p>Managing and promoting models to help them succeed in the fashion industry.</p>
                </div>
              </div>
              <div className="col">
                <div className="single-category text-center mb-30 wow fadeInUp2 animated" data-wow-delay=".5s">
                  <Image
                    className="mb-30"
                    src="assets/img/category-icon/graphic-tool.svg"
                    alt="Arts & Design"
                    width={80}
                    height={80}
                  />
                  <h4 className="sub-title mb-10"><a href="course-details.html">Arts & Design</a></h4>
                  <p>136+ Courses Available</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12 mt-20 text-center mb-20 wow fadeInUp2 animated" data-wow-delay=".6s">
                <a href="courses.html" className="theme_btn">All Categories</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Looking;
