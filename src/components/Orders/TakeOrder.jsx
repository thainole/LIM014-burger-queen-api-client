import React from 'react'
import {Products} from './Products'
import { Summary } from './Summary'

export const TakeOrder = () => {
  return (
    <section className="container-field p-2 w-100 d-flex">
      <Products />
      <p className="hr-style" />
      <Summary />
    </section>
  )
}
