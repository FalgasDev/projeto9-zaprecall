import { useState } from 'react';
import styled from 'styled-components';
import play from '../assets/seta_play.png';
import turn from '../assets/seta_virar.png'

export default function Card({a}) {
  const [questionsShowed, setQuestionShowed] = useState([])
  const [answerShowed, setAnswerShowed] = useState([])
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  // const [zap, setZap] = useState([])
  // const [dontRemember, setDontRemember] = useState([])
  // const [almostDontRemember, setAlmostDontRemember] = useState([])

  function showedQuestion(req) {
		let newArray = [...questionsShowed, req]
		setQuestionShowed(newArray)
	}

  function showedAnswer(req) {
    let arrayAnswers = [...answerShowed, req]
    setAnswerShowed(arrayAnswers)
  }

  function answeredQuestion(req) {
    let arrayNew = [...answeredQuestions, req]
    setAnsweredQuestions(arrayNew)
  }
  
  return (
    <>
      <QuestionClosed questionsShowed={questionsShowed} answeredQuestions={answeredQuestions} a={a}>
        <p>Pergunta {a.id}</p>
        <img onClick={() => showedQuestion(a.id)} src={play} alt="" />
      </QuestionClosed>
      <QuestionOpen questionsShowed={questionsShowed} answerShowed={answerShowed} a={a}>
        <p>{a.question}</p>
        <img onClick={() => showedAnswer(a.id)} src={turn} alt="" />
      </QuestionOpen>
      <AnswerOpen answerShowed={answerShowed} answeredQuestions={answeredQuestions} a={a}>
        <p>{a.answer}</p>
        <button>Quase não lembrei</button>
        <button onClick={() => answeredQuestion(a.id)}>Zap!</button>
        <button>Não lembrei</button>
      </AnswerOpen>
    </>
  )
}

const QuestionClosed = styled.div`
	width: 100%;
	height: 65px;
	background-color: #FFFFFF;
	margin-bottom: 25px;
	border-radius: 5px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
  display: ${props => props.questionsShowed.includes(props.a.id) && !props.answeredQuestions.includes(props.a.id) ? 'none' : ''};
	p{
		font-size: 16px;
		font-weight: 700;
		font-family: 'Recursive', sans-serif;
	}
`;

const QuestionOpen = styled.div`
  width: 100%;
  height: 131px;
  background-color: #FFFFD5;
  margin-bottom: 25px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  position: relative;
  display: ${props => props.questionsShowed.includes(props.a.id) && !props.answerShowed.includes(props.a.id) ? '' : 'none'};
  p{
    font-size: 18px;
		font-weight: 400;
		font-family: 'Recursive', sans-serif;
    margin-top: 18px;
    margin-left: 15px;
  }
  img {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
`

const AnswerOpen = styled.div`
  width: 100%;
  height: 131px;
  background-color: #FFFFD5;
  margin-bottom: 25px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  position: relative;
  display: ${props => props.answerShowed.includes(props.a.id) && !props.answeredQuestions.includes(props.a.id) ? '' : 'none'};
  p {
    font-size: 18px;
		font-weight: 400;
		font-family: 'Recursive', sans-serif;
    margin-top: 18px;
    margin-left: 15px;
  }
  button {
    width: 85px;
    height: 37px;
    position: absolute;
    bottom: 10px;
    left: 17px;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    background-color: #FF3030;
    font-size: 12px;
    font-family: 'Recursive', sans-serif;
    &:nth-child(2) {
      left: 109px;
      background-color: #FF922E;
    }
    &:nth-child(3) {
      left: 202px;
      background-color: #2FBE34;
    }
  }
`