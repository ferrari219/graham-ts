import React from 'react';
import { baseURL } from 'api';
interface IprofileitemProps {
	item: string;
}

const ProfileItem: React.FunctionComponent<IprofileitemProps> = ({ item }) => {
	return (
		<li>
			<img src={`${baseURL}img/skill/sk_${item}.png`} alt={item} />
		</li>
	);
};

export default ProfileItem;
