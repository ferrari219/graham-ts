import React from 'react';
// import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Headers from 'components/Headers';
import CarouselWrap from 'components/CarouselWrap';
import Carousel from 'components/Carousel';

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
				<>
					{iam && <Headers {...iam} />}
					<CarouselWrap title="Recent Works">
						<Carousel />
						{/* {livart && <div>{JSON.stringify(livart)}</div>} */}
					</CarouselWrap>

					{error && <Error error={error} />}
					{/* <div>{JSON.stringify(iam)}</div> */}
					{/* <div>{JSON.stringify(contact)}</div> */}
				</>
			)}
		</>
	);
};

export default HomePresenter;
