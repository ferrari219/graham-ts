import React from 'react';

interface IprofileitemProps {
	item: string;
}

const ProfileItem: React.FunctionComponent<IprofileitemProps> = ({ item }) => {
	return (
		<li>
			<img
				src={`https://ferrari219.github.io/graham-ts/data/img/skill/sk_${item}.png`}
				alt={item}
			/>
		</li>
	);
};

export default ProfileItem;
