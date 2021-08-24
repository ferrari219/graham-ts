import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Carousel from './Carousel';
import { Heading3 } from './styles/theme';

const Section = styled.section`
	overflow: hidden;
	/* height: 45rem; */
	padding: 2rem 0 0 0;
	button {
		display: none !important;
	}
`;
const H3 = styled.h3`
	${Heading3};
	color: ${({ theme }) => theme.colors.grayF};
	padding: 0 2rem;
`;
const Slick = styled.div`
	width: 100%;
	padding: 0 1rem;
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

const settings = {
	dots: true,
	lazyload: true,
	infinite: true,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 2,
	autoplay: true,
	autoplaySpeed: 2000,
	pauseOnHover: true,
};

const Carousels: React.FunctionComponent<IcarouselProps> = ({
	title,
	project,
}) => {
	return (
		<Section>
			<H3>{title}</H3>
			<Slick>
				<Slider {...settings}>
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
				</Slider>
			</Slick>
		</Section>
	);
};

export default Carousels;
