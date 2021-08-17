import React from 'react';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Headers from 'components/Headers';
import styled from 'styled-components';

const Main = styled.main`
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.grayF}; ;
`;
interface IcareerProps {
	livart: object | null;
	jobKorea: object | null;
	pulip: object | null;
	him: object | null;
	p4line: object | null;
	loading: boolean;
	error: string | null;
}

const CareerPresenter: React.FunctionComponent<IcareerProps> = ({
	livart,
	jobKorea,
	pulip,
	him,
	p4line,
	loading,
	error,
}) => {
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<Main>
					<Headers current="Career" />
					{error && <Error error={error} />}
				</Main>
			)}
		</>
	);
};

export default CareerPresenter;
