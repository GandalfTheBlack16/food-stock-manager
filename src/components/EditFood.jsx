import { useFoodForm } from '../hooks/useFoodForm'
import { RiCloseCircleLine, RiCheckLine } from 'react-icons/ri'
import './EditFood.css'

export function EditFood(props) {

    const { foodId, foodName, foodQuantity, onEditFood, onCancelEdit } = props
    
    const submitEdit = ({ name, quantity }) => {
       onEditFood({
        id: foodId,
        name,
        quantity
       })
    }

    const { name, onNameChange, quantity, onQuantityChange, submit } = useFoodForm({
        currName: foodName, 
        currQuantity: foodQuantity, 
        onSubmit: submitEdit
    })


    return (
        <div className='edit_food__container'>
            <div className='edit_food__fields'>
                <input 
                    type="text" 
                    placeholder='Name'
                    className='edit_food__name_field'
                    value={name}
                    onChange={onNameChange}
                />
                <input 
                    type='number'
                    placeholder='Quantity'
                    className='edit_food__quantity_field'
                    value={quantity}
                    onChange={onQuantityChange}
                />
            </div>
            <div className='edit_food__buttons'>
                <button
                    onClick={onCancelEdit}
                ><RiCloseCircleLine /></button>
                <button
                    onClick={submit}
                ><RiCheckLine /></button>
            </div>
        </div>
    )
}