import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  width: 80vw;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
  margin-top: 30px;
`;

const SubTitle = styled.h3`
  font-size: 15px;
  margin: 10px 0px;
`;

function Book({ place, library, name, author, value }) {
  return (
    <Wrapper>
      <P key={parseInt(name, 2)}>
        <div>
          <Title>{name}</Title>
          <SubTitle>저자 : {author}</SubTitle>
        </div>
        <div>
          <SubTitle>도서관 : {library}</SubTitle>
          <SubTitle>자료위치 : {place}</SubTitle>
        </div>
        <SubTitle>정확도 : {value}%</SubTitle>
      </P>
    </Wrapper>
  );
}

export default Book;
