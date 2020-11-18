import React from "react";
import "./Ticket.css";

export default function Ticket() {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">13 400</div>
        <div className="ticket__company"></div>
      </div>
      <div className="ticket__body">
        <div className="ticket__flight">
          <div className="ticket__flight-item">
            <div className="ticket__flight-label">MOW – HKT</div>
            <div className="ticket__flight-value">10:45 – 08:00</div>
          </div>
          <div className="ticket__flight-item">
            <div className="ticket__flight-label">MOW – HKT</div>
            <div className="ticket__flight-value">10:45 – 08:00</div>
          </div>
          <div className="ticket__flight-item">
            <div className="ticket__flight-label">MOW – HKT</div>
            <div className="ticket__flight-value">10:45 – 08:00</div>
          </div>
        </div>
      </div>
    </div>
  );
}