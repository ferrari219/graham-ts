import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';
import { careerApi } from 'api';

interface IdetailState {
	livart: object | null;
	jobKorea: object | null;
	pulip: object | null;
	him: object | null;
	p4line: object | null;
	loading: boolean;
	error: string | null;
}

class DetailContainer extends Component<{}, IdetailState> {
	state = {
		livart: null,
		jobKorea: null,
		pulip: null,
		him: null,
		p4line: null,
		loading: true,
		error: null,
	};

	async componentDidMount() {
		try {
			const { data: livart } = await careerApi.livart();
			const { data: jobKorea } = await careerApi.jobKorea();
			const { data: pulip } = await careerApi.pulip();
			const { data: him } = await careerApi.him();
			const { data: p4line } = await careerApi.p4line();
			// console.log(jobKorea);
			this.setState({
				livart,
				jobKorea,
				pulip,
				him,
				p4line,
			});
		} catch {
			this.setState({ error: "can't find information" });
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { livart, jobKorea, pulip, him, p4line, loading, error } =
			this.state;
		return (
			<DetailPresenter
				livart={livart}
				jobKorea={jobKorea}
				pulip={pulip}
				him={him}
				p4line={p4line}
				loading={loading}
				error={error}
			/>
		);
	}
}

export default DetailContainer;
