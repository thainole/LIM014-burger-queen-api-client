import React from 'react'
import { productsRequest } from '../../services/products'
import { EachProduct } from './EachProduct'

export const Products = ({chosenProduct, state, handleQty}) => {

  const [products, setProducts] = React.useState([])

  const getProducts = async() => {
    try {
      const storedToken = localStorage.getItem('token');
      const response = await productsRequest(storedToken);
      setProducts(response) ;
    }
    catch (err) {
      console.log(err)
    }
  };

  React.useEffect(() => {
    getProducts();
  })

  const firstView = products.filter((elem) => elem.type === "Desayuno");
  const [list, setList] = React.useState(firstView);

  const productsType = (option) => {
    // eslint-disable-next-line default-case
    switch (option) {
      case "Desayuno":
        const breakfast = products.filter((elem) => elem.type === option);
        return setList(breakfast);
      case "Hamburguesas":
        const burgers = products.filter((elem) => elem.type === option);
        return setList(burgers);
      case "Acompañamientos":
        const sides = products.filter((elem) => elem.type === option);
        return setList(sides);
      case "Bebidas":
        const drinks = products.filter((elem) => elem.type === option);
        return setList(drinks);
    }
  }; 
  
  return (
    <section className="containerProd">
      <nav>
        <ul className="nav" >
          <li className="btn me-1 px-2" onClick={() => productsType("Desayuno")}>Desayuno</li>
          <li className="btn me-1 px-2" onClick={() => productsType("Hamburguesas")}>Hamburguesas</li>
          <li className="btn me-1 px-2" onClick={() => productsType("Acompañamientos")}>Acompañamientos</li>
          <li className="btn px-2" onClick={() => productsType("Bebidas")}>Bebidas</li>
        </ul>
        <hr className="m-0" />
      </nav>
      <article className="d-flex flexWrap ">
        {list.map((product) => (
          <EachProduct 
            product={product} 
            key={product._id}
            chosenProduct={chosenProduct}
            state={state}
            handleQty={handleQty}
          />
        ))}
    </article>
    </section>
  )
}
