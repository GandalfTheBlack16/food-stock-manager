import { useEffect } from "react"
import { useState } from "react"

const FOOD_MOCK = [
    {
        id: 1,
        name: 'Burguer',
        quantity: 15
    },
    {
        id: 2,
        name: 'Pizza',
        quantity: 1
    },
    {
        id: 3,
        name: 'Steaks',
        quantity: 15
    },
    {
        id: 4,
        name: 'Squeed',
        quantity: 0
    },
]

export function useFoodList() {

    const [foodList, setFoodList] = useState([])

    useEffect(() => {
        setFoodList(FOOD_MOCK)
    }, [])

    const existEmptyItems = foodList.some(item => item.quantity === 0)

    const deleteEmptyItems = () => {
        const filtered = foodList.filter(item => item.quantity > 0)
        setFoodList(filtered)
    }

    const markItemToDelete = (id) => {
        const mapped = foodList.map(item => {
            if (item.id === id){
                item.quantity = 0
            }
            return item
        })
        setFoodList(mapped)
    }

    return {
        foodList,
        existEmptyItems,
        deleteEmptyItems,
        markItemToDelete
    }
} 