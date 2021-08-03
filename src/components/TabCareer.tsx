import React from 'react';
import { Link } from 'react-router-dom';
import { SrOnly } from 'components/styles/globalStyle';
import styled from 'styled-components';

const Section = styled.section`
	margin-top: -2rem;
	padding: 0 3rem;
	/* background: red; */
`;
const Sronly = styled.h3`
	${SrOnly}
`;
const Tab = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem;
	background: ${({ theme }) => theme.colors.grayF};
	border-radius: 4rem;
	color: ${({ theme }) => theme.colors.gray9};
	a {
		display: block;
		flex: 1;
		text-align: center;
	}
`;

interface ItabcareerProps {
	company?: string;
	project?: Array<{
		title: string;
		detail: string;
		lnk: string;
	}>;
}

const TabCareer: React.FunctionComponent<ItabcareerProps> = ({
	company,
	project,
}) => {
	// console.log(company);
	// console.log(project[0].title);
	return (
		<Section>
			<Tab>
				<Link to="/iam">I am</Link>
				<Link to="/career">Career</Link>
				<Link to="/portfolio">Portfolio</Link>
			</Tab>
			<Sronly>Career</Sronly>
			<div>
				<div>
					<Link to="/career/123">
						<p>사진</p>
						<dl>
							<dt>프로젝트명</dt>
							<dd>완료일</dd>
						</dl>
					</Link>
				</div>
				{/* {project && project.map((item) => <div>{item.title}</div>)} */}
			</div>
		</Section>
	);
};

export default TabCareer;
