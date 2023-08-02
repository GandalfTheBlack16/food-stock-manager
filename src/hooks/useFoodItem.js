import { useState } from "react"

export function useFoodItem({ id, outOfStock, defaultQuantity, onDeleteItem }) {

    // eslint-disable-next-line no-undef
    const [ disabled, setDisabled ] = useState(outOfStock)
    const [ quantity, setQuantity ] = useState(defaultQuantity)
    const [ editMode, setEditMode ] = useState(false)

    const deleteItem = () => {
        setDisabled(true)
        setQuantity(0)
        onDeleteItem(id)
    }

    const switchEditMode = () => {
        setEditMode(curr => !curr)
    }

    const editQuantity = (quantity) => {
        setQuantity(quantity)
    }

    return {
        disabled,
        quantity,
        editMode,
        deleteItem,
        switchEditMode,
        editQuantity
    }
}