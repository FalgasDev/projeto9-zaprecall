import styled from "styled-components"
import play from "../assets/seta_play.png"

export default function Questions() {
  return (
    <ContainerQuestions>
      <Question>
        <p>Pergunta 1</p>
        <img src={play} alt=""/>
      </Question>
      <Question>
        <p>Pergunta 2</p>
        <img src={play} alt=""/>
      </Question>
      <Question>
        <p>Pergunta 3</p>
        <img src={play} alt=""/>
      </Question>
      <Question>
        <p>Pergunta 4</p>
        <img src={play} alt=""/>
      </Question>
    </ContainerQuestions>
  )
}

const ContainerQuestions = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const Question = styled.div`
  width: 100%;
  height: 65px;
  background-color: #FFFFFF;
  margin-bottom: 25px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  p {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Recursive', sans-serif;
  }
`