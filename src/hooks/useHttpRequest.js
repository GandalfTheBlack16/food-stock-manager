import { useState } from "react"

export function useHttpRequest () {

    const [ error, setError ] = useState('')
    
    const sendRequest = async (url, method, headers, payload) => {
        try {
            const baseOptions = { method, headers, mode: 'cors' }
            const options = payload ? { ...baseOptions, body: JSON.stringify(payload) } : baseOptions
            const response = await fetch(url, options)
            if (!response.ok) {
                throw `Failed Http request with code ${response.status}`
            }
            return await response.json()
        } catch (error) {
            setError(error)
            return null
        } 
    }

    return {
        sendRequest,
        error
    }
}