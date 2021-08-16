import React from 'react';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Headers from 'components/Headers';

interface IcareerProps {
	livart: object | null;
	jobkorea: object | null;
	pulip: object | null;
	him: object | null;
	p4line: object | null;
	loading: false;
	error: string | null;
}

const CareerPresenter: React.FunctionComponent<IcareerProps> = ({
	livart,
	jobkorea,
	pulip,
	him,
	p4line,
	loading,
	error,
}) => {
	return (
		<>
			<div>
				<Headers current="Career" />
			</div>
		</>
	);
};

export default CareerPresenter;
