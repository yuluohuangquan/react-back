const defalutState = {
  count: 0
};

const reducer = (state = defalutState, action: any) => {
  let newState;
  switch (action.type) {
    case "INCREASE":
      newState = JSON.parse(JSON.stringify(state));
      newState.count = action.value + 1;
      return newState;
    case "DECREASE":
      newState = JSON.parse(JSON.stringify(state));
      newState.count = action.value - 1;
      return newState;
    default:
      return state;
  }
};

export default reducer;
