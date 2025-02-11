"use client";

import React from "react";
import Subscribe from "../components/subscribe/subscribe";
import Navbar from "../components/Header/page";
import Footer from "../components/footer/page";

// Define the structure for the plan object
interface Plan {
  title: string;
  subtitle: string;
  monthlyPrice: string;
  yearlyPrice: string;
  oldPrice: string;
  features: string[];
  image: string;
  active: boolean;
}

const Price: React.FC = () => {
  const plans: Plan[] = [
    {
      title: "Basic",
      subtitle: "Best Choice for individuals",
      monthlyPrice: "$399",
      yearlyPrice: "$3990",
      oldPrice: "$699",
      features: [
        "All Courses",
        "For One Person Uses Only",
        "25+ Article Free",
        "No Social Media Activity",
        "No Lifetime Access",
        "Emergency Support Only",
      ],
      image: "assets/img/icon/writing.svg",
      active: false,
    },
    {
      title: "Standard",
      subtitle: "Best Choice for Yearly Access",
      monthlyPrice: "$599",
      yearlyPrice: "$5990",
      oldPrice: "$899",
      features: [
        "All Courses",
        "For One Person Uses Only",
        "25+ Article Free",
        "No Social Media Activity",
        "No Lifetime Access",
        "Emergency Support Only",
      ],
      image: "assets/img/icon/test.svg",
      active: true,
    },
    {
      title: "Unlimited",
      subtitle: "Billed once. Get lifetime access.",
      monthlyPrice: "$799",
      yearlyPrice: "$7990",
      oldPrice: "$1299",
      features: [
        "All Courses",
        "For One Person Uses Only",
        "25+ Article Free",
        "No Social Media Activity",
        "No Lifetime Access",
        "Emergency Support Only",
      ],
      image: "assets/img/icon/lifetime.svg",
      active: false,
    },
  ];

  return (
    <main>
        <Navbar />
      {/* Plan Area */}
      <section className="plan-area pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <div className="section-title text-center mb-55">
                <h5 className="bottom-line mb-25">Pricing Table</h5>
                <h2>Explore our Popular Courses?</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="plan-tab mb-60">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link theme_btn active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Monthly
                    </button>
                    <button
                      className="nav-link theme_btn"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Yearly
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="tab-content" id="nav-tabContent">
            {/* Monthly Plans */}
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row">
                {plans.map((plan, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className={`plan text-center mb-30 ${plan.active ? "plan-2a" : ""}`}>
                      <div className="pr__header mb-30">
                        <h2>{plan.title}</h2>
                        <h5>{plan.subtitle}</h5>
                        <img src={plan.image} alt={plan.title} className="pr-icon" />
                      </div>
                      <div className="pr__body">
                        <h2 className="mb-30">
                          <span className="old-price">{plan.oldPrice}</span>{" "}
                          <b>
                            <sup>$</sup>
                            {plan.monthlyPrice}
                            <span className="new-price">/ Month</span>
                          </b>
                        </h2>
                        <ul className="price-list">
                          {plan.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="pr__footer mt-50">
                        <button
                          className={`theme_btn price_btn ${plan.active ? "active" : ""}`}
                          onClick={() => alert(`Buying ${plan.title}`)} // Add your purchase logic here
                          aria-label={`Buy ${plan.title} Plan`}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Yearly Plans */}
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="row">
                {plans.map((plan, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className={`plan text-center mb-30 ${plan.active ? "plan-2a" : ""}`}>
                      <div className="pr__header mb-30">
                        <h2>{plan.title}</h2>
                        <h5>{plan.subtitle}</h5>
                        <img src={plan.image} alt={plan.title} className="pr-icon" />
                      </div>
                      <div className="pr__body">
                        <h2 className="mb-30">
                          <span className="old-price">{plan.oldPrice}</span>{" "}
                          <b>
                            <sup>$</sup>
                            {plan.yearlyPrice}
                            <span className="new-price">/ Year</span>
                          </b>
                        </h2>
                        <ul className="price-list">
                          {plan.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="pr__footer mt-50">
                        <button
                          className={`theme_btn price_btn ${plan.active ? "active" : ""}`}
                          onClick={() => alert(`Buying ${plan.title}`)} // Add your purchase logic here
                          aria-label={`Buy ${plan.title} Plan`}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Plan Area End */}
      <Subscribe />
      <Footer />
    </main>
  );
};

export default Price;