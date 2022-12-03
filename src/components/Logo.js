import styled from 'styled-components';
import logo from '../assets/logo.png';

export default function Logo() {
	return (
		<ContainerLogo>
			<img src={logo} alt="" />
			<h1>ZapRecall</h1>
		</ContainerLogo>
	);
}

const ContainerLogo = styled.div`
	display: flex;
	align-items: center;
	margin-top: 42px;
	margin-bottom: 51px;
	img {
		width: 52px;
		height: 60px;
		margin-right: 20px;
	}
	h1 {
		font-size: 36px;
		line-height: 45px;
		color: #ffffff;
		font-family: 'Righteous', cursive;
	}
`;
