import React from 'react';
// import PropTypes from 'prop-types';
import Error from 'components/Error';
import Loader from 'components/Loader';

interface IdetailProps {
	livart: object | null;
	jobKorea: object | null;
	pulip: object | null;
	him: object | null;
	p4line: object | null;
	loading: boolean;
	error: string | null;
}

const DetailPresenter: React.FunctionComponent<IdetailProps> = ({
	livart,
	jobKorea,
	pulip,
	him,
	p4line,
	loading,
	error,
}) => (
	<>
		{loading ? (
			<Loader />
		) : (
			<>
				<div>Detail</div>
				{error && <Error error={error} />}
				<div>{JSON.stringify(livart)}</div>
			</>
		)}
	</>
);

// DetailPresenter.propTypes = {
// 	livart: PropTypes.object,
// 	jobKorea: PropTypes.object,
// 	pulip: PropTypes.object,
// 	him: PropTypes.object,
// 	p4line: PropTypes.object,
// 	loading: PropTypes.bool.isRequired,
// 	error: PropTypes.string,
// };

export default DetailPresenter;
