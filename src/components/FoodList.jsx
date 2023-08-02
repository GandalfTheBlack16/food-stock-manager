import { useFoodList } from "../hooks/useFoodList";
import { FoodItem } from "./FoodItem";
import { Controls } from "./Controls";
import './FoodList.css'
import { AddFood } from "./AddFood";


export function FoodList() {
    
    const { foodList, existEmptyItems, enableCreation, deleteEmptyItems, markItemToDelete, addFood, switchCreationMode, editFood } = useFoodList()
   
    return (
        <>
            <Controls
                enableCreation={enableCreation}
                onsSitchCreationMode={switchCreationMode}
                existEmptyItems={existEmptyItems}
                deleteEmptyItems={deleteEmptyItems}
            />
            <div>
                {foodList.length < 1 ? 
                <h3>There is no food stored</h3> :
                <ul className="food_list__container">
                    {
                        foodList.map(item => {
                            return <li key={item.id}>
                                <FoodItem
                                    foodId={item.id} 
                                    foodName={item.name}
                                    foodQuantity={item.quantity}
                                    outOfStock={item.quantity < 1}
                                    onDeleteItem={markItemToDelete}
                                    onEditItem={editFood}
                                />
                            </li>
                        })
                    }
                    {
                        enableCreation && 
                        <li>
                            <AddFood 
                                onCancel={switchCreationMode}
                                onSubmit={addFood}
                            />
                        </li>
                    }
                </ul>}
            </div>
        </>
    )
}