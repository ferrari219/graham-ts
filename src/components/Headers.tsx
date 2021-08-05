import React from 'react';
import styled from 'styled-components';
import me from 'assets/img/me.png';
import { ReactComponent as MenuIcon } from 'assets/svg/menu.svg';
interface IheaderProps {
	myname?: string;
}

const Section = styled.header`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 9rem;
	padding: 3rem 2rem 1rem 2rem;
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
	strong {
		font-weight: ${({ theme }) => theme.fonts.weight.bold};
		font-size: ${({ theme }) => theme.fonts.size.sm};
		letter-spacing: 0;
	}
`;
const Menu = styled.div`
	flex: 0 5rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	/* background-color: blue; */
	button {
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
