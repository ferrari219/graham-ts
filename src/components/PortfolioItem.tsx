import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	background-color: ${({ theme }) => theme.colors.grayF};
	border-radius: 2rem;
	& + div {
		margin: 2rem 0;
	}
	p {
		overflow: hidden;
		width: inherit;
		height: 30rem;
		/* background-color: #f3d46b; */
		border-radius: 2rem 2rem 0 0;
		/* text-indent: -5000px; */
		img {
			width: 100%;
		}
	}
	dl {
		padding: 2rem;
		dt {
			padding-bottom: 0.5rem;
			font-weight: ${({ theme }) => theme.fonts.weight};
			font-size: ${({ theme }) => theme.fonts.size.base};
			color: ${({ theme }) => theme.colors.gray3};
		}
		dd {
			padding-bottom: 1.5rem;
			font-weight: ${({ theme }) => theme.fonts.weight};
			font-size: ${({ theme }) => theme.fonts.size.sm};
			color: ${({ theme }) => theme.colors.gray6};
		}
	}
`;

interface IportfolioitemProps {
	id?: number;
	name?: string;
	detail?: string;
	lnk?: string;
}

const PortfolioItem: React.FunctionComponent<IportfolioitemProps> = ({
	id,
	name,
	detail,
	lnk,
}) => {
	return (
		<Div>
			<p>
				<img
					src={`https://ferrari219.github.io/graham-ts/data/img/career/livart/thumb${id}.jpg`}
					alt=""
				/>
			</p>
			<dl>
				<dt>{name}</dt>
				<dd>{detail}</dd>
			</dl>
		</Div>
	);
};

export default PortfolioItem;
