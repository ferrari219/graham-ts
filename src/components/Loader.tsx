import React from 'react';
import styled from 'styled-components';
import LoadingImg from 'assets/img/loading.gif';

const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.grayF}; ;
`;

const Loader = () => {
	return (
		<Section>
			<span role="img" aria-label="Loading">
				<img src={LoadingImg} alt="로딩중" />
			</span>
		</Section>
	);
};

export default Loader;
