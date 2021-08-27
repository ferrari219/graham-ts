import Menus from 'components/Menus';
import MyName from 'components/MyName';
import React from 'react';
import styled from 'styled-components';
import { SrOnly } from 'components/styles/globalStyle';
import { ReactComponent as Close } from 'assets/svg/close.svg';

const Div = styled.div`
	width: 100vw;
	max-width: 89rem;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.grayF};
	color: ${({ theme }) => theme.colors.gray3};
	button {
		position: absolute;
		top: 2rem;
		right: 2rem;
		/* color: ${({ theme }) => theme.colors.grayF}; */
	}
`;
const Wrap = styled.div``;
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
			<Wrap>
				<MyName {...iam} />
				<button onClick={handleCloseBtn}>
					<Close />
				</button>
				<dl>
					{/* {JSON.stringify(category)} */}

					<Menus {...category} />
					{/* <dt>I am...</dt>
        <dd>Skill</dd>
        <dd>Contact</dd> */}
				</dl>
			</Wrap>
		</Div>
	);
};

export default RightMenuPresenter;
