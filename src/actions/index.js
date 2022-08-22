import fetchCurrencies from '../servicesAPIS/fetchCurrencies';

export const SET_EMAIL = 'USER_EMAIL';
export const TYPE_EXPENSE = 'TYPE_EXPENSE';
export const TYPES_CURRENCY = 'TYPES_CURRENCY';
export const DELETE_BUTTON = 'DELETE_BUTTON';

export const setEmail = (email) => ({ type: SET_EMAIL, email });

export const userExpenses = (payload) => ({ type: TYPE_EXPENSE, payload });

export const currency = (payload) => ({ type: TYPES_CURRENCY, payload });

export const getCotation = (expenses) => async (dispatch) => {
  try {
    const data = await fetchCurrencies();
    return dispatch(userExpenses({
      ...expenses, exchangeRates: data,
    }));
  } catch (erro) {
    console.log(erro);
  }
};
