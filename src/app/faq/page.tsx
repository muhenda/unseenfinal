"use client";

import React from "react";
import Navbar from "../components/Header/page";
import Footer from "../components/footer/page";

// Define the structure of the FAQ items using an interface
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  // Define the FAQ items in a constant
  const faqItems: FAQItem[] = [
    {
      id: "One",
      question: "What is the best definition of education?",
      answer:
        "An attack of the ague sent him home, and on recovery, having resolved to attend a high school and fit himself to become a teacher, he passed the next four years in a hard struggle with poverty and in an earnest effort to secure an education, studying for a short time in the Geauga Seminary at Chester, Ohio.",
    },
    {
      id: "Two",
      question: "What is the true meaning of education?",
      answer:
        "An attack of the ague sent him home, and on recovery, having resolved to attend a high school and fit himself to become a teacher, he passed the next four years in a hard struggle with poverty and in an earnest effort to secure an education, studying for a short time in the Geauga Seminary at Chester, Ohio.",
    },
    {
      id: "Three",
      question: "Why is education important?",
      answer:
        "An attack of the ague sent him home, and on recovery, having resolved to attend a high school and fit himself to become a teacher, he passed the next four years in a hard struggle with poverty and in an earnest effort to secure an education, studying for a short time in the Geauga Seminary at Chester, Ohio.",
    },
    {
      id: "Four",
      question: "What are 3 types of education?",
      answer:
        "An attack of the ague sent him home, and on recovery, having resolved to attend a high school and fit himself to become a teacher, he passed the next four years in a hard struggle with poverty and in an earnest effort to secure an education, studying for a short time in the Geauga Seminary at Chester, Ohio.",
    },
    {
      id: "Five",
      question: "Who is the father of education?",
      answer:
        "An attack of the ague sent him home, and on recovery, having resolved to attend a high school and fit himself to become a teacher, he passed the next four years in a hard struggle with poverty and in an earnest effort to secure an education, studying for a short time in the Geauga Seminary at Chester, Ohio.",
    },
  ];

  return (
    <main>
        <Navbar />
      {/* Page Title Area Start */}
      <section
        className="page-title-area d-flex align-items-end"
        style={{ backgroundImage: "url(assets/img/page-title-bg/01.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12">
              <div className="page-title-wrapper mb-50">
                <h1 className="page-title mb-25">FAQ</h1>
                <div className="breadcrumb-list">
                  <ul className="breadcrumb">
                    <li>
                      <button onClick={() => window.location.href = "index.html"}>Home - Pages -</button>
                    </li>
                    <li>
                      <button onClick={() => {}} aria-label="Current Page - FAQ">FAQ</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Title Area End */}

      {/* FAQ Area Start */}
      <section className="faq-area pt-150 pb-120 pt-xs-95 pb-xs-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="faq-que-list mb-30">
                <div className="section-title text-center mb-45">
                  <h2 className="mb-25">Frequently Asked Question</h2>
                </div>
                <div className="accordion accordion-two" id="accoedion-ex-two">
                  {/* Accordion Items */}
                  {faqItems.map((item, index) => (
                    <div className="accordion-item mb-30" key={item.id}>
                      <h2 className="accordion-header" id={`heading${item.id}`}>
                        <button
                          className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.id}`}
                          aria-expanded={index === 0}
                          aria-controls={`collapse${item.id}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#accoedion-ex-two"
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="faq-btn text-center mt-50"></div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Area End */}

      {/* Subscribe Area Start */}
      <section className="subscribe-area footer-bg border-bot pt-145 pb-120 pt-xs-90 pb-xs-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="subscribe-wrapper text-center mb-30">
                <h2>Subscribe our Newsletter & Get every updates.</h2>
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

export default FAQ;