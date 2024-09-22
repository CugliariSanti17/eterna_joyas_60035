import { useState, createContext } from "react";

export const cartContext = createContext({
    carrito: [],
    cantidad: 0,
    cantidadTotal: 0,
})

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const agregarItem = (item, cantidad) => {
        const itemExiste = carrito.find(producto => producto.item.id === item.id)
        
        if (!itemExiste) {
            setCarrito(prev => [...prev, {item, cantidad }])
            setCantidadTotal(prev =>{prev + cantidad})
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
        const itemEliminado = carrito.find(item => item.id === itemId)
        const nuevoCarrito = carrito.filter(item => item.id !== itemId)

        setCarrito(nuevoCarrito)
        setCantidadTotal(prev => prev - itemEliminado.cantidad)
        setTotal(prev => prev - (itemEliminado.precio * itemEliminado.cantidad))
    }

    const vaciarCarrito = () =>{
        setCarrito([])
        setCantidadTotal(0)
        setTotal(0)
    }

    return (
        <cartContext.Provider value={{carrito, cantidadTotal,total, agregarItem,eliminarItem,vaciarCarrito}}>
            {children}
        </cartContext.Provider>
    )
}
