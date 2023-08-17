import { useEffect } from "react"
import { useState } from "react"
import { useHttpRequest } from "./useHttpRequest"

const API_ENDPOINT = `${import.meta.env.VITE_API_BASE_URI}/api/foods`

export function useFoodList() {

    const [foodList, setFoodList] = useState([])
    const [enableCreation, setEnableCreation] = useState(false)
    const [loading, setLoading] = useState(false) 

    const {
        sendRequest,
        error: requestError
    } = useHttpRequest()

    useEffect(() => {
        setLoading(true)
        sendRequest(API_ENDPOINT, 'GET')
        .then(foodList => {
            if (!foodList) {
                setFoodList([])
                return () => {}
            } 
            setFoodList(foodList)
            setLoading(false)
        })
    }, [])

    const existEmptyItems = foodList.some(item => item.quantity === 0)

    const deleteEmptyItems = () => {
        const toDelete = foodList.filter(item => item.quantity === 0)
        toDelete.forEach((item) => {
            sendRequest(`${API_ENDPOINT}/${item.id}`, 'DELETE')
        })
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
        const foodCreated = await sendRequest(API_ENDPOINT, 'POST', { 'Content-type': 'application/json' }, { name, quantity })
        setFoodList(current => [...current, foodCreated])
    }

    const editFood = async ({ id, name, quantity }) => {
        const foodUpdated = await sendRequest(`${API_ENDPOINT}/${id}`, 'PUT', { 'Content-type': 'application/json' }, { name, quantity })
        if (foodUpdated) {
            const index = foodList.findIndex(item => item.id === id)
            const newList = [...foodList]
            newList[index] = { id, name, quantity }
            setFoodList(newList)
        }
    }

    return {
        foodList,
        existEmptyItems,
        enableCreation,
        deleteEmptyItems,
        markItemToDelete,
        switchCreationMode,
        addFood,
        editFood,
        loading
    }
} 