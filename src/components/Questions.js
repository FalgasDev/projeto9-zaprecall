import styled from 'styled-components';
import Card from './Cards';
import cards from './Deck';

export default function Questions({counter, setCounter, footerIcon, setFooterIcon}) {
	return (
		<ContainerQuestions>
			{cards.map(a => <Card key={a.id} a={a} footerIcon={footerIcon} setFooterIcon={setFooterIcon} counter={counter} setCounter={setCounter}/>)}
		</ContainerQuestions>
	);
}

const ContainerQuestions = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	margin-bottom: 70px;
`;