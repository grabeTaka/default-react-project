import React from 'react'
import '../CSS/ItemTable.css'

export default function ItemTable({ products }: any) {
  return (
    <table>
      <thead className="head">
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Preço antigo</th>
          <th>Novo preço</th>
          <th>Pode ser Atualizado</th>
          <th>Erro</th>
        </tr>
      </thead>
      <tbody className="body">
        {products.map((item: any, index: number) => (
          <tr key={index}>
            <td>{item.product_code}</td>
            <td>{item.name}</td>
            <td>{item.oldPrice}</td>
            <td>{item.new_price}</td>
            <td>{item.updated ? 'Sim' : 'Não'}</td>
            <td data-cy="error">{item.error ? (item.error).slice(0, -2) : 'Não'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
