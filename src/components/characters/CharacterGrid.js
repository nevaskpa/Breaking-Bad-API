import React from "react";
import "../../App.css";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

function CharacterGrid({ isLoading, items }) {
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="cards">
          {items.map((item) => (
            <CharacterItem key={item.char_id} item={item} />
          ))}
        </section>
      )}
    </div>
  );
}

export default CharacterGrid;
