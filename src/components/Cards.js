import styled from 'styled-components';
import play from '../assets/seta_play.png';
import turn from '../assets/seta_virar.png';
import correct from '../assets/icone_certo.png';
import almost from '../assets/icone_quase.png';
import wrong from '../assets/icone_erro.png';

export default function Card({
	a,
	counter,
	setCounter,
	footerIcon,
	setFooterIcon,
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
	function answeredQuestionCorrect(req) {
		let correctQuestions = [...answeredQuestions, req];
		setAnsweredQuestions(correctQuestions);
		setZap([...zap, req]);
		setCounter(counter + 1);
		setFooterIcon([...footerIcon, correct]);
	}

	function answeredQuestionAlmost(req) {
		let almostQuestions = [...answeredQuestions, req];
		setAnsweredQuestions(almostQuestions);
		setAlmostDontRemember([...almostDontRemember, req]);
		setCounter(counter + 1);
		setFooterIcon([...footerIcon, almost]);
	}

	function answeredQuestionWrong(req) {
		let wrongQuestions = [...answeredQuestions, req];
		setAnsweredQuestions(wrongQuestions);
		setDontRemember([...dontRemember, req]);
		setCounter(counter + 1);
		setFooterIcon([...footerIcon, wrong]);
	}

	return (
		<>
			<QuestionClosed
				data-test="flashcard"
				questionsShowed={questionsShowed}
				answeredQuestions={answeredQuestions}
				zap={zap}
				dontRemember={dontRemember}
				almostDontRemember={almostDontRemember}
				a={a}
			>
				<p data-test="flashcard-text">Pergunta {a.id}</p>
				<img
					data-test="play-btn"
					onClick={() => setQuestionShowed([...questionsShowed, a.id])}
					src={play}
					alt=""
				/>
				<img data-test="zap-icon" src={correct} alt="" />
				<img data-test="partial-icon" src={almost} alt="" />
				<img data-test="no-icon" src={wrong} alt="" />
			</QuestionClosed>
			<QuestionOpen
				data-test="flashcard"
				questionsShowed={questionsShowed}
				answerShowed={answerShowed}
				a={a}
			>
				<p data-test="flashcard-text">{a.question}</p>
				<img
					data-test="turn-btn"
					onClick={() => setAnswerShowed([...answerShowed, a.id])}
					src={turn}
					alt=""
				/>
			</QuestionOpen>
			<AnswerOpen
				data-test="flashcard"
				answerShowed={answerShowed}
				answeredQuestions={answeredQuestions}
				a={a}
			>
				<p data-test="flashcard-text">{a.answer}</p>
				<button
					data-test="partial-btn"
					onClick={() => answeredQuestionAlmost(a.id)}
				>
					Quase n??o lembrei
				</button>
				<button
					data-test="zap-btn"
					onClick={() => answeredQuestionCorrect(a.id)}
				>
					Zap!
				</button>
				<button data-test="no-btn" onClick={() => answeredQuestionWrong(a.id)}>
					N??o lembrei
				</button>
			</AnswerOpen>
		</>
	);
}

const QuestionClosed = styled.div`
	width: 100%;
	height: 65px;
	background-color: #ffffff;
	margin-bottom: 25px;
	border-radius: 5px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	display: ${(props) =>
		props.questionsShowed.includes(props.a.id) &&
		!props.answeredQuestions.includes(props.a.id)
			? 'none'
			: ''};
	p {
		font-size: 16px;
		font-weight: 700;
		font-family: 'Recursive', sans-serif;
		color: ${(props) =>
			props.zap.includes(props.a.id)
				? '#2FBE34'
				: props.dontRemember.includes(props.a.id)
				? '#FF3030'
				: props.almostDontRemember.includes(props.a.id)
				? '#FF922E'
				: ''};
		text-decoration-line: ${(props) =>
			props.answeredQuestions.includes(props.a.id) ? 'line-through' : ''};
	}
	img {
		&:nth-child(2) {
			display: ${(props) =>
				props.answeredQuestions.includes(props.a.id) ? 'none' : ''};
			cursor: pointer;
		}
		&:nth-child(3) {
			display: ${(props) => (!props.zap.includes(props.a.id) ? 'none' : '')};
		}
		&:nth-child(4) {
			display: ${(props) =>
				!props.almostDontRemember.includes(props.a.id) ? 'none' : ''};
		}
		&:nth-child(5) {
			display: ${(props) =>
				!props.dontRemember.includes(props.a.id) ? 'none' : ''};
		}
	}
`;

const QuestionOpen = styled.div`
	width: 100%;
	height: 131px;
	background-color: #ffffd5;
	margin-bottom: 25px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	position: relative;
	display: ${(props) =>
		props.questionsShowed.includes(props.a.id) &&
		!props.answerShowed.includes(props.a.id)
			? ''
			: 'none'};
	p {
		font-size: 18px;
		font-weight: 400;
		font-family: 'Recursive', sans-serif;
		margin-top: 18px;
		margin-left: 15px;
	}
	img {
		cursor: pointer;
		position: absolute;
		bottom: 10px;
		right: 15px;
	}
`;

const AnswerOpen = styled.div`
	width: 100%;
	height: 131px;
	background-color: #ffffd5;
	margin-bottom: 25px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	position: relative;
	display: ${(props) =>
		props.answerShowed.includes(props.a.id) &&
		!props.answeredQuestions.includes(props.a.id)
			? ''
			: 'none'};
	p {
		font-size: 18px;
		font-weight: 400;
		font-family: 'Recursive', sans-serif;
		margin-top: 18px;
		margin-left: 15px;
	}
	button {
		cursor: pointer;
		width: 85px;
		height: 37px;
		position: absolute;
		bottom: 10px;
		left: 17px;
		border: none;
		border-radius: 5px;
		color: #ffffff;
		background-color: #ff3030;
		font-size: 12px;
		font-family: 'Recursive', sans-serif;
		&:nth-child(2) {
			left: 109px;
			background-color: #ff922e;
		}
		&:nth-child(3) {
			left: 202px;
			background-color: #2fbe34;
		}
	}
`;
