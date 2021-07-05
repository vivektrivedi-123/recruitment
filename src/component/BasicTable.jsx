import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import data from '../JobData.json'

const products = data.candidate;

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

//addProducts(50);

export default class SelectAllOnAllPage extends React.Component {

  onSelectAll = (isSelected) => {
    if (isSelected) {
        console.log(isSelected)
      return products.map(row => row.id);
    } else {
      return [];
    }
  }

  render() {
    const selectRowProp = {
      mode: 'checkbox',
      clickToSelect: true,
      onSelectAll: this.onSelectAll
    };

    return (
      <BootstrapTable ref='table' data={ products } selectRow={ selectRowProp } pagination>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='JobTitle'>Applied For</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}