import styled from 'styled-components';
import cards from './Deck';
import almost from '../assets/icone_quase.png';
import wrong from '../assets/icone_erro.png';
import party from '../assets/party.png';
import sad from '../assets/sad.png';

export default function Footer({
	counter,
	footerIcon,
	setQuestionShowed,
	setAnswerShowed,
	setAnsweredQuestions,
	setZap,
	setDontRemember,
	setAlmostDontRemember,
	setCounter,
	setFooterIcon,
	setRecallStarted,
}) {
	function restart() {
		setQuestionShowed([]);
		setAnswerShowed([]);
		setAnsweredQuestions([]);
		setZap([]);
		setDontRemember([]);
		setAlmostDontRemember([]);
		setCounter(0);
		setFooterIcon([]);
		setRecallStarted(false);
	}

	return (
		<ContainerFooter
			counter={counter}
			footerIcon={footerIcon}
			data-test="footer"
		>
			<EndMessage data-test="finish-text" counter={counter}>
				<div>
					<img src={footerIcon.includes(wrong) ? sad : party} alt="" />
					<span>{footerIcon.includes(wrong) ? 'Putz...' : 'Parabéns!'}</span>
				</div>
				<h2>
					{footerIcon.includes(wrong)
						? 'Ainda faltam alguns... Mas não desanime!'
						: 'Você não esqueceu de nenhum flashcard!'}
				</h2>
			</EndMessage>
			<p>
				{counter}/{cards.length} CONCLUÍDOS
			</p>
			<div>
				{footerIcon.map((a) => (
					<img
						data-test={
							a === wrong
								? 'no-icon'
								: a === almost
								? 'partial-icon'
								: 'zap-icon'
						}
						src={a}
						alt=""
					/>
				))}
			</div>
			<RestartButton onClick={restart} counter={counter}>
				Reiniciar
			</RestartButton>
		</ContainerFooter>
	);
}

const ContainerFooter = styled.div`
	width: 100%;
	height: ${(props) => (props.counter === cards.length ? '230px' : '70px')};
	background-color: #ffffff;
	position: fixed;
	bottom: 0;
	left: 0;
	box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	p {
		font-family: 'Recursive', sans-serif;
		font-size: 18px;
		color: #333333;
	}
	img {
		margin-right: 5px;
		margin-top: 8px;
	}
`;

const EndMessage = styled.div`
	display: ${(props) => (props.counter === cards.length ? 'flex' : 'none')};
	align-items: center;
	flex-direction: column;
	div {
		display: flex;
		align-items: center;
		img {
			width: 23px;
			margin-right: 12px;
			margin-bottom: 15px;
		}
		span {
			font-family: 'Recursive', sans-serif;
			font-size: 18px;
			font-weight: 700;
			color: #333333;
			margin-bottom: 7px;
		}
	}
	h2 {
		font-family: 'Recursive', sans-serif;
		font-size: 18px;
		color: #333333;
		width: 222px;
		text-align: center;
		margin-bottom: 14px;
	}
`;

const RestartButton = styled.button`
	cursor: pointer;
	height: 40px;
	width: 150px;
	margin-top: 14px;
	background-color: #fb6b6b;
	border: none;
	border-radius: 5px;
	color: #ffffff;
	font-size: 18px;
	font-weight: 700;
	font-family: 'Recursive', sans-serif;
	display: ${(props) => (props.counter === cards.length ? '' : 'none')};
`;
