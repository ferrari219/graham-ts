import React from 'react';
import styled from 'styled-components';
import { Heading3 } from './styles/theme';

const Section = styled.section`
	height: 42rem;
	margin: 4rem 3rem 0 3rem;
`;
const H3 = styled.h3`
	${Heading3};
	color: ${({ theme }) => theme.colors.grayF};
`;

interface IcarouselProps {
	title: string;
	children: React.ReactNode;
}

const CarouselList: React.FunctionComponent<IcarouselProps> = ({
	title,
	children,
}) => {
	return (
		<Section>
			<H3>{title}</H3>
			<div>{children}</div>
		</Section>
	);
};

export default CarouselList;
