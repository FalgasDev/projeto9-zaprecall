import { useState } from 'react';
import Logo from './Logo';
import Questions from './Questions';
import Footer from './Footer';

export default function MainPage({ recallStarted, setRecallStarted }) {
	const [counter, setCounter] = useState(0);
	const [footerIcon, setFooterIcon] = useState([]);
	const [questionsShowed, setQuestionShowed] = useState([]);
	const [answerShowed, setAnswerShowed] = useState([]);
	const [answeredQuestions, setAnsweredQuestions] = useState([]);
	const [zap, setZap] = useState([]);
	const [dontRemember, setDontRemember] = useState([]);
	const [almostDontRemember, setAlmostDontRemember] = useState([]);

	return (
		<>
			<Logo />
			<Questions
				footerIcon={footerIcon}
				setFooterIcon={setFooterIcon}
				counter={counter}
				setCounter={setCounter}
				recallStarted={recallStarted}
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
			<Footer
				footerIcon={footerIcon}
				counter={counter}
				setQuestionShowed={setQuestionShowed}
				setAnswerShowed={setAnswerShowed}
				setAnsweredQuestions={setAnsweredQuestions}
				setZap={setZap}
				setDontRemember={setDontRemember}
				setAlmostDontRemember={setAlmostDontRemember}
				setCounter={setCounter}
				setFooterIcon={setFooterIcon}
				setRecallStarted={setRecallStarted}
			/>
		</>
	);
}
