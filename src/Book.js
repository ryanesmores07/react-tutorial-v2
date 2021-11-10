import React from "react";
import styled from "styled-components";

const BookContainer = styled.article`
  background: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
`;

const BookTitle = styled.h1`
  margin-top: 0.5rem;
`;

const BookAuthor = styled.h4`
  color: #617d98;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props.book;
  const clickHandler = () => alert("yeee");
  const complexExample = () => console.log(author);

  return (
    <BookContainer
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <BookTitle>{title}</BookTitle>
      <BookAuthor>{author}</BookAuthor>
      <button type="button" onClick={clickHandler}>
        Alert
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Author
      </button>
    </BookContainer>
  );
};

export default Book;
