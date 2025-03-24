import { useState } from "react";
import AuctionItem from "../components/AuctionItem";

const MainPage = () => {
  const [auctions, setAuctions] = useState([
    { id: 1, title: "Antique Vase", currentBid: 500 },
    { id: 2, title: "Vintage Watch", currentBid: 1200 },
    { id: 3, title: "Painting by Picasso", currentBid: 5000 },
  ]);

  return (
    <div className="main-container">
      <h1>Live Auctions</h1>
      <div className="auction-list">
        {auctions.map((item) => (
          <AuctionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
