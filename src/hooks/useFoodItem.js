import { useState } from "react"

export function useFoodItem({ outOfStock, defaultQuantity }) {

    // eslint-disable-next-line no-undef
    const [ disabled, setDisabled ] = useState(outOfStock)
    const [ quantity, setQuantity ] = useState(defaultQuantity)

    const deleteItem = () => {
        setDisabled(true)
        setQuantity(0)
    }

    return {
        disabled,
        quantity,
        deleteItem
    }
}