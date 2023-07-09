import React from "react";
import Header from "./Header";
import Emojiblock from "./emojiblock";
import emojilist from "../emojilist";

function createBlock(item) {
  return (
    <Emojiblock 
      key={item.id}
      emoji={item.emoji}
      name={item.name}
      description={item.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Header />

      <dl className="dictionary">
        {emojilist.map(createBlock)}
      </dl>
    </div>
  );
}

export default App;
