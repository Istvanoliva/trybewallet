import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getCotation } from '../actions';
import fetchCurrencies from '../servicesAPIS/fetchCurrencies';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Trabalho',
      id: 0,
      // currencies: [],
    };
  }

  componentDidMount() {
    fetchCurrencies();
  }

  submitButton = async () => {
    const { getCotations } = this.props;

    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
    }));

    getCotations(this.state);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { getCurrencies } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    return (
      <form>
        <label htmlFor="value">
          <h4>Despesas:</h4>
          <input
            type="text"
            data-testid="value-input"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description">
          <h4>Descrição:</h4>
          <input
            type="text"
            data-testid="description-input"
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency">
          <h4>Moeda:</h4>
          <select
            name="currency"
            id="currency"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleChange }
          >
            {
              getCurrencies.map((coin) => (
                <option key={ coin }>{ coin }</option>
              ))
            }
          </select>
        </label>

        <label htmlFor="method">
          <h4>Forma de pagamento:</h4>
          <select
            name="method"
            id="method"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          <h4>Categoria:</h4>
          <select
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ this.submitButton }
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

WalletForm.propTypes = {
  getCurrencies: propTypes.func,
  getCotation: propTypes.func,
}.isRequired;

const mapStateToProps = ({ wallet: { currencies } }) => ({
  getCurrencies: currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCotations: (expense) => dispatch(getCotation(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
