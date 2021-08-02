import React from 'react';

interface IcarouselProps {
	title: string;
	children: React.ReactNode;
}

const CarouselList: React.FunctionComponent<IcarouselProps> = ({
	title,
	children,
}) => {
	return (
		<div>
			<h3>{title}</h3>
			<div>{children}</div>
		</div>
	);
};

export default CarouselList;
