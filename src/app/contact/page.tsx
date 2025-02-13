"use client";

import React from 'react';
import Footer from '../components/footer/page';
import Navbar from '../components/Header/page';
import Image from 'next/image';

const ContactUsPage: React.FC = () => {
  return (
    <main>
      {/* Page Title Area Start */}
      <Navbar />
      <section
        className="page-title-area d-flex align-items-end"
        style={{
          backgroundImage: 'url(assets/img/page-title-bg/01.jpg)',
          paddingTop: '150px', // Adjust padding to push the page title below the navbar
        }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12">
              <div className="page-title-wrapper mb-50">
                <h1 className="page-title mb-25">Contact Us</h1>
                <div className="breadcrumb-list">
                  <ul className="breadcrumb">
                    <li><a href="index.html">Home -</a></li>
                    <li><button style={{ background: 'none', border: 'none', color: '#007bff', padding: 0, fontSize: '16px', cursor: 'pointer' }}>Contact</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Title Area End */}

      {/* Contact Us Area Start */}
      <section className="contact-us-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="contact-img mb-30">
                <Image className="img-fluid" src="/assets/img/contact/06.PNG" alt="Contact Us" width={600} height={400} />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="contact-wrapper pl-75 mb-30">
                <div className="section-title mb-30">
                  <h2>Get In Touch With Us</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.</p>
                </div>
                <div className="single-contact-box mb-30">
                  <div className="contact__iocn">
                    <Image src="/assets/img/icon/material-location-on.svg" alt="Location" width={30} height={30} />
                  </div>
                  <div className="contact__text">
                    <h5>27/2b, street road -04, New York, USA</h5>
                  </div>
                </div>
                <div className="single-contact-box cb-2 mb-30">
                  <div className="contact__iocn">
                    <Image src="/assets/img/icon/phone-alt.svg" alt="Phone" width={30} height={30} />
                  </div>
                  <div className="contact__text">
                    <h5>+000 (125) 3654 34</h5>
                    <h5>+000 (125) 3654 34</h5>
                  </div>
                </div>
                <div className="single-contact-box cb-3 mb-30">
                  <div className="contact__iocn">
                    <Image src="/assets/img/icon/feather-mail.svg" alt="Email" width={30} height={30} />
                  </div>
                  <div className="contact__text">
                    <h5>info@example.com</h5>
                    <h5>info2@example.com</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us Area End */}

      {/* Contact Form Area Start */}
      <section className="contact-form-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-form-wrapper mb-30">
                <h2 className="mb-45">Contact Us</h2>
                <form action="#" className="row gx-3 comments-form contact-form">
                  <div className="col-lg-6 col-md-6 mb-30">
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div className="col-lg-6 col-md-6 mb-30">
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="col-lg-6 col-md-6 mb-30">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div className="col-lg-6 col-md-6 mb-30">
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="col-lg-12 mb-30">
                    <input type="text" placeholder="Email Name" />
                  </div>
                  <div className="col-lg-12 mb-30">
                    <textarea name="commnent" id="commnent" cols={30} rows={10} placeholder="Write a Message"></textarea>
                  </div>
                </form>
                <button className="theme_btn message_btn mt-20">Send Message</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-img contact-img-02 mb-30">
                <Image className="img-fluid" src="/assets/img/contact/02.jpg" alt="" width={600} height={400} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area End */}

      {/* Contact Map Area Start */}
      <section className="contact-map-area">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            <div className="col-lg-12">
              <div className="conatct-map">
                <a
                  href="https://www.google.com/maps?q=0.6612308634048488,30.28869397371837"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View location on Google Maps"
                  style={{
                    display: 'inline-block',
                    textAlign: 'center',
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#333',
                    color: '#fff',
                    borderRadius: '5px',
                    marginTop: '20px',
                    textDecoration: 'none',
                  }}
                >
                  View Location on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Map Area End */}

      {/* Subscribe Area Start */}
      <section className="subscribe-area footer-bg border-bot pt-145 pb-50 pt-md-90 pt-xs-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="subscribe-wrapper text-center mb-30">
                <h2>Subscribe our Newsletter & Get every update.</h2>
                <div className="subscribe-form-box pos-rel">
                  <form className="subscribe-form">
                    <input type="text" placeholder="Write Your E-mail" />
                  </form>
                  <button className="sub_btn">Subscribe Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Subscribe Area End */}
      <Footer />
    </main>
  );
};

export default ContactUsPage;
