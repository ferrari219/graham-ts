import React from 'react';
// import { Link } from 'react-router-dom';
import { SrOnly } from 'components/styles/globalStyle';
import styled from 'styled-components';
import PortfolioItem from './PortfolioItem';

const Section = styled.section`
	padding: 0 2rem;
	/* background: red; */
`;
const Sronly = styled.h3`
	${SrOnly}
`;

interface IportfolioitemsProps {
	company?: string | null;
	date?: string | null;
	job?: string | null;
	project?: Array<{
		id: number;
		name: string;
		detail: string;
		lnk: string;
	}> | null;
}

const PortfolioItems: React.FunctionComponent<IportfolioitemsProps> = ({
	company,
	date,
	job,
	project,
}) => {
	return (
		<Section>
			<Sronly>Portfolio</Sronly>
			<div>
				{project &&
					[...project].map((item, index) => (
						<PortfolioItem {...item} key={index} />
					))}
			</div>
		</Section>
	);
};

export default PortfolioItems;
