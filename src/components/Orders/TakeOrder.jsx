import React from 'react'
import {Products} from './Products'

export const TakeOrder = () => {
  return (
    <section className="container-field p-2 w-100 d-flex">
      <Products />
      <p className="hr-style" />
      <h2 className="containerSize">server toma de orden</h2>
    </section>
  )
}
