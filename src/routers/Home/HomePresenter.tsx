import React from 'react';
// import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Error from 'components/Error';

interface IhomeProps {
	iam: Array<string> | null;
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
}) => {
	console.log(iam);
	console.log(contact);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					{iam && iam.map((item) => <div>{item.myname}</div>)}
					{/* <div>Home</div> */}
					{error && <Error error={error} />}
					{/* <div>{JSON.stringify(iam)}</div>
					<div>{JSON.stringify(contact)}</div> */}
				</>
			)}
		</>
	);
};

export default HomePresenter;
