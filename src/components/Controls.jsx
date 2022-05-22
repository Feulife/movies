import React, { useState, useEffect } from "react";

export function Controls(props) {
  const { onSearch } = props;
  const [search, setSearch] = useState("");
  const [types, setType] = useState("all");

  useEffect(() => {
    onSearch(search, types || {});
    console.log(types);
    console.log(search);
  }, [search, types]);

  return (
    <div className="row">
      <div className="input-field">
        <input 
          className="validate"
            placeholder="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
      </div>
      <div>
        <label>
          <input
          className="with-gap"
          name="type"
          type='radio' 
          value={'all'}
          onChange={(e) => {
            setType(e.target.value);
          }}
          />
          <span>
            All
          </span>
        </label>
        <label>
        <input
          className="with-gap"
          name="type"
          type='radio'
          value={'movie'}
          onChange={(e) => {
            setType(e.target.value);
          }}
          />
          <span>
            Movies
          </span>
        </label>
        <label>
        <input
          className="with-gap"
          name="type"
          type='radio'
          value={'series'}          
          onChange={(e) => {
            setType(e.target.value);
          }}
          />
          <span>
          Series
          </span>
        </label>
       </div>
    </div>
  );
}
