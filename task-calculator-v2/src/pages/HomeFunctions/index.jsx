import React from 'react'
import { Calculator } from "@/components/functions/Calculator"
import { Header } from "@/components/Header"

export function Home() {
  return (
    <React.Fragment>
      <Header />

      <Calculator />
    </React.Fragment>
  )
}
