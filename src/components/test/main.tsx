import React from "react";
import { Button } from "antd";
import store from "../../store";

interface MainProps {
  }
  interface MainState {
    count: number
  }

class Test extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
    window.console.log(store.getState());
  }

  handleStoreChange() {
    window.console.log(store.getState());
    this.setState(store.getState());
  }

  increase = () => {
    const { count } = this.state;
    const action = {
      type: "INCREASE",
      value: count,
    };
    store.dispatch(action);
  };

  decrease = () => {
    const { count } = this.state;
    const action = {
      type: "DECREASE",
      value: count,
    };
    store.dispatch(action);
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <p>{"测试页面"}</p>
        {count}
        <Button type="dashed" onClick={this.increase}>
          {"新增"}
        </Button>
        <Button type="primary" onClick={this.decrease}>
          {"删除"}
        </Button>
        <Button type="default">{"查询"}</Button>
      </>
    );
  }
}

export default Test;
