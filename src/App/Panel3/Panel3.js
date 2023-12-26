import React, { useEffect } from 'react';
import './Panel3.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Panel3() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="panel3">
      <div data-aos="fade-left">SWEETEN YOUR HEART</div>
      <div data-aos="fade-right">NOURISH YOUR CRAVINGS</div>
    </div>
  );
}

export default Panel3;