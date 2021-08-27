import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const Wrap = styled.div`
	width: 100%;
	height: 34rem;
	padding: 0 1rem;
`;
const Pic = styled.div`
	overflow: hidden;
	width: inherit;
	height: 24rem;
	border-radius: 2rem;
	opacity: 1;
	img {
		display: block;
		width: 100%;
		box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
	}
`;
const Text = styled.div`
	width: inherit;
	margin-top: 1rem;
	strong {
		display: block;
		font-size: ${({ theme }) => theme.fonts.size.md};
		font-weight: ${({ theme }) => theme.fonts.weight.bold};
		color: ${({ theme }) => theme.colors.grayC};
		line-height: 1.3;
	}
	span {
		display: block;
		font-size: ${({ theme }) => theme.fonts.size.sm};
		font-weight: ${({ theme }) => theme.fonts.weight.normal};
		color: ${({ theme }) => theme.colors.gray9};
	}
`;

interface IcarouselProps {
	id?: number;
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
				<img
					src={`https://ferrari219.github.io/graham-ts/data/img/career/livart/thumb${id}.jpg`}
					alt=""
				/>
			</Pic>
			<Text>
				<strong>{name}</strong>
				{/* <span>{detail}</span> */}
			</Text>
			{/* <Link to="/:id">
			</Link> */}
		</Wrap>
	);
};

export default Carousel;
