import { useState } from "react";

export function useFoodForm ({ onSubmit }){
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')

    const onNameChange = (event) => {
        setName(event.target.value)
    }

    const onQuantityChange = (event) => {
        setQuantity(event.target.value)
    }

    const submit = () => {
        if (name.trim().length > 3 && parseInt(quantity) > 0){
            onSubmit({
                name,
                quantity: parseInt(quantity)
            })
            setName('')
            setQuantity('')
        }
    }

    return {
        name,
        quantity,
        onNameChange,
        onQuantityChange,
        submit
    }
}