import React from 'react';
import styled from 'styled-components';
import me from 'assets/img/me.png';
import { ReactComponent as BackIcon } from 'assets/svg/back.svg';
import { ReactComponent as MenuIcon } from 'assets/svg/menu.svg';
import RightMenus from 'components/RightMenus';

const Header = styled.header`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 9rem;
	padding: 3rem 2rem 1rem 2rem;
`;
const Left = styled.div`
	flex: 0 4rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	/* background-color: blue; */
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 3rem;
		background-color: transparent;
		border: none;
		svg {
			width: 2.2rem;
			height: auto;
			fill: ${({ theme }) => theme.colors.grayC};
			font-size: ${({ theme }) => theme.fonts.size.base};
		}
	}
`;
const InfoArea = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	/* background-color: green; */
	/* padding: 0 1rem; */
	p {
		width: 4rem;
		height: 4rem;
		margin-right: 1rem;
		img {
			width: 100%;
			height: auto;
			border-radius: 50%;
		}
	}
	strong {
		font-weight: ${({ theme }) => theme.fonts.weight.bold};
		font-size: ${({ theme }) => theme.fonts.size.sm};
		letter-spacing: 0;
	}
`;
const Right = styled.div`
	flex: 0 4rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	/* background-color: blue; */
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 3rem;
		background-color: transparent;
		border: none;
		svg {
			width: 2.2rem;
			height: auto;
			fill: ${({ theme }) => theme.colors.grayC};
			font-size: ${({ theme }) => theme.fonts.size.base};
		}
	}
	nav {
		position: fixed;
		right: -100%;
		top: 0;
		z-index: 99;
		transition: right 0.2s;
		&.is-active {
			right: 0;
		}
	}
`;

const handleMenuBtn = (e: React.SyntheticEvent<EventTarget>) => {
	e.preventDefault();
	// console.log('메뉴ON');
	const nav = document.querySelector('nav') as HTMLParagraphElement;
	// console.log(nav);
	nav.classList.add('is-active');
};
const handleBackBtn = (e: React.SyntheticEvent<EventTarget>) => {
	e.preventDefault();
	window.history.back();
};
interface IheaderProps {
	myname?: string;
}

const Headers: React.FunctionComponent<IheaderProps> = ({ myname }) => {
	// console.log(myname);
	return (
		<Header>
			<Left>
				<button onClick={handleBackBtn}>
					<BackIcon />
				</button>
			</Left>
			<InfoArea>
				{/* <p>
					<img src={me} alt="My Profile img" />
				</p>
				<strong>{myname}</strong> */}
				<strong>test</strong>
			</InfoArea>
			<Right>
				<button onClick={handleMenuBtn}>
					<MenuIcon />
				</button>
				<nav>
					<RightMenus />
				</nav>
			</Right>
		</Header>
	);
};

export default Headers;
