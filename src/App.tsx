import React, { useState } from 'react';
import Invoice from './components/Invoice';
import Form from './components/Form';

export interface DataRecord {
    name: string;
    amount: number,
    taxThreshold: 7 | 15 | 23,
    net: number,
    vat: number,
    gross: number,
}

export const availableTaxThresholds = [7, 15, 23];

const initialData: DataRecord[] = [{
    name: 'Produkt 1',
    amount: 1,
    taxThreshold: 7,
    net: 10,
    vat: 5,
    gross: 14,
}, {
    name: 'Produkt 2',
    amount: 1,
    taxThreshold: 7,
    net: 10,
    vat: 5,
    gross: 14,
}, {
    name: 'Produkt 3',
    amount: 1,
    taxThreshold: 15,
    net: 10,
    vat: 3,
    gross: 14,
}]

function App() {
    const [data, setData] = useState<DataRecord[]>(initialData);

    const handleDataUpdate = (record: DataRecord) => {
        setData([...data, record])
    }

    return (
        <div className="App">
            <Form updateData={handleDataUpdate} />
            <Invoice data={data}/>
        </div>
    );
}

export default App;
