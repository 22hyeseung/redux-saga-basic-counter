import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import 'App.css';

const App = props => {
  console.log(props.number);
  return (
    <div className="App">
      <h1>Hello {props.number}</h1>
      <p>Increment or Decrement after 3 seconds</p>
      <Button onClick={props.onIncrementAsync} type="primary" ghost>
        {' '}
        +1{' '}
      </Button>
      <Button onClick={props.onDecrementAsync} type="danger" ghost>
        {' '}
        -1{' '}
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    number: state.counter.number,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementAsync: () => dispatch({ type: 'INCREMENT_ASYNC' }),
    onDecrementAsync: () => dispatch({ type: 'DECREMENT_ASYNC' }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
