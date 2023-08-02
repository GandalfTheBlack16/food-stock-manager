import { RiDeleteBin2Line, RiEdit2Line } from 'react-icons/ri'
import './FoodItem.css'
import { useFoodItem } from '../hooks/useFoodItem';
import { EditFood } from './EditFood';

export function FoodItem(props) {

    const { foodId, foodName, foodQuantity, outOfStock, onDeleteItem, onEditItem } = props;

    const {
        disabled,
        quantity,
        editMode,
        deleteItem,
        switchEditMode,
        editQuantity
    } = useFoodItem({ id: foodId, outOfStock, defaultQuantity: foodQuantity, onDeleteItem })
    
    const onEditFood = (food) => {
        switchEditMode()
        editQuantity(food.quantity)
        onEditItem(food)
    }

    return (
        <>
        { editMode ? 
            <EditFood
                foodId={foodId} 
                foodName={foodName}
                foodQuantity={foodQuantity}
                onEditFood={onEditFood}
                onCancelEdit={switchEditMode}
            /> : 
            <div className='food_item__container'>
                <div className={disabled ? 'food_item__disabled': ''}>
                    <span>{ foodName } x { quantity }</span>
                </div>
                <div className='food_item__buttons'>
                    <button
                        onClick={switchEditMode}
                    ><RiEdit2Line /></button>
                    <button
                        disabled={disabled}
                        onClick={deleteItem}
                    ><RiDeleteBin2Line /></button>
                </div>
            </div>
        }    
        </>
    )
}