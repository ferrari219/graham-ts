import React from 'react';
// import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Error from 'components/Error';

interface IhomeProps {
	iam: object | null;
	contact: object | null;
	livart: object | null;
	jobKorea: object | null;
	pulip: object | null;
	him: object | null;
	p4line: object | null;
	loading: boolean;
	error: string | null;
}

const HomePresenter: React.FunctionComponent<IhomeProps> = ({
	iam,
	contact,
	livart,
	jobKorea,
	pulip,
	him,
	p4line,
	loading,
	error,
}) => (
	// console.log(jobKorea);
	<>
		{loading ? (
			<Loader />
		) : (
			<>
				<div>Home</div>
				{error && <Error error={error} />}
				<div>{JSON.stringify(iam)}</div>
				<div>{JSON.stringify(contact)}</div>
			</>
		)}
	</>
);

// HomePresenter.propTypes = {
// 	iam: PropTypes.object,
// 	contact: PropTypes.object,
// 	livart: PropTypes.object,
// 	jobKorea: PropTypes.object,
// 	pulip: PropTypes.object,
// 	him: PropTypes.object,
// 	p4line: PropTypes.object,
// 	loading: PropTypes.bool.isRequired,
// 	error: PropTypes.string,
// };

export default HomePresenter;
