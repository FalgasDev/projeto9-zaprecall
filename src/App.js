import { useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Questions from "./components/Questions";
import GlobalSyle from "./global/GlobalSyles";
import Reset from "./global/reset";

function App() {
  const [counter, setCounter] = useState(0)

  return (
		<Container>
      <Reset/>
      <GlobalSyle/>
      <Logo/>
      <Questions counter={counter} setCounter={setCounter}/>
      <Footer counter={counter}/>
		</Container>
	);
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App;