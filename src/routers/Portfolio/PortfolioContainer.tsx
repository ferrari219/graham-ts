import { careerApi } from 'api';
import React, { Component } from 'react';
import PortfolioPresenter from './PortfolioPresenter';

interface IportfolioState {
  livart: object | null;
  jobKorea: object | null;
  pulip: object | null;
  him: object | null;
  p4line: object | null;
  loading: boolean;
  error: string | null;
}
class PortfolioContainer extends Component<{}, IportfolioState> {
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
      this.setState({ livart, jobKorea });
    } catch {
      this.setState({ error: "can't find information" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { livart, jobKorea, loading, error } = this.state;
    return (
      <>
        <PortfolioPresenter
          livart={livart}
          jobKorea={jobKorea}
          loading={loading}
          error={error}
        />
      </>
    );
  }
}

export default PortfolioContainer;
