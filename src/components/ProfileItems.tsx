import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
	h3 {
		padding: 2rem 0 1rem 0;
		font-size: ${({ theme }) => theme.fonts.size.lg};
		font-weight: ${({ theme }) => theme.fonts.weight.bold};
	}
	ul {
		overflow: hidden;
		width: 100%;
		li {
			float: left;
			width: 25%;
			padding: 0 1rem 1rem 1rem;
			img {
				width: 100%;
			}
		}
	}
`;

interface Iprofileitems {
	title: string;
	children: React.ReactNode;
}

const ProfileItems: React.FunctionComponent<Iprofileitems> = ({
	title,
	children,
}) => {
	return (
		<Section>
			<h3>{title}</h3>
			<ul>{children}</ul>
		</Section>
	);
};

export default ProfileItems;
