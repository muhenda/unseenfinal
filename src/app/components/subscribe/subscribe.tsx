"use client";
import React, { useState } from 'react';

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState<string>(''); 

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Subscribed with: ${email}`);
  };

  return (
    <section className="subscribe-area border-bot pt-145 pb-50 pt-md-90 pt-xs-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="subscribe-wrapper text-center mb-30">
              <h2>Subscribe our Newsletter & Get every update.</h2>
              <div className="subscribe-form-box pos-rel">
                <form className="subscribe-form" onSubmit={handleSubscribe}>
                  <> 
                    <input 
                      type="email" 
                      placeholder="Write Your E-mail" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required
                    /> 
                    <button className="sub_btn" type="submit">Subscribe Now</button>
                  </>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;