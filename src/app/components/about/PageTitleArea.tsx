"use client";

import React from 'react';
import Link from 'next/link';

const PageTitleArea: React.FC = () => {
  return (
    <section 
      className="page-title-area d-flex align-items-end" 
      style={{ 
        backgroundImage: 'url(/assets/img/page-title-bg/01.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        height: '50vh',
      }}
    >
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-12">
            <div className="page-title-wrapper mb-50">
              <h1 className="page-title mb-25">About Us</h1>
              <div className="breadcrumb-list">
                <ul className="breadcrumb">
                  <li>
                    <Link href="/" aria-label="Go to Home Page">Home -</Link>
                  </li>
                  <li>
                    <Link href="/about-us" aria-label="Go to About Us Page">About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitleArea;
