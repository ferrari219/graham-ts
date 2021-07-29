import React from 'react';
import styled from 'styled-components';
import me from 'assets/img/me.png';

interface IheaderProps {
	myname?: string;
}

const Section = styled.section`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 5rem;
	margin-top: 4rem;
`;
const NameArea = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	padding: 0 3rem;
	/* background-color: green; */
	p {
		width: 4rem;
		height: 4rem;
		img {
			width: 100%;
			height: auto;
			border-radius: 50%;
		}
	}
`;
const Menu = styled.div`
	flex: 0 5rem;
	/* background-color: blue; */
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
				<button></button>
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
