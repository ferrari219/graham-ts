import React from 'react';
import styled from 'styled-components';
import { Heading3 } from './styles/theme';

const Section = styled.section`
	height: 46rem;
	padding: 4rem 3rem 0 3rem;
`;
const H3 = styled.h3`
	${Heading3};
	color: ${({ theme }) => theme.colors.grayF};
`;
const CarouselItems = styled.div`
	display: flex;
	flex-direction: row;
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
			<CarouselItems>{children}</CarouselItems>
		</Section>
	);
};

export default CarouselList;
