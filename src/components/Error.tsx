import React from 'react';

interface IerrorProps {
	error: string;
}

const Error: React.FunctionComponent<IerrorProps> = ({ error }) => {
	return (
		<section>
			<p>{error}</p>
		</section>
	);
};

export default Error;
