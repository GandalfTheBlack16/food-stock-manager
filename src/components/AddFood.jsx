import { useFoodForm } from '../hooks/useFoodForm'
import './AddFood.css'

export function AddFood(props) {

    const { onSubmit, onCancel } = props

    const {
        name,
        onNameChange,
        quantity,
        onQuantityChange,
        submit
    } = useFoodForm({ onSubmit })

    return (
        <div className='add_food__container'>
            <input 
                type='text'
                placeholder='Name'
                value={name}
                onChange={onNameChange}
            />
            <input 
                type='number'
                placeholder='Quantity'
                className='add_food__quantity_field'
                value={quantity}
                onChange={onQuantityChange}
            />
            <div className='add_food__buttons'>
                <button
                    onClick={onCancel}
                >Cancel</button>
                <button
                    onClick={submit}
                >Create</button>
            </div>
        </div>
    )
}