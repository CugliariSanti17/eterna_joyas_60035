const listaProductos = [
    { id: 1, nombre: 'Cadena plata', precio: 10000, img:"../public/cadena_plata.webp", descripcion:"Elegante cadena de plata 925, perfecta para cualquier ocasión. Su brillo y durabilidad la convierten en una pieza esencial en tu colección de joyas" },
    { id: 2, nombre: 'Anillo oro', precio: 8000, img:"../public/anillo_oro.webp", descripcion:"Clásico anillo de oro 18k, diseñado con un acabado impecable que refleja sofisticación y estilo. Ideal para un toque de lujo en tu día a día."},
    { id: 3, nombre: 'Pulsera', precio: 5000, img:"../public/pulsera_plata.webp", descripcion:"Moderna pulsera, combinando diseño y comodidad. El complemento perfecto para cualquier outfit, destacando por su versatilidad y estilo." },
    { id: 4, nombre: 'Aritos', precio: 3500, img:"../public/par_aritos.webp", descripcion:"Delicados aritos con un diseño minimalista, perfectos para un look diario o para ocasiones especiales. Un toque sutil de elegancia." },
    { id: 5, nombre: 'Cadena oro', precio: 15000, img:"../public/cadena_oro.png", descripcion:"Lujosa cadena de oro 18k, con un acabado brillante y resistente. Añade un toque de distinción y estilo a cualquier atuendo."},
    { id: 6, nombre: 'Anillo plata y oro', precio: 5000, img:"../public/anillo_plata_y_oro.jpg", descripcion:"Anillo bicolor, combinando la pureza de la plata 925 con la calidez del oro 18k. Un diseño único que destaca por su elegancia y originalidad."},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaProductos)
        }, 100)
    })
}