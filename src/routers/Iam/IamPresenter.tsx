import React from 'react';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Headers from 'components/Headers';
import ColumnBox from 'components/ColumnBox';
import Profile from 'components/Profile';

interface IiamProps {
	iam: object | null;
	loading: boolean;
	error: string | null;
}

const IamPresenter: React.FunctionComponent<IiamProps> = ({
	iam,
	loading,
	error,
}) => {
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<main>
					<Headers current="I am..." />
					<ColumnBox>
						<Profile {...iam} />
					</ColumnBox>
					{error && <Error error={error} />}
				</main>
			)}
		</>
	);
};

export default IamPresenter;
