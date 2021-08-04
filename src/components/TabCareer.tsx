import React from 'react';
import refer from 'assets/img/livart/thumb3.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
	display: flex;
	flex-direction: row;
	padding: 2rem 0;
	p {
		flex: 0 6rem;
		img {
			width: 100%;
			border-radius: 0.5rem;
			box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
			/* opacity: 0.2; */
		}
	}
	dl {
		flex: 1;
		padding: 1rem 2rem;
		dt {
			padding: 0.5rem 0;
			font-size: ${({ theme }) => theme.fonts.size.base};
			font-weight: ${({ theme }) => theme.fonts.weight.bold};
			color: ${({ theme }) => theme.colors.gray3};
		}
		dd {
			font-size: ${({ theme }) => theme.fonts.size.sm};
			line-height: 2rem;
			color: ${({ theme }) => theme.colors.gray6};
		}
	}
`;

const TabCareer = () => {
	return (
		<Link to="/career/123">
			<Div>
				<p>
					<img src={refer} alt="" />
				</p>
				<dl>
					<dt>버스커 모바일웹 (사이드프로젝트)</dt>
					<dd>
						지인들과 제작한 사이드 프로젝트, 기획+디자인+프론트엔드
					</dd>
				</dl>
			</Div>
		</Link>
	);
};

export default TabCareer;
