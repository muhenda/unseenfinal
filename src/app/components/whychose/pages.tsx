"use client";

import React from "react";
import NavLink from "next/link";
import Image from "next/image";

const Whychoose: React.FC = () => {
  return (
    <div className="why-chose-section-wrapper gradient-bg mr-100 ml-100">
      {/* Why Choose Us Section */}
      <section className="why-chose-us">
        <div className="why-chose-us-bg pt-150 pb-175 pt-md-95 pb-md-90 pt-xs-95 pb-xs-90">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Side - Images */}
              <div className="col-xl-7 col-lg-7">
                <div className="chose-img-wrapper mb-50 pos-rel">
                  <div className="coures-member">
                    <h5>Satisfied Customers</h5>
                    {[1, 2, 3, 4].map((num) => (
                      <Image
                        key={num}
                        className={`choses chose_0${num}`}
                        src={`/assets/img/chose/0${num}.png`}
                        alt={`Satisfied Customer ${num}`}
                        width={80}
                        height={80}
                      />
                    ))}
                    <span>25k+</span>
                  </div>

                  {/* Feature Tags */}
                  <div className="feature tag_01">
                    <span>
                      <Image
                        src="/assets/img/icon/shield-check.svg"
                        alt="Shield Icon"
                        width={24}
                        height={24}
                      />
                    </span>{" "}
                    Ushering
                  </div>
                  <div className="feature tag_02">
                    <span>
                      <Image
                        src="/assets/img/icon/catalog.svg"
                        alt="Catalog Icon"
                        width={24}
                        height={24}
                      />
                    </span>{" "}
                    Model Training
                  </div>
                  <div className="feature tag_03">
                    <span>
                      <i className="fal fa-check"></i>
                    </span>{" "}
                    Event Management
                  </div>

                  {/* Video Section */}
                  <div className="video-wrapper">
                    <a
                      href="https://www.youtube.com/watch?v=6YlZHR4b-WU"
                      className="popup-video"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Watch video about Unseen Model Agency"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>

                  {/* Background Image */}
                  <div className="img-bg pos-rel">
                    <Image
                      className="chose_05 pl-70 pl-lg-0 pl-md-0 pl-xs-0"
                      src="/assets/img/chose/05.png"
                      alt="Background Chose Image"
                      width={400}
                      height={400}
                    />
                  </div>

                  <Image
                    className="chose chose_06"
                    src="/assets/img/shape/dot-box3.svg"
                    alt="Decorative dots"
                    width={150}
                    height={150}
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="col-xl-5 col-lg-5">
                <div className="chose-wrapper pl-25 pl-lg-0 pl-md-0 pl-xs-0">
                  <div
                    className="section-title mb-30 wow fadeInUp2 animated"
                    data-wow-delay=".1s"
                  >
                    <h5 className="bottom-line mb-25">Explore Zoomy</h5>
                    <h2 className="mb-25">Why Choose Unseen&rsquo;s Services?</h2>
                    <p>
                      Unseen Model Agency empowers hidden talents, celebrates
                      cultural heritage, and delivers excellence in modeling,
                      fashion, and events, making it a reliable partner for
                      exceptional growth and unforgettable experiences.
                    </p>
                  </div>

                  <ul
                    className="text-list mb-40 wow fadeInUp2 animated"
                    data-wow-delay=".2s"
                  >
                    <li>
                      Organized prestigious events like Mr. and Miss Heritage
                      Tooro, celebrating youth talent and culture.
                    </li>
                    <li>
                      Hosted charity-driven Mother&rsquo;s Day Glamour, supporting
                      maternal health and young mothers in need.
                    </li>
                    <li>
                      Delivered professional ushering and event planning
                      services for corporate and community engagements with
                      excellence.
                    </li>
                  </ul>

                  <NavLink
                    href="/about"
                    className="theme_btn wow fadeInUp2 animated"
                    data-wow-delay=".3s"
                  >
                    More Details
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Why Choose Us Section */}
    </div>
  );
};

export default Whychoose;
