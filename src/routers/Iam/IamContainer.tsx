import { profileApi } from 'api';
import React, { Component } from 'react';
import IamPresenter from './IamPresenter';

interface IiamState {
	iam: object | null;
	loading: boolean;
	error: string | null;
}
class IamContainer extends Component<{}, IiamState> {
	state = {
		iam: null,
		loading: true,
		error: null,
	};

	async componentDidMount() {
		try {
			const { data: iam } = await profileApi.iam();
			this.setState({
				iam,
			});
			// console.log(iam);
		} catch {
			this.setState({ error: "can't find information" });
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { iam, loading, error } = this.state;
		return <IamPresenter iam={iam} loading={loading} error={error} />;
	}
}

export default IamContainer;
