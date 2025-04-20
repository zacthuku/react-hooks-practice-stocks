import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, portfolio, onBuy, onSell }) {
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onBuy={onBuy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSell={onSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
