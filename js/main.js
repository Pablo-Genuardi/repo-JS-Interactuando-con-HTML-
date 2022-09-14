//array de productos

const Products =
[
    {
        id:1,
        name: 'Semillas de Tomate Platense',
        price: '480',
        description: 'Agroecologicas, produccion propia',
        image: 'img/tomate-platense.png'
    },

    {
        id:2,
        name: 'Semillas de Cebolla Verdeo',
        price: '480',
        description: 'Agroecologicas, produccion propia',
        image: 'img/cebolla-verdeo.png'
    },

    {
        id:3,
        name: 'Semillas de Dinosaur Kale',
        price: '480',
        description: 'Agroecologicas, importadas',
        image: 'img/dinosaur-kale.png'
    },
]

const loadproducts = (Products) =>
{
    let container = document.querySelector('#container');
    console.log('container: ', container);
    for (const product of Products )
    {
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = `
            <img src="${product.image}" alt="${product.description}">
            <h3>$${product.price}</h3>
            <h4>${product.name}</h4>
            <button>Add to cart</button>
        `;
        container.appendChild(div);
    
    }
}

loadproducts(Products);