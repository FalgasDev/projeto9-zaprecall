import { useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Questions from "./components/Questions";
import GlobalSyle from "./global/GlobalSyles";
import Reset from "./global/reset";

function App() {
  const [showQuestion, setShowQuestion] = useState(false)

	return (
		<Container>
      <Reset/>
      <GlobalSyle/>
      <Logo/>
      <Questions showQuestion={showQuestion} setShowQuestion={setShowQuestion}/>
      <Footer/>
		</Container>
	);
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App;