import React from 'react';
interface ImenuProps {
	id?: number;
	name?: string;
	lnk?: string;
}

const Menu: React.FunctionComponent<ImenuProps> = ({ id, name, lnk }) => {
	//   console.log(id, name, typeof lnk);
	return (
		<>
			<li>
				<a href={lnk}>{name}</a>
			</li>
		</>
	);
};

export default Menu;
