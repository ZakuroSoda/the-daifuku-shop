import React, { useEffect } from 'react';

import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Panel1 from './Panel1/Panel1';
import Panel2 from './Panel2/Panel2';
import Panel3 from './Panel3/Panel3';
import Ticker from './Ticker/Ticker';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Panel1 />
        <Panel2 />
        <Panel3 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
