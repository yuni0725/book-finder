import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  margin-top: 30px;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  margin: 10px 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  margin-top: 30px;
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
  background-color: whitesmoke;

  border: 2px solid black;
  border-radius: 10px;

  padding-left: 5px;

  &[type="submit"] {
    background-color: skyblue;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

function Home() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let book_data;

  useEffect(() => {
    if (localStorage.length > 0) {
      localStorage.removeItem("book_data");
    }
  }, []);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const book_datas = await (
        await fetch("http://127.0.0.1:8000/send-data", {
          method: "POST",
          credentials: "include",
          mode: "cors",
          body: value,
        })
      ).json();

      console.log(book_data);
      localStorage.setItem("book_data", JSON.stringify(book_datas));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      navigate("/result");
    }
  };
  return (
    <Wrapper>
      <Title>Library Book Search</Title>
      <SubTitle>with Jaccard Similarity</SubTitle>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          id="name"
          value={value}
          placeholder="Search Book Name on Here!"
          required
          autoComplete="off"
        ></Input>
        <Input type="submit" value={loading ? "Finding..." : "Search"}></Input>
      </Form>
    </Wrapper>
  );
}

export default Home;
