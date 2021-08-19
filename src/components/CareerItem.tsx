import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
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
`;

interface IcareeritemProps {
	id?: number;
	name?: string;
	detail?: string;
	lnk?: string;
}

const CareerItem: React.FunctionComponent<IcareeritemProps> = ({
	id,
	name,
	detail,
	lnk,
}) => {
	return (
		<Div>
			<dl>
				<dt>
					<a href={lnk}>{name}</a>
				</dt>
				<dd>{detail}</dd>
			</dl>
		</Div>
	);
};

export default CareerItem;
