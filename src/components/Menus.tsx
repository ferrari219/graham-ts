import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';

const Ul = styled.ul`
	padding: 3rem;
	li {
		padding: 1rem 0;
	}
`;

interface ImenusProps {
	category?: Array<{
		id: number;
		name: string;
		lnk: string;
	}>;
}

const Menus: React.FunctionComponent<ImenusProps> = ({ category }) => {
	// console.log(category);
	return (
		<Ul>
			{category &&
				[...category].map((item) => (
					<Menu
						key={item.id}
						id={item.id}
						name={item.name}
						lnk={item.lnk}
					/>
				))}
		</Ul>
	);
};

export default Menus;
