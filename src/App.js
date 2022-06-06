import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post";
import "./components/search.css";

const App = () => {
  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setCoins(data);
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Post
            key={coin.id}
            price={coin.current_price}
            volume={coin.total_volume}
            pricechange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
            symbol={coin.symbol}
            image={coin.image}
            name={coin.name}
          />
        );
      })}
    </>
  );
};

export default App;
