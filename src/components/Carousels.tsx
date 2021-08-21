import React from 'react';
import styled from 'styled-components';
import { Heading3 } from './styles/theme';
import Carousel from 'components/Carousel';

const Section = styled.section`
	overflow: hidden;
	height: 45rem;
	padding: 2rem 3rem 0 3rem;
`;
const H3 = styled.h3`
	${Heading3};
	color: ${({ theme }) => theme.colors.grayF};
`;
const CarouselItems = styled.div`
	overflow-x: auto;
	overflow-y: hidden;
	/* display: flex;
	flex-direction: row; */
	div {
		display: inline-block;
	}
`;

interface IcarouselProps {
	title: string;
	project?: Array<{
		id: number;
		name: string;
		detail: string;
		lnk: string;
	}>;
}

const CarouselList: React.FunctionComponent<IcarouselProps> = ({
	title,
	project,
}) => {
	return (
		<Section>
			<H3>{title}</H3>
			<CarouselItems>
				{/* <Carousel name="sample" detail="sampletext" lnk="naver.com" /> */}
				{project &&
					[...project]
						.reverse()
						.map((item) => (
							<Carousel
								id={item.id}
								key={item.id}
								name={item.name}
								detail={item.detail}
								lnk={item.lnk}
							/>
						))}
			</CarouselItems>
		</Section>
	);
};

export default CarouselList;
