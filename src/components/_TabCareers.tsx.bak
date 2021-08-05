import React from 'react';
import { Link } from 'react-router-dom';
import { SrOnly } from 'components/styles/globalStyle';
import styled from 'styled-components';
import TabCareer from 'components/TabCareer';

const Section = styled.section`
	margin-top: -2rem;
	/* background: red; */
`;
const Sronly = styled.h3`
	${SrOnly}
`;
const Tab = styled.div`
	position: relative;
	z-index: 1;
	margin: 0 3rem;
	padding: 1rem;
	background: ${({ theme }) => theme.colors.grayF};
	border-radius: 4rem;
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
	font-size: ${({ theme }) => theme.fonts.size.base};
	ul {
		display: flex;
		flex-direction: row;
		li {
			flex: 1;
			position: relative;
			&.is-active {
				a {
					color: ${({ theme }) => theme.colors.gray3};
				}
			}
			&:not(:last-child):after {
				position: absolute;
				right: 0;
				top: 0.4rem;
				content: '';
				width: 0.1rem;
				height: 1.4rem;
				background-color: ${({ theme }) => theme.colors.grayC};
			}
			a {
				display: block;
				text-align: center;
				color: ${({ theme }) => theme.colors.gray9};
			}
		}
	}
`;
const Careers = styled.div`
	margin-top: -2rem;
	padding: 3rem 3rem;
	background-color: #eeeff3;
`;

interface ItabcareersProps {
	company?: string;
	project?: Array<{
		title: string;
		detail: string;
		lnk: string;
	}>;
}

const TabCareers: React.FunctionComponent<ItabcareersProps> = ({
	company,
	project,
}) => {
	// console.log(company);
	// console.log(project[0].title);
	return (
		<Section>
			<Tab>
				<ul>
					<li>
						<Link to="/iam">I am ...</Link>
					</li>
					<li className="is-active">
						<Link to="/career">Career</Link>
					</li>
					<li>
						<Link to="/portfolio">Portfolio</Link>
					</li>
				</ul>
			</Tab>
			<Sronly>Career</Sronly>
			<Careers>
				<TabCareer />
				<TabCareer />
				<TabCareer />
				{/* {project && project.map((item) => <div>{item.title}</div>)} */}
			</Careers>
		</Section>
	);
};

export default TabCareers;
