import ReactDom from "react-dom";
import "./index.css";
import styled from "styled-components/macro";
import { books } from "./books";
import Book from "./Book";

const Section = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
`;

const BookList = () => {
  return (
    <Section>
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
        // return <Book key={book.id} book={book} />;
      })}
    </Section>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
