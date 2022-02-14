import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">{ userEmail }</h3>
        <h3 data-testid="total-field">0</h3>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ user }) => ({
  userEmail: user.email,
});

export default connect(mapStateToProps)(Header);
