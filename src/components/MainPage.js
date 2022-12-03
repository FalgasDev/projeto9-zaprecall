import { useState } from 'react';
import Logo from './Logo';
import Questions from './Questions';
import Footer from './Footer';

export default function MainPage({ recallStarted }) {
	const [counter, setCounter] = useState(0);
	const [footerIcon, setFooterIcon] = useState([]);

	return (
		<>
			<Logo />
			<Questions
				footerIcon={footerIcon}
				setFooterIcon={setFooterIcon}
				counter={counter}
				setCounter={setCounter}
				recallStarted={recallStarted}
			/>
			<Footer footerIcon={footerIcon} counter={counter} />
		</>
	);
}
