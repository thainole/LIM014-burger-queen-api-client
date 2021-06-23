import React from 'react'
// import { productsRequest } from '../../services/products'

export const Products = () => {

  const productos = {
    "products": [
      {
        "_id": "005",
        "name": "Coffee with milk",
        "price": "7",
        "type": "drink",
        "image": "https://i.pinimg.com/564x/92/c6/28/92c628ef8827ff77ee25df2b142d66e5.jpg",
      },
      {
        "_id": "007",
        "name": "Burger",
        "price": "15",
        "type": "burger",
        "image": "https://i.pinimg.com/564x/6b/6a/06/6b6a06f2e77150adc71aa8e717e6e16d.jpg",
      },
      {
        "_id": "005",
        "name": "Coffee with milk",
        "price": "7",
        "type": "drink",
        "image": "https://i.pinimg.com/564x/92/c6/28/92c628ef8827ff77ee25df2b142d66e5.jpg",
      },
      {
        "_id": "007",
        "name": "Burger",
        "price": "15",
        "type": "burger",
        "image": "https://i.pinimg.com/564x/6b/6a/06/6b6a06f2e77150adc71aa8e717e6e16d.jpg",
      },
      {
        "_id": "005",
        "name": "Coffee with milk",
        "price": "7",
        "type": "drink",
        "image": "https://i.pinimg.com/564x/92/c6/28/92c628ef8827ff77ee25df2b142d66e5.jpg",
      },
    ]
  }
  const data = productos.products

  /* const firstView = data.filter((elem) => elem.type === "Desayuno");
  const [products, setProducts] = useState(firstView);

  const productsType = (option) => {
    // eslint-disable-next-line default-case
    switch (option) {
      case "Desayuno":
        const breakfast = data.filter((elem) => elem.type === option);
        setProducts(breakfast);
        break;
      case "Hamburguesas":
        const burgers = data.filter((elem) => elem.type === option);
        setProducts(burgers);
        break;
      case "Acompañamientos":
        const sides = data.filter((elem) => elem.type === option);
        setProducts(sides);
        break;
      case "Bebidas":
        const drinks = data.filter((elem) => elem.type === option);
        setProducts(drinks);
        break;
    }
  }; */


  return (
    <section className="containerProd">
      <h5>Hi soy productitos</h5>
      <article className="d-flex flexWrap ">
          {data.map((product) => (
            <div  className="card cardsWidth m-2" width="9rem">  
              <img src={product.image} className="card-img-top imgCardSize" alt="" /* height="50" *//>
              <div className="card-body p-1 text-center">
                <p className="m-auto fw-bold">{product.name}</p>
                <p className="m-auto">S/. {product.price}</p>
              </div>
              <button className="btn btn-danger p-1 m-1">Agregar</button>
            </div>
          ))}
      </article>
    </section>
  )
}
