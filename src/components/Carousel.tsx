import React from 'react';
import styled from 'styled-components';
import Refer from 'assets/img/refer.jpg';

const Wrap = styled.div`
	width: 18rem;
	height: 30rem;
	/* background-color: red; */
	& + div {
		margin: 0 1rem;
	}
`;
const Pic = styled.div`
	overflow: hidden;
	width: 18rem;
	height: 25rem;
	border-radius: 1rem;
	opacity: 1;
	img {
		width: 100%;
		box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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

interface IcarouselProps {
	id: number;
	name: string;
	detail: string;
	lnk: string;
}

const Carousel: React.FunctionComponent<IcarouselProps> = ({
	id,
	name,
	detail,
	lnk,
}) => {
	return (
		<Wrap>
			<Pic>
				<img src={`assets/img/livart/thumb${id}.jpg`} alt="refer" />
			</Pic>
			<Text>
				<strong>{name}</strong>
				<span>{detail}</span>
			</Text>
		</Wrap>
	);
};

export default Carousel;
