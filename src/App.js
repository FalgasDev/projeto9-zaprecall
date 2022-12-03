import styled from "styled-components";
import InitialPage from "./components/InitialPage";
import MainPage from "./components/MainPage";
import GlobalSyle from "./global/GlobalSyles";
import Reset from "./global/reset";

function App() {

  return (
		<Container>
      <Reset/>
      <GlobalSyle/>
      <InitialPage/>
      <MainPage/>
		</Container>
	);
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App;