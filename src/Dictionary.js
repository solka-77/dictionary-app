import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./App.css";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <br />
      <label>What word do you want to look up?</label>
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          class="form-control search-input"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
