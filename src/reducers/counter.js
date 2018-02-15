const INITIAL_STATE = {
  number: 0,
};

const counter = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case 'INCREMENT':
      return {
        number: state.number + 1,
      };
    case 'DECREMENT':
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
