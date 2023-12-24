import React from 'react';
import './Ticker.css';

function Ticker() {
  return (
    <>
      <div className="ticker-tape">
        <div className="ticker">
          <div className="ticker-text">
            FREE SHIPPING FOR ORDERS ABOVE $50
          </div>
          <div className="ticker-text">
            {/* NEW DEALS EVERYWEEK */}
          </div>
          <div className="ticker-text">
            {/* MERCH DROP IN 2 DAYS */}
          </div>
          <div className="ticker-text">
            {/* CHRISTMAS SALE 20% OFF */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Ticker;