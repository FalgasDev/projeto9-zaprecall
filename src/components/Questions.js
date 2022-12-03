import styled from 'styled-components';
import Card from './Cards';
import cards from './Deck';

export default function Questions({counter, setCounter, footerIcon, setFooterIcon, recallStarted}) {
	return (
		<ContainerQuestions counter={counter} recallStarted={recallStarted}>
			{cards.map(a => <Card key={a.id} a={a} footerIcon={footerIcon} setFooterIcon={setFooterIcon} counter={counter} setCounter={setCounter}/>)}
		</ContainerQuestions>
	);
}

const ContainerQuestions = styled.div`
	display: ${props => props.recallStarted ? 'flex' : 'none'};
	flex-direction: column;
	width: 303px;
	margin-bottom: ${props => props.counter === cards.length ? '171px' : '70px'};
`;