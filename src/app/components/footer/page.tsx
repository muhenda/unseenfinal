'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Initialize with the current year

  useEffect(() => {
    // Update the year after mount (optional, if you want to handle timezone differences)
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer-area pt-70 pb-40">
      <div className="container">
        <div className="row mb-15">
          {/* Footer Column 1 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer__widget mb-30">
              <div className="footer-log mb-20">
                <Link href="/">
                  <Image
                    src="/assets/img/logo/header_logo_one.svg"
                    alt="Logo"
                    width={200}
                    height={50}
                  />
                </Link>
              </div>
              <p>
                We are dedicated to uncovering and nurturing the hidden gems of our community, ensuring they shine brightly on both national and international stages.
              </p>
              <div className="social-media footer__social mt-30">
                <Link href="https://www.instagram.com/husse_in6923/profilecard/?igsh=MTh2cXpkN3ViOGRmYw==" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </Link>
                <Link href="https://wa.me/256705973257" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </Link>
                <Link href="https://www.tiktok.com/@unseenmodelagency?_t=8qqC4pkF0GT&_r=1" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTiktok} size="2x" />
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Column 2 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer__widget mb-30">
              <h6 className="widget-title mb-35">Contact us</h6>
              <ul className="fot-list">
                <li><a href="mailto:unseenmodelingagency2022@gmail.com">Email</a></li>
                <li><a href="tel:+256705973257">+256 705973257</a></li>
                <li><Link href="/contact">Contacts</Link></li>
              </ul>
            </div>
          </div>

          {/* Footer Column 3 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer__widget mb-25">
              <h6 className="widget-title mb-35">Quick Links</h6>
              <ul className="fot-list">
                <li><Link href="/about">About US</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/price">Our Pricing</Link></li>
              </ul>
            </div>
          </div>

          {/* Footer Column 4 */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="footer__widget mb-30">
              <h6 className="widget-title mb-35">Features</h6>
              <ul className="fot-list mb-30">
                <li><Link href="/">Home Page</Link></li>
                <li><Link href="/faq">Faqs</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right-area border-bot pt-40">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="copyright text-center">
                <h5>
                  Copyright @ {currentYear} <a href="#">Unseen Model Agency</a>. All Rights Reserved
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;