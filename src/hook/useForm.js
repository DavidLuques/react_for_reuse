import { useState } from "react"

export const useForm = (initialform = {}) => {

    const [formState, setFormState] = useState(initialform)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    return {formState,
        onInputChange}
        
    
}

