import logo from "./logo.svg";
import AsideFilter from "./components/AsideFilter";
import Tabs from "./components/Tabs";
import Ticket from "./components/Ticket";

function App() {
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
          <Tabs />
          <div className="ticket-list">
            <Ticket />
            <Ticket />
            <Ticket />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
