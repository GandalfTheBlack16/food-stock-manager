import { useState } from "react"

export function useHttpRequest ({ url, method, headers }) {

    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState('')

    const baseOptions = {
        method,
        headers,
        mode: 'cors'
    }

    const sendRequest = async (payload) => {
        try {
            setLoading(true)
            const options = payload ? { ...baseOptions, body: JSON.stringify(payload) } : baseOptions
            const response = await fetch(url, options)
            if (!response.ok) {
                throw `Failed Http request with code ${response.status}`
            }
            return await response.json()
        } catch (error) {
            setError(error)
            return []
        } finally {
            setLoading(false)
        }
    }

    return {
        sendRequest,
        loading,
        error
    }
}