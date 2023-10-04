import { useState } from "react"

export const useCounter = (valorInicial = 0) => {

    const [contador, setContador] = useState(valorInicial)
    const incrementar = (valor = 1) => {
        setContador(contador + valor)
    }
    const resetear = (valor) => {
        setContador(0)
    }
    const decrementar = (valor = 1, condition) => {
        if (!condition && contador < 1) return
        setContador(contador - valor)
    }

    return {
        contador,
        incrementar,
        decrementar,
        resetear
    }
} 