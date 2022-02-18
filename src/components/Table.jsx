import React, { Component } from 'react';

export default class Table extends Component {
  render() {
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
      </table>
    );
  }
}
