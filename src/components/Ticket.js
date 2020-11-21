import React from "react";
import "./Ticket.css";
import companyLogo from "../images/company-logo.svg";

export default function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">{ticket.price} P</div>
        <div className="ticket__company">
          <img
            src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
            srcSet={`https://pics.avs.io/198/72/${ticket.carrier}.png 2x`}
            alt="Company Logo"
          />
        </div>
      </div>
      <div className="ticket__body">
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
  );
}
