import React from "react";

const Hero = () => {
  return (
    <main>
      <section id="hero" className="noisy">
        <h1 className="title">FLAMINGO</h1>
        <img src="/images/left-leaf.png" alt="left-leaf" className="left-leaf"   />
         <img src="/images/right-leaf.png" alt="right-leaf" className="right-leaf" />
      </section>


          <div className="body">
            <div className="content">
                <div className="space-y-5 hidden md:block">
                    <p>Tasty. Classic. Memorable</p>
                    <p className="subtitle">
                        Sip the Spirit <br/> of Summer.
                    </p>
                </div>
            </div>
          </div>

    </main>
  );
};

export default Hero;
