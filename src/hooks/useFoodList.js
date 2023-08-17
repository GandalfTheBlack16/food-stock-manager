import { useEffect } from "react"
import { useState } from "react"
import { useHttpRequest } from "./useHttpRequest"

const API_ENDPOINT = `${import.meta.env.VITE_API_BASE_URI}/api/foods`

export function useFoodList() {

    const [foodList, setFoodList] = useState([])
    const [enableCreation, setEnableCreation] = useState(false) 

    const {
        sendRequest: fetchFoodsRequest,
        error: fetchFoodsError
    } = useHttpRequest({ url: API_ENDPOINT, method: 'GET' })

    const {
        sendRequest: addFoodRequest,
        error: addFoodError
    } = useHttpRequest({ url: API_ENDPOINT, method: 'POST', headers: { 'Content-Type': 'application/json' } })

    useEffect(() => {
        fetchFoodsRequest()
        .then(foodList => {
            setFoodList(foodList)
        })
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

    const switchCreationMode = () => {
        setEnableCreation((status) => { return !status })
    }

    const addFood = async ({ name, quantity }) => {
        const foodCreated = await addFoodRequest({ name, quantity })
        setFoodList(current => [...current, foodCreated])
    }

    const editFood = ({ id, name, quantity }) => {
        const index = foodList.findIndex(item => item.id === id)
        const newList = [...foodList]
        newList[index] = { id, name, quantity }
        setFoodList(newList)
    }

    return {
        foodList,
        existEmptyItems,
        enableCreation,
        deleteEmptyItems,
        markItemToDelete,
        switchCreationMode,
        addFood,
        editFood
    }
} 