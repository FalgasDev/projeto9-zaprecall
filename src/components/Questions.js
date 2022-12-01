import { useState } from 'react';
import styled from 'styled-components';
import play from '../assets/seta_play.png';
import cards from './Deck';

export default function Questions({ showQuestion, setShowQuestion }) {
	return (
		<ContainerQuestions>
			{cards.map(a => <Card a={a} setShowQuestion={setShowQuestion} showQuestion={showQuestion} />)}
		</ContainerQuestions>
	);
}

function Card({setShowQuestion, showQuestion, a}) {
	const [questionsShowed, setQuestionShowed] = useState([])

	function showedQuestion(req) {
		let newArray = [...questionsShowed, req]
		setQuestionShowed(newArray)
		console.log(newArray)
	}

	return (
		<Question showQuestion={showQuestion} questionsShowed={questionsShowed} a={a}>
			<p>Pergunta {a.id}</p>
			<p>{a.question}</p>
			<img onClick={() => showedQuestion(a.id)} src={play} alt="" />
		</Question>
	)
}

const ContainerQuestions = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	margin-bottom: 70px;
`;

const Question = styled.div`
	width: 100%;
	height: ${props => props.questionsShowed.includes(props.a.id) ? '100px' : '65px'};
	background-color: #FFFFFF;
	margin-bottom: 25px;
	border-radius: 5px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	p:nth-child(1) {
		font-size: 16px;
		font-weight: 700;
		font-family: 'Recursive', sans-serif;
		display: ${props => props.questionsShowed.includes(props.a.id) ? 'none' : ''};
	}
	p:nth-child(2) {
		font-size: 18px;
		font-weight: 400;
		font-family: 'Recursive', sans-serif;
		display: ${props => props.questionsShowed.includes(props.a.id) ? '' : 'none'};
	}
`;
