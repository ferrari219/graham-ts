import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrap = styled.div`
	/* width: 18rem; */
	width: 17rem;
	height: 33rem;
	/* background-color: red; */
	margin: 0 2rem;
	&:first-child {
		margin-left: 0;
	}
`;
const Pic = styled.div`
	overflow: hidden;
	width: inherit;
	height: 28rem;
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
	margin-top: 2rem;
	strong {
		display: block;
		font-size: ${({ theme }) => theme.fonts.size.md};
		font-weight: ${({ theme }) => theme.fonts.weight.bold};
		color: ${({ theme }) => theme.colors.grayC};
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
			<Link to="/:id">
				<Pic>
					<img
						src={`https://ferrari219.github.io/graham-ts/data/img/career/livart/thumb${id}.jpg`}
						alt="refer"
					/>
				</Pic>
				<Text>
					<strong>{name}</strong>
					{/* <span>{detail}</span> */}
				</Text>
			</Link>
		</Wrap>
	);
};

export default Carousel;
