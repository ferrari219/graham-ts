import React from 'react';
import styled from 'styled-components';

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
	/* background-color: green; */
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
				<p>사진</p>
				<strong>{myname}</strong>
			</NameArea>
			<Menu>
				<button>三</button>
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
