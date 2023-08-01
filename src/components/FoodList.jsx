import { useFoodList } from "../hooks/useFoodList";
import { FoodItem } from "./FoodItem";
import './FoodList.css'


export function FoodList() {
    
    const { foodList } = useFoodList()
   
    return (
        foodList.length < 1 ? 
        <h3>There is no food stored</h3> :
        <ul className="food_list__container">
            {foodList.map(item => {
                return <li key={item.id}>
                    <FoodItem 
                        foodName={item.name}
                        foodQuantity={item.quantity}
                        outOfStock={item.quantity < 1}
                    />
                </li>
            })
            }
        </ul>
    )
}