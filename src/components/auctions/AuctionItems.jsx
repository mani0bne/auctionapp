import { useState } from "react";

const AuctionItem = ({ item }) => {
  const [bid, setBid] = useState(item.currentBid);

  const handleBid = () => {
    setBid(bid + 100);
  };

  return (
    <div className="auction-item">
      <h2>{item.title}</h2>
      <p>Current Bid: ${bid}</p>
      <button onClick={handleBid}>Place Bid (+$100)</button>
    </div>
  );
};

export default AuctionItem;
