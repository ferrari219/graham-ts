import React, { Component } from 'react';
import PortfolioPresenter from './PortfolioPresenter';

interface IportfolioState {
	loading: boolean;
	error: string | null;
}
class PortfolioContainer extends Component<{}, IportfolioState> {
	state = {
		loading: true,
		error: null,
	};

	async componentDidMount() {
		try {
		} catch {
			this.setState({ error: "can't find information" });
		} finally {
			this.setState({ loading: false });
		}
	}
	render() {
		const { loading, error } = this.state;
		return (
			<>
				<PortfolioPresenter loading={loading} error={error} />
			</>
		);
	}
}

export default PortfolioContainer;
