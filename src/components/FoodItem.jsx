import { RiDeleteBin2Line, RiEdit2Line } from 'react-icons/ri'
import './FoodItem.css'
import { useFoodItem } from '../hooks/useFoodItem';

export function FoodItem(props) {

    // eslint-disable-next-line react/prop-types
    const { foodName, foodQuantity, outOfStock } = props;

    const {
        disabled,
        quantity,
        deleteItem
    } = useFoodItem({ outOfStock, defaultQuantity: foodQuantity }) 

    return (
      <div className='food_item__container'>
        <div className={disabled && 'food_item__disabled'}>
            <span>{ foodName } x { quantity }</span>
        </div>
        <div className='food_item__buttons'>
            <button><RiEdit2Line /></button>
            <button
                disabled={disabled}
                onClick={deleteItem}
            ><RiDeleteBin2Line /></button>
        </div>
      </div>
    )
}