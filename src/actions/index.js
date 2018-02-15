import * as type from 'actions/types';

export const increment = number => ({
  type: type.INCREMENT,
  payload: number,
});

export const decrement = number => ({
  type: type.DECREMENT,
  payload: number,
});
