import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, getExpenses } = this.props;

    const total = getExpenses.reduce((cotation, expense) => cotation
    + (expense.exchangeRates[expense.currency].ask) * expense.value, 0);
    return (
      <header>
        <h3 data-testid="email-field">{ userEmail }</h3>
        <h3 data-testid="total-field">{ `Dispesa Total: ${total.toFixed(2)}`}</h3>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string,
  getExpenses: PropTypes.object,
}.isRequired;

const mapStateToProps = ({ user, wallet }) => ({
  userEmail: user.email,
  getExpenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);


