import { useState } from "react"

export function useFoodItem({ id, outOfStock, defaultQuantity, onDeleteItem }) {

    // eslint-disable-next-line no-undef
    const [ disabled, setDisabled ] = useState(outOfStock)
    const [ quantity, setQuantity ] = useState(defaultQuantity)

    const deleteItem = () => {
        setDisabled(true)
        setQuantity(0)
        onDeleteItem(id)
    }

    return {
        disabled,
        quantity,
        deleteItem
    }
}