import React from 'react';
import { availableTaxThresholds, DataRecord } from '../App';

interface InvoiceProps {
    data: DataRecord[];
}

const Invoice: React.FC<InvoiceProps> = ({data}) => {
    return (
        <div className="invoice">
            <h3>Pozycje</h3>

            <table>
                <thead>
                <tr>
                    <th>Lp.</th>
                    <th>Nazwa</th>
                    <th>Ilość</th>
                    <th>Netto</th>
                    <th>VAT</th>
                    <th>Wartość VAT</th>
                    <th>Brutto</th>
                </tr>
                </thead>

                <tbody>
                {data.map((entity, i) => (
                    //Should use more unique identifier for the key attribute, like uuid.
                    <tr key={entity.name}>
                        <td>{i + 1}.</td>
                        <td>{entity.name}</td>
                        <td>{entity.amount}</td>
                        <td>{entity.net.toFixed(2)}</td>
                        <td>{entity.taxThreshold}%</td>
                        <td>{entity.vat.toFixed(2)}</td>
                        <td>{entity.gross.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h3>Podsumowanie</h3>

            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Stawka VAT</th>
                    <th>Netto</th>
                    <th>Wartość VAT</th>
                    <th>Brutto</th>
                </tr>
                </thead>

                <tbody>
                {availableTaxThresholds.map(vat => (
                    <tr key={vat}>
                        <td></td>
                        <td>{vat}%</td>
                        <td>{data.reduce(((prev, curr) => prev + (curr.taxThreshold === vat ? curr.net : 0)), 0).toFixed(2)}</td>
                        <td>{data.reduce(((prev, curr) => prev + (curr.taxThreshold === vat ? curr.vat : 0)), 0).toFixed(2)}</td>
                        <td>{data.reduce(((prev, curr) => prev + (curr.taxThreshold === vat ? curr.gross : 0)), 0).toFixed(2)}</td>
                    </tr>
                ))}
                <tr>
                    <td>Razem:</td>
                    <td>X</td>
                    <td>{data.reduce(((prev, curr) => prev + curr.net), 0).toFixed(2)}</td>
                    <td>{data.reduce(((prev, curr) => prev + curr.vat), 0).toFixed(2)}</td>
                    <td>{data.reduce(((prev, curr) => prev + curr.gross), 0).toFixed(2)}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Invoice;