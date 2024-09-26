const listaProductos = [
    { id: "1", nombre: 'Cadena plata', precio: 10000, img:"../public/cadena_plata.webp", descripcion:"Elegante cadena de plata 925, perfecta para cualquier ocasión. Su brillo y durabilidad la convierten en una pieza esencial en tu colección de joyas", idCategory: "cadenas", stock: 4 },
    { id: "2", nombre: 'Anillo oro', precio: 8000, img:"../public/anillo_oro.webp", descripcion:"Clásico anillo de oro 18k, diseñado con un acabado impecable que refleja sofisticación y estilo. Ideal para un toque de lujo en tu día a día.", idCategory: "anillos", stock: 5 },
    { id: "3", nombre: 'Pulsera', precio: 5000, img:"../public/pulsera_plata.webp", descripcion:"Moderna pulsera, combinando diseño y comodidad. El complemento perfecto para cualquier outfit, destacando por su versatilidad y estilo.", idCategory: "pulseras", stock: 3 },
    { id: "4", nombre: 'Aritos', precio: 3500, img:"../public/par_aritos.webp", descripcion:"Delicados aritos con un diseño minimalista, perfectos para un look diario o para ocasiones especiales. Un toque sutil de elegancia.", idCategory: "aros", stock: 6 },
    { id: "5", nombre: 'Cadena oro', precio: 15000, img:"../public/cadena_oro.png", descripcion:"Lujosa cadena de oro 18k, con un acabado brillante y resistente. Añade un toque de distinción y estilo a cualquier atuendo.", idCategory:"cadenas", stock: 6},
    { id: "6", nombre: 'Anillo plata y oro', precio: 5000, img:"../public/anillo_plata_y_oro.jpg", descripcion:"Anillo bicolor, combinando la pureza de la plata 925 con la calidez del oro 18k. Un diseño único que destaca por su elegancia y originalidad.", idCategory:"anillos", stock: 3},
    { id: "7", nombre: "Cadena Cubana", precio: 20000, img:"../public/cadena_cubana.jpg", descripcion:"Eleva tu estilo con esta impresionante cadena cubana de alta calidad. Con un diseño robusto y elegante, es el accesorio perfecto para cualquier ocasión. Hecha para destacar y durar, su brillo dorado añade un toque de lujo a tu look diario o eventos especiales.", idCategory: "cadenas", stock: 5},
    { id: "8", nombre: "Cadena Plata 925", precio: 10000, img:"../public/cade_plata_925.webp", descripcion:"Descubre la elegancia atemporal de nuestra cadena de plata 925. Con su brillo sutil y acabado impecable, es el accesorio ideal para quienes buscan un toque sofisticado y versátil.", idCategory: "cadenas", stock: 10},
    {id: "9", nombre:"Pulsera Pandora", precio:15000, img:"../public/pulsera_pandora_plata.jpg", descripcion:"Expresa tu estilo único con nuestra exclusiva pulsera de plata estilo Pandora. Fabricada en plata 925 de la más alta calidad, esta pieza te permite personalizar tu look con charms y dijes que representen tus momentos más especiales.", idCategory: "pulseras", stock: 7},
    {id: "10", nombre:"Anillo de oro c/ diamantes", precio:30000, img:"../public/anillo_con_diamante.jpg", descripcion:"Luce la elegancia definitiva con este deslumbrante anillo de oro, adornado con brillantes diamantes. Su diseño sofisticado combina a la perfección el lujo y la delicadeza, convirtiéndolo en la joya ideal para momentos inolvidables.", idCategory: "anillos", stock: 4},
    {id: "11", nombre:"Pulsera Oro 18K", precio:40000, img:"../public/pulsera_oro_18k.avif", descripcion:"Realza tu estilo con esta exquisita pulsera de oro de 18 quilates, diseñada para quienes aprecian la belleza y la calidad en cada detalle.", idCategory: "pulseras", stock: 5},
    {id: "12", nombre:"Aritos Cruz", precio:6500, img:"../public/aros_cruz.webp", descripcion:"Luce un estilo moderno y significativo con este elegante aro de cruz. Su diseño minimalista, pero lleno de carácter, combina a la perfección con cualquier look, aportando un toque espiritual y contemporáneo.", idCategory: "aros", stock:10},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaProductos)
        }, 100)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = listaProductos.find(producto => producto.id === id)
            resolve(product)
        }, 100)
    })
}

export const getCategories = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
           const productCategory = listaProductos.filter(producto => producto.idCategory === id)
           resolve(productCategory)
        }, 100)
    })
}