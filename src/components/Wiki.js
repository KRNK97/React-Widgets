import React, { useState, useEffect } from "react";
import axios from "axios";

const Wiki = () => {
  const [term, setTerm] = useState("react js");
  const [results, setResults] = useState([]);

  const changeHandler = (e) => {
    setTerm(e.target.value);
  };

  const resultsList = results.map((r) => {
    return (
      <div className="list-group-item shadow-sm my-1 rounded" key={r.pageid}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="title font-weight-bold h3">{r.title}</div>
          <button className="btn btn-outline-success">
            <a
              href={`https://en.wikipedia.org?curid=${r.pageid}`}
              className="text-decoration-none text-reset"
            >
              Visit
            </a>
          </button>
        </div>
        <div className="content mt-2">
          {r.snippet.replace(/(<([^>]+)>)/gi, "")}
        </div>
      </div>
    );
  });

  useEffect(() => {
    // only make request if term isnt null

    // we will wait for some time to let the user finish typing so that we don't call api with each key press
    const timerId = setTimeout(() => {
      if (term) {
        axios
          .get("https://en.wikipedia.org/w/api.php", {
            params: {
              action: "query",
              list: "search",
              origin: "*",
              format: "json",
              srsearch: term,
            },
          })
          .then((res) => {
            console.log(res);
            setResults(res.data.query.search);
          })
          .catch((e) => {
            console.log("error", e);
          });

        console.log("searching . . ");
      }
    }, 750);

    // we can return a function from useEffect which will run as a clean up function
    // it will run just before the component re-renders
    // so we can use this function to run some code just before re-rendering of the component
    // so each time we enter new character, we will reset the timer and wait for another 750ms to call the api
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        action=""
        className="border p-4 rounded shadow-sm"
        onSubmit={submitHandler}
      >
        <label htmlFor="search" className="display-4 text-success">
          Search Wikipedia
        </label>
        <input
          type="text"
          name="search"
          id="search"
          className="form-control"
          onChange={changeHandler}
          value={term}
        />
      </form>

      <div className="results">{resultsList}</div>
    </div>
  );
};

export default Wiki;
