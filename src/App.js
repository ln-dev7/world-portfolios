import Card from "./components/card";
import NavBar from "./components/navbar";
import Section from "./components/section";
import "./styles/App.scss";
import data from "./data/data";
import tags from "./data/tags";
import Footer from "./components/footer";
// import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Section />
      <main className="main">
        <div className="main-container">
          <aside className="main-container-aside">
          </aside>
          <div className="main-container-body">
            {data.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                link={item.link}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
