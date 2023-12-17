import { useEffect, useState } from "react";
import styled from "styled-components";
import Book from "../components/Book";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  margin-top: 30px;
`;

function Result() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (localStorage.length > 0) {
      const book_data = JSON.parse(localStorage.getItem("book_data"));
      setData(book_data);
      setLoading(false);
    }
  }, []);

  console.log(data);

  return (
    <Wrapper>
      {loading ? (
        <Title>Loading...</Title>
      ) : (
        <Wrapper>
          <Title>Book List</Title>
          <hr />
          <div>
            {data.map((book) => (
              <Book
                key={parseInt(book.도서명, 2)}
                place={book.도서위치}
                library={book.도서관}
                name={book.도서명}
                author={book.작가}
                value={book.자카드유사도}
              ></Book>
            ))}
          </div>
        </Wrapper>
      )}
    </Wrapper>
  );
}

export default Result;
