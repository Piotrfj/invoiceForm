import React from 'react';
import { useForm } from 'react-hook-form';
import { availableTaxThresholds, DataRecord } from '../App';

interface FormProps {
    updateData: (value: DataRecord) => void
}

const Form: React.FC<FormProps> = ({updateData}) => {
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = data => {
        updateData(data);
        reset();
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="from__element">
                <label htmlFor="name">Nazwa</label>
                <input id="name" {...register("name", {required: true})}/>
            </div>

            <div className="from__element">
                <label htmlFor="amount">Ilość</label>
                <input id="amount" {...register("amount", {required: true, valueAsNumber: true})}/>
            </div>

            <div className="from__element">
                <label htmlFor="net">Netto</label>
                <input id="net" {...register("net", {required: true, valueAsNumber: true})}/>
            </div>

            <div className="from__element">
                <label htmlFor="taxThreshold">Stawka VAT</label>
                <select id="taxThreshold" {...register("taxThreshold",
                    {
                        required: true,
                        valueAsNumber: true
                    })}>
                    {availableTaxThresholds.map(value => (
                        <option value={value}>{value}%</option>
                    ))}
                </select>
            </div>

            <div className="from__element">
                <label htmlFor="vat">VAT</label>
                <input id="vat" {...register("vat", {required: true, valueAsNumber: true})}/>
            </div>

            <div className="from__element">
                <label htmlFor="gross">Brutto</label>
                <input id="gross" {...register("gross", {required: true, valueAsNumber: true})}/>
            </div>

            <button>Dodaj rekord</button>
        </form>
    );
};

export default Form;