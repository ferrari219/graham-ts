import React from 'react';
import styled from 'styled-components';
import Refer from 'assets/img/refer.jpg';

const Wrap = styled.div`
	width: 18rem;
	height: 30rem;
	/* background-color: red; */
`;
const Pic = styled.div`
	overflow: hidden;
	width: 18rem;
	height: 25rem;
	border-radius: 2rem;
	opacity: 1;
	img {
		width: 100%;
	}
`;
const Text = styled.div`
	margin-top: 2rem;
	strong {
		display: block;
		font-size: ${({ theme }) => theme.fonts.size.lg};
		font-weight: ${({ theme }) => theme.fonts.weight.bold};
		color: ${({ theme }) => theme.colors.grayC};
	}
	span {
		display: block;
		font-size: ${({ theme }) => theme.fonts.size.base};
		font-weight: ${({ theme }) => theme.fonts.weight.normal};
		color: ${({ theme }) => theme.colors.gray9};
	}
`;

const Carousel: React.FunctionComponent = () => {
	return (
		<Wrap>
			<Pic>
				<img src={Refer} alt="refer" />
			</Pic>
			<Text>
				<strong>Sample</strong>
				<span>text</span>
			</Text>
		</Wrap>
	);
};

export default Carousel;
