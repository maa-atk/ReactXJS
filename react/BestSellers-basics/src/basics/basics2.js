// import React from "react";
// import ReactDOM from "react-dom/client";

// import "./index.css";

// const booksArray = [
//   //while rendering the array there must be a unique value in each element to prevent error
//   {
//     title: "Title",
//     author: "Author",
//     image: "./images/book-1.jpg",
//     id: 1,
//   },
//   {
//     title: "Atomic",
//     author: "James",
//     image: "./images/book-2.jpg",
//     id: 2,
//   },
//   {
//     title: "Fairy",
//     author: "Steven",
//     image: "./images/book-3.jpg",
//     id: 3,
//   },
// ];

// const BookList = () => {
//   const getBook = (e) => {
//     console.log("clicked", parseInt(e.target.value));
//     const result = booksArray.find(
//       (book) => book.id === parseInt(e.target.value)
//     );
//     console.log(result);
//   };
//   return (
//     <section className="booklist">
//       <EventExamples></EventExamples>
//       {booksArray.map((book) => {
//         // spread and match the names then pass through
//         return <Book {...book} getBook={getBook}></Book>;
//       })}
//     </section>
//     //   <section className="booklist">
//     //      {/* props sent via the tag is accessed inside the component via prop.property name  */}
//     //      <Book
//     //  image={firstBook.image}
//     //  author={firstBook.author}
//     //  tit le={firstBook.title}
//     //    >
//     //      {/* define children prop here for this to render the prop must be passed ie
//     //      if destructured children must be one of the destructured property */}
//     //      It is a long established fact that a reader will be distracted by the
//     //      readable content of a page when looking at its layout. The point of
//     //      using Lorem Ipsum is that it has a more-or-less normal distribution of
//     //      letters.
//     //    </Book>
//     //    <Book
//     //  image={thirdBook.image}
//     //  author={thirdBook.author}
//     //  title={thirdBook.title}
//     //    />
//     //    <Book
//     //      image={secondBook.image}
//     //      author={secondBook.author}
//     //      title={secondBook.title}
//     //    />
//     //</section>
//     //   );
//   );
// };

// const Book = (props) => {
//   const { image, title, author, children, getBook, id } = props;
//   // destructuring the prop
//   return (
//     <article className="book">
//       <img src={image} alt={title} />
//       <h2>{title}</h2>
//       <h2>{author}</h2>
//       <button onClick={getBook} value={id}>
//         ClickMe
//       </button>
//       {/* this is the 2nd object that is defined outside b/w the tag property */}
//       {children}
//     </article>
//   );
// };

// const EventExamples = (props) => {
//   const handleFormInput = () => {
//     console.log("form input");
//   };

//   const handleButtonClick = (e) => {
//     // will have access to event in the event obj
//     //eg event target name/value
//     alert("button click");
//   };
//   const handleFOnSubmit = (e) => {
//     e.preventDefault();
//     //handles the save form mannually
//     console.log("form submitted");
//   };

//   return (
//     <section>
//       <form onSubmit={handleFOnSubmit}>
//         <h2>Form with Input</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: "1rem 0" }}
//         ></input>
//         <button type="submit">submit form</button>
//         {/* need to be of type submit to work with the onsubmit call back */}
//       </form>

//       <button onClick={handleButtonClick}>click me</button>
//     </section>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BookList />);
