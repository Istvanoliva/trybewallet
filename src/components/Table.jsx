import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expensesInfos } = this.props;
    const tableInfo = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

    return (

      <table>
        <thead>
          <tr>
            {
              tableInfo
                .map((description, index) => <th key={ index }>{ description }</th>)
            }
          </tr>
        </thead>

        <tbody>
          {expensesInfos.map((expenses) => (
            <tr key={ expenses.id } id={ expenses.id }>
              <td>{expenses.description}</td>
              <td>{expenses.tag}</td>
              <td>{expenses.currency}</td>
              <td>{expenses.method}</td>
              <td>{Number(expenses.value).toFixed(2)}</td>
              <td>{expenses.exchangeRates[expenses.currency].name.split('/')[0]}</td>
              <td>
                {Number(expenses.exchangeRates[expenses.currency].ask).toFixed(2)}
              </td>
              <td>
                {
                  Number(expenses.exchangeRates[expenses.currency].ask
                    * expenses.value).toFixed(2)
                }
              </td>
              <td>Real</td>
            </tr>
          ))}

        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expensesInfos: propTypes.array,
}.isRequired;

const mapStateToProps = (state) => {
  const { wallet: { expenses } } = state;
  return {
    expensesInfos: expenses,
  };
};

export default connect(mapStateToProps)(Table);

// Créditos: Ajuda do Yang Wom Turma 17 - Requisito 07
