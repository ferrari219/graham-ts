import { menuApi } from 'api';
import React, { Component } from 'react';
import RightMenuPresenter from './RightMenuPresenter';

interface IrightmnuState {
  category: Array<object> | null;
  error: string | null;
}

class RightMenuContainer extends Component<{}, IrightmnuState> {
  state = {
    category: null,
    // loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data: category } = await menuApi.category();
      // console.log(category);
      this.setState({
        category,
      });
    } catch {
      this.setState({ error: "can't find information" });
    } finally {
      // this.setState({ loading: false });
    }
  }

  render() {
    const { category } = this.state;
    return <RightMenuPresenter category={category} />;
  }
}

export default RightMenuContainer;
