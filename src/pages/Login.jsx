import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { setEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.validateButton);
  }

  validateButton = () => {
    const { email, password } = this.state;

    const regex = /^[\w._-]+@([\w._-]+\.)+[\w]/g;
    const validateEmail = !regex.test(email);

    const minLenght = 6;
    const validatePassword = password.length < minLenght;

    this.setState({
      disabled: validateEmail || validatePassword,
    });
  }

  submitButton = () => {
    const { email } = this.state;
    const { history, submitUserInfo } = this.props;
    submitUserInfo(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <main>
        <h1>Trybewallet</h1>
        <form>
          <label htmlFor="email">
            <h3>Email:</h3>
            <input
              type="email"
              data-testid="email-input"
              id="email"
              name="email"
              value={ email }
              placeholder="Email"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="password">
            <h3>Senha:</h3>
            <input
              type="password"
              data-testid="password-input"
              id="password"
              name="password"
              value={ password }
              placeholder="Senha"
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="button"
            disabled={ disabled }
            onClick={ this.submitButton }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  history: propTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  submitUserInfo: (userEmail) => dispatch(setEmail(userEmail)),
});

export default connect(null, mapDispatchToProps)(Login);

// Referências :
// https://www.youtube.com/watch?v=qdE6Qni8sCg&ab_channel=serfrontend //
// https://regexr.com/ //
