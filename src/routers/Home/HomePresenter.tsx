import React from 'react';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Headers from 'components/Headers';
import Carousels from 'components/Carousels';
import TabCareers from 'components/TabCareers';
import styled from 'styled-components';
import bg from 'assets/img/bg.jpg';

const Main = styled.main`
	background: url(${bg});
	background-size: contain;
`;
interface IhomeProps {
	iam: object | null;
	// myname: string | null;
	// job: string | null;
	// contact: object | null;
	livart: object | null;
	// jobKorea: object | null;
	// pulip: object | null;
	// him: object | null;
	// p4line: object | null;
	loading: boolean;
	error: string | null;
}

const HomePresenter: React.FunctionComponent<IhomeProps> = ({
	iam,
	// contact,
	livart,
	// jobKorea,
	// pulip,
	// him,
	// p4line,
	loading,
	error,
}) => {
	// console.log(iam && iam.myname);
	// console.log(contact && contact.email);
	// console.log(livart && livart.project);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<Main>
					{iam && <Headers {...iam} />}
					<Carousels title="Recent Works" {...livart} />
					<TabCareers {...livart} />
					{error && <Error error={error} />}
					{/* <div>{JSON.stringify(iam)}</div> */}
					{/* <div>{JSON.stringify(contact)}</div> */}
				</Main>
			)}
		</>
	);
};

export default HomePresenter;
