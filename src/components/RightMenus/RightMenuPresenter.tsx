import Menus from 'components/Menus';
import React from 'react';
import styled from 'styled-components';
import { SrOnly } from 'components/styles/globalStyle';
import me from 'assets/img/me.png';

const Div = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 3rem;
	background-color: black;
	color: white;
	button {
		position: absolute;
		top: 2rem;
		right: 2rem;
		color: ${({ theme }) => theme.colors.grayF};
	}
	p {
		width: 7rem;
		height: 7rem;
		img {
			width: inherit;
			border-radius: 50%;
		}
	}
`;
const Sronly = styled.h1`
	${SrOnly}
`;

const handleCloseBtn = (e: React.SyntheticEvent) => {
	//   console.log('close');
	const nav = document.querySelector('nav') as HTMLParagraphElement;
	nav.classList.remove('is-active');
};

interface IrightmnuProps {
	category: object | null;
	// category?: Array<{
	//   id: number;
	//   name: string;
	//   lnk: string;
	// }>;
}

const RightMenuPresenter: React.FunctionComponent<IrightmnuProps> = ({
	category,
}) => {
	// console.log(category);
	return (
		<Div>
			<Sronly>RightMenu</Sronly>
			<p>
				<img src={me} alt="My Profile img" />
			</p>
			<button onClick={handleCloseBtn}>X</button>
			<dl>
				{/* {JSON.stringify(category)} */}

				<Menus {...category} />
				{/* <dt>I am...</dt>
        <dd>Skill</dd>
        <dd>Contact</dd> */}
			</dl>
			{/* 		
    Career
    - 현대리바트
    ...
    
    Portfolio
    */}
		</Div>
	);
};

export default RightMenuPresenter;
