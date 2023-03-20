import React from "react";

function Search({ pSearch, setPSearch }) {
  function changeHandler(e) {
    setPSearch(e.target.value)
    console.log(pSearch)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          onChange={changeHandler}
          value={pSearch}
          className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
