import React from 'react';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Headers from 'components/Headers';
import Profiles from 'components/Profiles';
import styled from 'styled-components';

const Main = styled.main`
	// min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.grayF}; ;
`;
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
				<Main>
					<Headers current="I am..." dark={true} />
					<Profiles {...iam} />
					{error && <Error error={error} />}
				</Main>
			)}
		</>
	);
};

export default IamPresenter;
