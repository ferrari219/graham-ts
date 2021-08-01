import React from 'react';
import styled from 'styled-components';
import me from 'assets/img/me.png';
import { ReactComponent as MenuIcon } from 'assets/svg/menu.svg';
interface IheaderProps {
	myname?: string;
}

const Section = styled.section`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 5rem;
	margin-top: 4rem;
	padding: 0 2rem;
`;
const NameArea = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	/* background-color: green; */
	padding: 0 1rem;
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
`;
const Menu = styled.div`
	flex: 0 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: blue; */
	button {
		width: 3rem;
		height: 3rem;
		background-color: transparent;
		border: none;
		svg {
			width: 100%;
			height: auto;
			fill: ${({ theme }) => theme.colors.grayC};
		}
	}
`;

const Headers: React.FunctionComponent<IheaderProps> = ({ myname }) => {
	// console.log(myname);
	return (
		<Section>
			<NameArea>
				<p>
					<img src={me} alt="My Profile img" />
				</p>
				<strong>{myname}</strong>
			</NameArea>
			<Menu>
				<button>
					<MenuIcon />
				</button>
				{/* <nav>
					<ul>
						<li>
							<a href="#">하위메뉴</a>
						</li>
					</ul>
				</nav> */}
			</Menu>
		</Section>
	);
};

export default Headers;
