import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";

// const App = () => <PortfolioContainer />;
function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          {/* <Home /> */}
          <PortfolioContainer />
        </div>
        <Footer />
      </div>
  )
}

export default App;
