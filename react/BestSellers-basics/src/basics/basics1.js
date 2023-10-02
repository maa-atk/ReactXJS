// import React from "react";
// import ReactDOM from "react-dom/client";
// // our assets needs to provide the path
// import "./index.css";
// // function Greeting() {
// //   return <h2>Hello World</h2>;
// // }
// // can also be defined as

// // function Greeting() {
// //   return React.createElement("h2", {}, "hello world");
// // }

// // must always return a single parent or can be enclosed in a single fragmment

// // function Greeting() {
// //   return (
// //     <React.Fragment>
// //       <h2>Hello World</h2>
// //     </React.Fragment>
// //   );
// // }
// // can avoid extra div's

// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book></Book>
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// };
// const Book = () => {
//   return (
//     <article className="book">
//       <Image></Image>
//       <Title></Title>
//       <Author></Author>
//     </article>
//   );
// };

// const Image = () => {
//   // images placed in public is un-optimized not advisable
//   return <img src="./images/book-1.jpg" alt="Think Straight" />;
// };
// const Title = () => <h2>Title</h2>;

// const Author = () => {
//   //   <h2
//   //     style={{
//   //       // inline jsx css is an object which is provided
//   //       // external libraries may have inline css
//   //       color: "#617d98",
//   //       fontSize: "0.75rem",
//   //       marginTop: "0.5rem",
//   //     }}
//   //   >
//   //     Author
//   //   </h2>

//   // or can be defined externally
//   const inlineHeadingStyle = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return <h2 style={inlineHeadingStyle}>Author</h2>;
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BookList />);
