import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import AsideFilter from "./AsideFilter";
import Tabs from "./Tabs";
import Ticket from "./Ticket";

function App() {
  const [tabSort, setTabSort] = useState("cheap");
  const [searchId, setSearchId] = useState(null);
  const [tickets, setTickets] = useState([]);

  const onSortTab = (sort) => {
    setTabSort(sort);
  };

  const sortByPrice = (a, b) => a.price - b.price;

  useEffect(() => {
    const fetchSearchId = async () => {
      const res = await fetch(`https://front-test.beta.aviasales.ru/search`);
      const data = await res.json();
      setSearchId(data.searchId);
    };
    fetchSearchId();
  }, []);

  useEffect(() => {
    if (!searchId) return;

    const fetchTicketsChunk = async () => {
      const res = await fetch(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
      );
      const { tickets } = await res.json();
      tickets.sort(sortByPrice);
      setTickets(tickets);
    };

    fetchTicketsChunk();
  }, [searchId]);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="App logotype" />
        </div>
      </header>
      <div className="container">
        <AsideFilter />
        <main>
          <Tabs active={tabSort} onSortTab={onSortTab} />
          <div className="ticket-list">
            {tickets.length > 0 ? (
              tickets.map((ticket, i) => <Ticket key={i} ticket={ticket} />)
            ) : (
              <div>loading...</div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
