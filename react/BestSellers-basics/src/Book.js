export const Book = (props) => {
  const { image, title, author, children, getBook, id } = props;
  const getSingleBook = () => {
    getBook(id);
  };
  // destructuring the prop
  return (
    <article className="book">
      <span
        className="number"
        // style={{ textAlign: "left" }}
      >
        #{id}
      </span>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h2>{author}</h2>
      {/* <button onClick={getSingleBook}>ClickMe</button> */}
      {/* or pass an anonymous func */}
      <button onClick={() => getBook(id)}>ClickMe</button>
      {/* this is the 2nd object that is defined outside b/w the tag property */}
      {children}
    </article>
  );
};
