import React, { useState } from "react";

function Search({ getQuery }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    getQuery(e.target.value);
  };
  return (
    <section>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          autoFocus
          value={text}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </section>
  );
}

export default Search;
