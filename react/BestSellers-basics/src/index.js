import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { booksArray } from "./Books";
import { Book } from "./Book";

const BookList = () => {
  const getBook = (id) => {
    console.log("clicked", parseInt(id));
    const result = booksArray.find((book) => book.id === id);
    console.log(result);
  };
  return (
    <section className="booklist">
      <EventExamples></EventExamples>
      {booksArray.map((book) => {
        // spread and match the names then pass through
        return <Book {...book} getBook={getBook}></Book>;
      })}
    </section>
  );
};

const EventExamples = (props) => {
  const handleFormInput = () => {
    console.log("form input");
  };

  const handleButtonClick = (e) => {
    // will have access to event in the event obj
    //eg event target name/value
    alert("button click");
  };
  const handleFOnSubmit = (e) => {
    e.preventDefault();
    //handles the save form mannually
    console.log("form submitted");
  };

  return (
    <section>
      <form onSubmit={handleFOnSubmit}>
        <h2>Form with Input</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        ></input>
        <button type="submit">submit form</button>
        {/* need to be of type submit to work with the onsubmit call back */}
      </form>

      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
