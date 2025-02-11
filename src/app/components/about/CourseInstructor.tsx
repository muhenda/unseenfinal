'use client';

import React from 'react';
import Image from 'next/image';

const CoursesInstructor: React.FC = () => {
  return (
    <section className="feature-course pt-150 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50">
              <h5 className="bottom-line mb-25">Featured Courses</h5>
              <h2>Explore our Popular Courses</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-12 text-center">
            <div className="portfolio-menu mb-30">
              <button className="gf_btn active" data-filter="*">All</button>
              <button className="gf_btn" data-filter=".cat1">Career</button>
              <button className="gf_btn" data-filter=".cat2">Development</button>
              <button className="gf_btn" data-filter=".cat3">Business</button>
              <button className="gf_btn" data-filter=".cat4">Science</button>
              <button className="gf_btn" data-filter=".cat5">Design</button>
            </div>
          </div>
        </div>
        <div className="grid row">
          <div className="col-lg-4 col-md-6 grid-item cat2 cat3">
            <div className="z-gallery mb-30">
              <div className="z-gallery__thumb mb-20">
                <a href="course-details.html">
                  <Image 
                    className="img-fluid" 
                    src="/assets/img/course/01.png" 
                    alt="Course Image" 
                    width={600} 
                    height={400} 
                  />
                </a>
                <div className="feedback-tag">4.8(256)</div>
                <div className="heart-icon">
                  <i className="fas fa-heart"></i>
                </div>
              </div>
              <div className="z-gallery__content">
                <div className="course__tag mb-15">
                  <span>Science</span>
                  <span>Lab</span>
                  <a className="f-right" href="instructor-details.html">
                    <Image 
                      src="/assets/img/course/in1.png" 
                      alt="Instructor Image" 
                      width={40} 
                      height={40} 
                    />
                  </a>
                </div>
                <h4 className="sub-title mb-20">
                  <a href="course-details.html">
                    Take Your Career to the Next Level Future
                  </a>
                </h4>
                <div className="course__meta">
                  <span>
                    <Image
                      className="icon"
                      src="/assets/img/icon/time.svg"
                      alt="course-meta"
                      width={16}
                      height={16}
                    />{" "}
                    12 Class
                  </span>
                  <span>
                    <Image
                      className="icon"
                      src="/assets/img/icon/bar-chart.svg"
                      alt="course-meta"
                      width={16}
                      height={16}
                    />{" "}
                    Higher
                  </span>
                  <span>
                    <Image
                      className="icon"
                      src="/assets/img/icon/user.svg"
                      alt="course-meta"
                      width={16}
                      height={16}
                    />{" "}
                    6395+
                  </span>
                  <span>$260</span>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar blocks for other courses */}
        </div>
        <div className="row">
          <div
            className="col-lg-12 mt-20 text-center mb-20 wow fadeInUp2 animated"
            data-wow-delay=".3s"
          >
            {/* Add pagination or more content here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesInstructor;
