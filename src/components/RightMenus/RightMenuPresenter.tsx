import Menus from 'components/Menus';
import MyName from 'components/MyName';
import React from 'react';
import styled from 'styled-components';
import { SrOnly } from 'components/styles/globalStyle';
import { ReactComponent as Close } from 'assets/svg/close.svg';

const Div = styled.div`
	position: relative;
	width: 100vw;
	max-width: 89rem;
	height: 100vh;
	color: ${({ theme }) => theme.colors.gray3};
	button {
		position: absolute;
		top: 2rem;
		right: 2rem;
		z-index: 3;
		svg {
			fill: ${({ theme }) => theme.colors.gray3} !important;
		}
	}
`;
const Wrap = styled.div`
	position: relative;
	width: 90%;
	height: 100vh;
	margin: 0 0 0 auto;
	background-color: ${({ theme }) => theme.colors.grayF};
	z-index: 2;
`;
const Dimmed = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.gray0};
	opacity: 0.7;
	z-index: 1;
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
	iam: object | null;
}

const RightMenuPresenter: React.FunctionComponent<IrightmnuProps> = ({
	category,
	iam,
}) => {
	// console.log(category);
	return (
		<Div>
			<Sronly>RightMenu</Sronly>
			<button onClick={handleCloseBtn}>
				<Close />
			</button>
			<Wrap>
				<MyName {...iam} />
				<dl>
					{/* {JSON.stringify(category)} */}

					<Menus {...category} />
					{/* <dt>I am...</dt>
        <dd>Skill</dd>
        <dd>Contact</dd> */}
				</dl>
			</Wrap>
			<Dimmed />
		</Div>
	);
};

export default RightMenuPresenter;
