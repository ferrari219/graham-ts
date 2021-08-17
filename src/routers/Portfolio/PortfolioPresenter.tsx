import React from 'react';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Headers from 'components/Headers';
import styled from 'styled-components';

const Main = styled.main`
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.grayF}; ;
`;
interface IportfolioProps {
	loading: boolean;
	error: string | null;
}

const PortfolioPresenter: React.FunctionComponent<IportfolioProps> = ({
	loading,
	error,
}) => {
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<Main>
					<Headers current="Portfolio" />
					{error && <Error error={error} />}
				</Main>
			)}
		</>
	);
};

export default PortfolioPresenter;
