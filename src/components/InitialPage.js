import { useState } from "react"
import styled from "styled-components"
import logo from "../assets/logo.png"

export default function InitialPage() {
  const [recallStarted, setRecallStarted] = useState(false)

  return (
    <ContainerInitialPage recallStarted={recallStarted}>
      <img src={logo} alt="" />
      <p>ZapRecall</p>
      <StartButton onClick={() => setRecallStarted(true)}>Iniciar Recall!</StartButton>
    </ContainerInitialPage>
  )
}

const ContainerInitialPage = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  height: 100vh;
  display: ${props => props.recallStarted ? 'none' : 'flex'};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  align-items: center;
  img {
    width: 136px;
    height: 161px;
    margin-top: 148px;
  }
  p {
    font-size: 36px;
    font-family: 'Righteous', cursive;
    color: #FFFFFF;
    margin-top: 23px;
  }
`

const StartButton = styled.button`
  margin-top: 30px;
  width: 246px;
  height: 54px;
  background-color: #FFFFFF;
  border: 1px solid #D70900;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  color: #D70900;
  font-size: 18px;
  font-family: 'Recursive', sans-serif;
  cursor: pointer;
`