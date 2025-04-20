import React, { useEffect, useState }from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then(data => setStocks(data));
  }, []);

  function handleBuy(stock) {
    if (!portfolio.find(s => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  }

  function handleSell(stock) {
    setPortfolio(portfolio.filter(s => s.id !== stock.id));
  }


 
  
  
  return (
    <div>
      <Header />
      <MainContainer
        stocks={stocks} 
        portfolio={portfolio} 
        onBuy={handleBuy} 
        onSell={handleSell} 
         />
    </div>
  );
}

export default App;
