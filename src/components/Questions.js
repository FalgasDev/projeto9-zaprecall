import styled from 'styled-components';
import Card from './Cards';
import cards from './Deck';

export default function Questions({
	counter,
	setCounter,
	footerIcon,
	setFooterIcon,
	recallStarted,
	questionsShowed,
	setQuestionShowed,
	answerShowed,
	setAnswerShowed,
	answeredQuestions,
	setAnsweredQuestions,
	zap,
	setZap,
	dontRemember,
	setDontRemember,
	almostDontRemember,
	setAlmostDontRemember,
}) {
	return (
		<ContainerQuestions counter={counter} recallStarted={recallStarted}>
			{cards.map((a) => (
				<Card
					key={a.id}
					a={a}
					footerIcon={footerIcon}
					setFooterIcon={setFooterIcon}
					counter={counter}
					setCounter={setCounter}
					questionsShowed={questionsShowed}
					setQuestionShowed={setQuestionShowed}
					answerShowed={answerShowed}
					setAnswerShowed={setAnswerShowed}
					answeredQuestions={answeredQuestions}
					setAnsweredQuestions={setAnsweredQuestions}
					zap={zap}
					setZap={setZap}
					dontRemember={dontRemember}
					setDontRemember={setDontRemember}
					almostDontRemember={almostDontRemember}
					setAlmostDontRemember={setAlmostDontRemember}
				/>
			))}
		</ContainerQuestions>
	);
}

const ContainerQuestions = styled.div`
	display: ${(props) => (props.recallStarted ? 'flex' : 'none')};
	flex-direction: column;
	width: 303px;
	margin-bottom: ${(props) =>
		props.counter === cards.length ? '230px' : '70px'};
`;
