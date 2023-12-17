import styled from "styled-components";
import Home from "./router/Home";
import Result from "./router/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
