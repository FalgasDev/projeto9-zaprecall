import styled from 'styled-components';
import Card from './Cards';
import cards from './Deck';

export default function Questions() {
	return (
		<ContainerQuestions>
			{cards.map(a => <Card a={a}/>)}
		</ContainerQuestions>
	);
}

const ContainerQuestions = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	margin-bottom: 70px;
`;