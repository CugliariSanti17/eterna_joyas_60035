import { useState, createContext } from "react";
import { useContador } from "../custom-hooks/useContador";

export const cartContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0,
})

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const agregarItem = (item, cantidad) => {
        const itemExiste = carrito.find(producto => producto.item.id === item.id)
        
        if (!itemExiste) {
            setCarrito(prev => [...prev, {item, cantidad}])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev +  (item.precio * cantidad))
        }else{
            const carritoActualizado = carrito.map( producto =>{
                if(producto.item.id === item.id){
                    return {...producto, cantidad: producto.cantidad + cantidad}
                }else{
                    return item
                }
            })

            setCarrito(carritoActualizado)
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        }
    }

    const eliminarItem = (itemId) => {
        const itemEliminado = carrito.find(producto => producto.item.id === itemId)
        const nuevoCarrito = carrito.filter(producto => producto.item.id !== itemId)

        setCarrito(nuevoCarrito)
        setCantidadTotal(prev => prev - itemEliminado.cantidad)
        setTotal(prev => prev - (itemEliminado.item.precio * itemEliminado.cantidad))
    }

    const vaciarCarrito = () =>{
        setCarrito([])
        setCantidadTotal(0)
        setTotal(0)
    }

    const disminuirItem = (item) =>{
        setTotal(prev => prev - (cantidad * item.precio));
        setCantidadTotal(prev => prev - contador)
    }

    const aumentarItem = (item, cantidad) =>{
        setTotal(prev => prev + (cantidad * item.precio));
        setCantidadTotal(prev => prev + contador)
    }

    return (
        <cartContext.Provider value={{carrito, cantidadTotal, total, agregarItem, eliminarItem, vaciarCarrito, aumentarItem, disminuirItem}}>
            {children}
        </cartContext.Provider>
    )
}
