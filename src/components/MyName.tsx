import React from 'react';
import me from 'assets/img/me.png';
import styled from 'styled-components';

const My = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #f2f2f2;
	padding: 3rem;
	p {
		flex: 0 0 9rem;
		width: 7rem;
		height: 7rem;
		img {
			width: inherit;
			border-radius: 50%;
		}
	}
	span {
		flex: 1 auto;
		display: flex;
		align-items: center;
		font-weight: ${({ theme }) => theme.fonts.weight.bold};
		font-size: ${({ theme }) => theme.fonts.size.lg};
		/* color: ${({ theme }) => theme.colors.grayC}; */
	}
`;

interface ImynameProps {
	myname?: string;
}

const MyName: React.FunctionComponent<ImynameProps> = ({ myname }) => {
	return (
		<My>
			<p>
				<img src={me} alt="My Profile img" />
			</p>
			<span>{myname}</span>
		</My>
	);
};

export default MyName;
