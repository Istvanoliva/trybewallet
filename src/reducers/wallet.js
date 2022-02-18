import { TYPE_EXPENSE, TYPES_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: ['USD', 'CAD', 'EUR', 'GBP', 'ARS',
    'BTC', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP'],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case TYPES_CURRENCY:
    return {
      ...state,
      currencies: payload,
    };
  case TYPE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  default:
    return state;
  }
};

export default walletReducer;
