import { useFoodList } from "../hooks/useFoodList";
import { FoodItem } from "./FoodItem";
import { Controls } from "./Controls";
import './FoodList.css'
import { AddFood } from "./AddFood";


export function FoodList() {
    
    const { foodList, existEmptyItems, enableCreation, deleteEmptyItems, markItemToDelete, addFood, switchCreationMode, editFood, loading } = useFoodList()

    const renderList = loading ? 
        <span class="loader"></span> : (
            foodList.length < 1 ? 
                <h3>There is no food stored</h3> :
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
        )
   
    return (
        <>
            <Controls
                enableCreation={enableCreation}
                onsSitchCreationMode={switchCreationMode}
                existEmptyItems={existEmptyItems}
                deleteEmptyItems={deleteEmptyItems}
            />
            <div>
                <ul className="food_list__container">
                    { renderList }
                    {
                        enableCreation && 
                        <li>
                            <AddFood 
                                onCancel={switchCreationMode}
                                onSubmit={addFood}
                            />
                        </li>
                    }
                </ul>
            </div>
        </>
    )
}