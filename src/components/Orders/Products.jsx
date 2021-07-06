import React from 'react'
import { getFn } from '../../services/crud'
import { EachProduct } from './EachProduct'

export const Products = ({chosenProduct, state, handleQty}) => {

  const [products, setProducts] = React.useState([])
  const [list, setList] = React.useState([]);

  //------------------- RENDERIZANDO PRODUCTOS ----------------------
  const getProducts = async() => {
    try {
      const storedToken = localStorage.getItem('token');
      const response = await getFn(storedToken, 'products');
      setProducts(response) ;
      const firstView = response.filter((elem) => elem.type === "Desayuno");
      setList(firstView)
    }
    catch (err) {
      console.log(err)
    }
  };

  React.useEffect(() => {
    getProducts();
  }, [])
 
  //------------------- SUB MENÚ DE PRODUCTOS ----------------------
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
        <ul className="nav d-flex justify-content-around" >
          <li className="btn me-1 px-2" onClick={() => productsType("Desayuno")}>Desayuno</li>
          <li className="btn me-1 px-2" onClick={() => productsType("Hamburguesas")}>Hamburguesas</li>
          <li className="btn me-1 px-2" onClick={() => productsType("Acompañamientos")}>Acompañamientos</li>
          <li className="btn px-2" onClick={() => productsType("Bebidas")}>Bebidas</li>
        </ul>
        <hr className="m-0" />
      </nav>
      <article className="d-flex flexWrap m-1 px-1">
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
