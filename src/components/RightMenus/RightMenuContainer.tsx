import { menuApi, profileApi } from 'api';
import React, { Component } from 'react';
import RightMenuPresenter from './RightMenuPresenter';

interface IrightmnuState {
	category: Array<object> | null;
	iam: Array<object> | null;
	error: string | null;
}

class RightMenuContainer extends Component<{}, IrightmnuState> {
	state = {
		category: null,
		// loading: true,
		iam: null,
		error: null,
	};

	async componentDidMount() {
		try {
			const { data: category } = await menuApi.category();
			const { data: iam } = await profileApi.iam();
			// console.log(category);
			this.setState({
				category,
				iam,
			});
		} catch {
			this.setState({ error: "can't find information" });
		} finally {
			// this.setState({ loading: false });
		}
	}

	render() {
		const { category, iam } = this.state;
		return <RightMenuPresenter category={category} iam={iam} />;
	}
}

export default RightMenuContainer;
