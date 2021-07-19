import React from 'react';
import GlobalStyle from 'components/styles/globalStyle';
import Routers from 'components/Routers';
import Refer from 'assets/img/refer.jpg';
import styled from 'styled-components';

const Section = styled.section`
	position: relative;
	z-index: 1;
`;
const ReferDiv = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: auto;
	z-index: 0;
	img {
		width: inherit;
	}
`;

const App = () => {
	return (
		<>
			<Section>
				<Routers />
				<GlobalStyle />
			</Section>
			<ReferDiv>
				<img src={Refer} alt="refer" />
			</ReferDiv>
		</>
	);
};

export default App;
