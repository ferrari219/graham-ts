import React from 'react';
import styled from 'styled-components';

const Careers = styled.div`
	margin-top: -2rem;
	padding: 3rem 3rem;
	color: ${({ theme }) => theme.colors.gray6};
`;
const Company = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	/* margin: 0 0 2rem 0; */
	padding: 2rem 0 2rem 0;
	/* border-bottom: 1px solid #ccc; */
	h4 {
		flex: 1;
		font-size: ${({ theme }) => theme.fonts.size.md};
		font-weight: ${({ theme }) => theme.fonts.weight.bold};
		color: ${({ theme }) => theme.colors.gray3};
	}
	span {
		flex: 0 10rem;
		font-size: ${({ theme }) => theme.fonts.size.sm};
		letter-spacing: 0;
		text-align: right;
	}
`;
const Wrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: space-between;
`;
const Deco = styled.div`
	flex: 0 3rem;
	display: flex;
	flex-direction: column;
	padding: 0.5rem 1rem 0.8rem 0;
	strong {
		display: block;
		width: 1rem;
		height: 1rem;
		margin: 0 auto;
		border: 0.2rem solid ${({ theme }) => theme.colors.grayC};
		border-radius: 50%;
	}
	span {
		flex: 1;
		display: block;
		width: 1px;
		margin: 0 auto;
		background: ${({ theme }) => theme.colors.grayC};
	}
`;
const Project = styled.div`
	flex: 1;
`;
interface IcareerProps {
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

const CareerItems: React.FunctionComponent<IcareerProps> = ({
	company,
	date,
	job,
	project,
}) => {
	return (
		<Careers>
			<Company>
				<h4>{company}</h4>
				<span>{date}</span>
			</Company>
			<Wrap>
				<Deco>
					<strong></strong>
					<span></span>
					<strong></strong>
				</Deco>
				<Project>
					{project &&
						[...project]
							.reverse()
							.map((item, index) => (
								<p key={index}>{item.name}</p>
							))}
				</Project>
			</Wrap>
		</Careers>
	);
};

export default CareerItems;
