import {useState} from "react"

export const useContador = (valorInicial, valorFinal)=>{
    const [contador, setContador] = useState(valorInicial);

    const aumentar = ()  =>{
        if(contador < valorFinal){
            setContador(contador+1)
        }
    }

    const disminuir = () =>{
        if(contador > valorInicial){
            setContador(contador-1);
        }
    }

    return {contador, aumentar, disminuir}
}