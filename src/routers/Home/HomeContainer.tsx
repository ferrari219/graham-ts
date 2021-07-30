import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { careerApi, profileApi } from 'api';

interface IhomeState {
	iam: object | null;
	// contact: object | null;
	livart: object | null;
	// jobKorea: object | null;
	// pulip: object | null;
	// him: object | null;
	// p4line: object | null;
	loading: boolean;
	error: string | null;
}

class HomeContainer extends Component<{}, IhomeState> {
	state = {
		iam: null,
		// contact: null,
		livart: null,
		// jobKorea: null,
		// pulip: null,
		// him: null,
		// p4line: null,
		loading: true,
		error: null,
	};

	async componentDidMount() {
		try {
			const { data: iam } = await profileApi.iam();
			// const { data: contact } = await profileApi.contact();
			const { data: livart } = await careerApi.livart();
			// const { data: jobKorea } = await careerApi.jobKorea();
			// const { data: pulip } = await careerApi.pulip();
			// const { data: him } = await careerApi.him();
			// const { data: p4line } = await careerApi.p4line();
			// console.log(iam.myname);
			// console.log(contact.email);
			// const { myname, job } = iam;
			// console.log(myname);
			this.setState({
				iam,
				// contact,
				livart,
				// jobKorea,
				// pulip,
				// him,
				// p4line,
			});
		} catch {
			this.setState({ error: "can't find information" });
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const {
			iam,
			// contact,
			livart,
			// jobKorea,
			// pulip,
			// him,
			// p4line,
			loading,
			error,
		} = this.state;
		return (
			<>
				{/* {myname} */}
				<HomePresenter
					iam={iam}
					// contact={contact}
					livart={livart}
					// jobKorea={jobKorea}
					// pulip={pulip}
					// him={him}
					// p4line={p4line}
					loading={loading}
					error={error}
				/>
			</>
		);
	}
}

export default HomeContainer;
